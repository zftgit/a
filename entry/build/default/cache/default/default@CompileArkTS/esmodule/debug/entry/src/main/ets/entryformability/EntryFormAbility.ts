import type Want from "@ohos:app.ability.Want";
import systemDateTime from "@ohos:systemDateTime";
import formBindingData from "@ohos:app.form.formBindingData";
import FormExtensionAbility from "@ohos:app.form.FormExtensionAbility";
import formInfo from "@ohos:app.form.formInfo";
import formProvider from "@ohos:app.form.formProvider";
import hilog from "@ohos:hilog";
import { CommonData, FormData } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonData";
import type { CardListItemData } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonData";
import { PreferencesUtil } from "@bundle:com.example.cardinforefresh/entry/ets/common/utils/PreferencesUtil";
const TAG: string = 'EntryFormAbility';
export default class EntryFormAbility extends FormExtensionAbility {
    onAddForm(want: Want): formBindingData.FormBindingData {
        if (!want || !want.parameters) {
            hilog.error(0x0000, TAG, `FormAbility onAddForm want or want.parameters is undefined`);
            return formBindingData.createFormBindingData('');
        }
        let formName: string = want.parameters[formInfo.FormParam.NAME_KEY] as string;
        let formId: string = want.parameters[formInfo.FormParam.IDENTITY_KEY] as string;
        let util = PreferencesUtil.getInstance();
        let preferences = util.getPreferences(this.context);
        // Save form id using preferences.
        util.addFormId(preferences, formId);
        if (formName === 'card_info_refresh') {
            let formData = new FormData(formId);
            formData.formTime = systemDateTime.getTime().toString();
            let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
            return formInfo;
        }
        let key: string = `${formId}_show_index`;
        let data = util.getFormInitData(key, preferences);
        if (formName === 'card_info_update') {
            // Save the index of the data items currently displayed on the card.
            util.preferencesPut(preferences, key, data.id);
            let formData = new FormData(formId);
            formData.cardList.push(data);
            let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
            return formInfo;
        }
        return formBindingData.createFormBindingData('');
    }
    onUpdateForm(formId: string) {
        // Called to notify the form provider to update a specified form.
        hilog.info(0x0000, TAG, `FormAbility onUpdateForm, formId = ${formId}`);
        let formData = new FormData(formId);
        formData.formTime = systemDateTime.getTime().toString();
        let util = PreferencesUtil.getInstance();
        let preferences = util.getPreferences(this.context);
        let key: string = `${formId}_show_index`;
        if (preferences.hasSync(key)) {
            let index = preferences.getSync(key, 0) as number;
            let newIndex = (index + 1) % 12;
            let dataItem: CardListItemData = (preferences.getSync('dataArr', []) as CardListItemData[])[newIndex];
            dataItem.favour = (preferences.getSync('statusArr', []) as boolean[])[newIndex];
            util.preferencesPut(preferences, key, newIndex);
            formData.cardList = [dataItem];
        }
        let formMsg: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
        formProvider.updateForm(formId, formMsg);
    }
    onFormEvent(formId: string, message: string) {
        // Called when a specified message event defined by the form provider is triggered.
        hilog.info(0x0000, TAG, `FormAbility onFormEvent, formId = ${formId}, message: ${JSON.stringify(message)}`);
        let formData = new FormData(formId);
        formData.cardList = CommonData.getData();
        CommonData.changeFlag();
        let formMsg: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
        formProvider.updateForm(formId, formMsg).then(() => {
            hilog.info(0x0000, TAG, 'updateForm success.');
        }).catch((error: Error) => {
            hilog.error(0x0000, TAG, 'updateForm failed.%s', JSON.stringify(error));
        });
    }
    onAcquireFormState(want: Want) {
        // Called to return a {@link FormState} object.
        return formInfo.FormState.READY;
    }
    async onRemoveForm(formId: string): Promise<void> {
        hilog.info(0x00, TAG, `remove formId: ${formId}`);
        PreferencesUtil.getInstance().removeFormId(this.context, formId);
    }
}
