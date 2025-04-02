import UIAbility from "@ohos:app.ability.UIAbility";
import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import type Want from "@ohos:app.ability.Want";
import window from "@ohos:window";
import formBindingData from "@ohos:app.form.formBindingData";
import formInfo from "@ohos:app.form.formInfo";
import formProvider from "@ohos:app.form.formProvider";
import type rpc from "@ohos:rpc";
import hilog from "@ohos:hilog";
import type { BusinessError } from "@ohos:base";
import { CommonData, FormData } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonData";
import type { CardListItemData } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonData";
import { PreferencesUtil } from "@bundle:com.example.cardinforefresh/entry/ets/common/utils/PreferencesUtil";
import { CommonConstants } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonConstants";
const TAG: string = 'EntryAbility';
export default class EntryAbility extends UIAbility {
    private callFunc = (data: rpc.MessageSequence): MyParcelable => {
        let params: Record<string, string> = JSON.parse(data.readString());
        if (params.formId !== undefined) {
            let formId: string = params.formId;
            let formData = new FormData(formId);
            formData.cardList = CommonData.getData();
            CommonData.changeFlag();
            let formMsg: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
            formProvider.updateForm(formId, formMsg).then((data) => {
                hilog.info(0x0000, TAG, 'updateForm success.', JSON.stringify(data));
            }).catch((error: Error) => {
                hilog.info(0x0000, TAG, 'updateForm failed.', JSON.stringify(error));
            });
        }
        return new MyParcelable(1);
    };
    private callUpdateFunc = (data: rpc.MessageSequence): MyParcelable => {
        let params: Record<string, string> = JSON.parse(data.readString());
        if (params.formId !== undefined) {
            let index: number = Number.parseInt(params.msgId);
            let util = PreferencesUtil.getInstance();
            let preferences = util.getPreferences(this.context);
            let dataItem: CardListItemData = (preferences.getSync('dataArr', []) as CardListItemData[])[index];
            let statusArr: boolean[] = preferences.getSync('statusArr', []) as boolean[];
            if (statusArr.length === 0) {
                statusArr = new Array(12).fill(false);
            }
            statusArr[index] = !statusArr[index];
            dataItem.favour = statusArr[index];
            preferences.putSync('statusArr', statusArr);
            preferences.flush(() => {
                AppStorage.setOrCreate('statusArr', [...statusArr]);
            });
            let idArr = PreferencesUtil.getInstance().getFormIds(preferences);
            if (idArr.length > 0) {
                idArr.forEach((formId: string) => {
                    if (preferences.getSync(`${formId}_show_index`, -1) as number === index) {
                        let formData = new FormData(formId);
                        formData.cardList = [dataItem];
                        let formMsg: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
                        formProvider.updateForm(formId, formMsg)
                            .then(() => {
                            hilog.info(0x0000, TAG, `updateForm success.`);
                        })
                            .catch((error: Error) => {
                            hilog.error(0x0000, TAG, `updateForm failed: ${JSON.stringify(error)}`);
                        });
                    }
                });
            }
        }
        return new MyParcelable(1);
    };
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        hilog.info(0x0000, TAG, '%{public}s', 'Ability onCreate');
        this.initData();
        this.updateInfo(want);
        this.callee.on('updateCardInfo', this.callFunc);
        this.callee.on('updateFormFavour', this.callUpdateFunc);
    }
    initData(): void {
        let util = PreferencesUtil.getInstance();
        let preferences = util.getPreferences(this.context);
        let dataArr: CardListItemData[] = [];
        let keyDataArr: string = 'dataArr';
        if (!preferences.hasSync(keyDataArr)) {
            CommonConstants.CARD_LIST_DATA_FIRST.forEach((item) => {
                dataArr.push(item);
            });
            CommonConstants.CARD_LIST_DATA_SECOND.forEach((item) => {
                dataArr.push(item);
            });
            CommonConstants.CARD_LIST_DATA_THIRD.forEach((item) => {
                dataArr.push(item);
            });
            preferences.putSync('dataArr', dataArr);
        }
        else {
            dataArr = preferences.getSync('dataArr', []) as CardListItemData[];
        }
        let statusArr: boolean[] = new Array(12).fill(false);
        let keyStatusArr: string = 'statusArr';
        if (!preferences.hasSync(keyStatusArr)) {
            preferences.putSync(keyStatusArr, statusArr);
        }
        else {
            statusArr = preferences.getSync('statusArr', []) as boolean[];
        }
        preferences.flush(() => {
            AppStorage.setOrCreate('dataArr', dataArr);
            AppStorage.setOrCreate('statusArr', statusArr);
        });
    }
    onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        this.updateInfo(want);
    }
    private updateInfo(want: Want) {
        if (!want || !want.parameters || want.parameters[formInfo.FormParam.IDENTITY_KEY] === undefined) {
            return;
        }
        let message: string = (JSON.parse(want.parameters?.params as string))?.message;
        if (message === 'Router refresh card.') {
            let formId = want.parameters[formInfo.FormParam.IDENTITY_KEY].toString();
            let formData = new FormData(formId);
            formData.cardList = CommonData.getData();
            CommonData.changeFlag();
            let formMsg: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
            formProvider.updateForm(formId, formMsg)
                .then((data) => {
                hilog.info(0x0000, TAG, 'updateForm success.', JSON.stringify(data));
            })
                .catch((error: Error) => {
                hilog.info(0x0000, TAG, 'updateForm failed.', JSON.stringify(error));
            });
        }
    }
    onDestroy(): void {
        hilog.info(0x0000, TAG, '%{public}s', 'Ability onDestroy');
        try {
            this.callee.off('updateCardInfo');
            this.callee.off('updateFormFavour');
        }
        catch (err) {
            hilog.error(0x0000, TAG, 'Failed to disconnect callee. Cause: %{public}s', JSON.stringify(err) ?? '');
        }
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        // Main window is created, set main page for this ability
        hilog.info(0x0000, TAG, '%{public}s', 'Ability onWindowStageCreate');
        windowStage.getMainWindow((error: BusinessError, data) => {
            if (error.code) {
                hilog.error(0x0000, TAG, 'Failed to get main window. Cause: %{public}s', JSON.stringify(error) ?? '');
                return;
            }
            data.setWindowLayoutFullScreen(true);
            AppStorage.setOrCreate('topHeight', data.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM).topRect.height);
            AppStorage.setOrCreate('bottomHeight', data.getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR).bottomRect.height);
        });
        windowStage.loadContent('pages/Index', (err) => {
            if (err.code) {
                hilog.error(0x0000, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            hilog.info(0x0000, TAG, 'Succeeded in loading the content.');
        });
    }
    onWindowStageDestroy(): void {
        // Main window is destroyed, release UI related resources
        hilog.info(0x0000, TAG, '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground(): void {
        // Ability has brought to foreground
        hilog.info(0x0000, TAG, '%{public}s', 'Ability onForeground');
    }
    onBackground(): void {
        // Ability has back to background
        hilog.info(0x0000, TAG, '%{public}s', 'Ability onBackground');
    }
}
class MyParcelable implements rpc.Parcelable {
    num: number;
    constructor(num: number) {
        this.num = num;
    }
    marshalling(dataOut: rpc.MessageSequence): boolean {
        dataOut.writeInt(this.num);
        return true;
    }
    unmarshalling(dataIn: rpc.MessageSequence): boolean {
        this.num = dataIn.readInt();
        return true;
    }
}
