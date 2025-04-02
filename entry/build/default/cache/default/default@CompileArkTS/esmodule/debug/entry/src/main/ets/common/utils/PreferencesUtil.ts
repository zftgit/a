import preferences from "@ohos:data.preferences";
import type { CardListItemData } from '../CommonData';
import { CommonConstants } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonConstants";
import Logger from "@bundle:com.example.cardinforefresh/entry/ets/common/utils/Logger";
const TAG: string = 'PreferencesUtil';
const MY_STORE: string = 'myStore';
export class PreferencesUtil {
    private static preferencesUtil: PreferencesUtil;
    public static getInstance(): PreferencesUtil {
        if (!PreferencesUtil.preferencesUtil) {
            PreferencesUtil.preferencesUtil = new PreferencesUtil();
        }
        return PreferencesUtil.preferencesUtil;
    }
    getPreferences(context: Context): preferences.Preferences {
        preferences.removePreferencesFromCacheSync(context, MY_STORE);
        return preferences.getPreferencesSync(context, { name: MY_STORE });
    }
    preferencesFlush(preferences: preferences.Preferences) {
        preferences.flush((err) => {
            if (err) {
                Logger.error(TAG, `Failed to flush. Code:${err.code}, message:${err.message}`);
            }
        });
    }
    preferencesPut(preferences: preferences.Preferences, key: string, value: preferences.ValueType): void {
        preferences.putSync(key, value);
        this.preferencesFlush(preferences);
    }
    removePreferencesFromCache(context: Context): void {
        preferences.removePreferencesFromCache(context, MY_STORE);
    }
    getFormIds(preferences: preferences.Preferences): Array<string> {
        if (preferences === null) {
            Logger.error(TAG, `preferences is null`);
            return [];
        }
        return preferences.getSync('formIdList', ['']) as Array<string>;
    }
    addFormId(preferences: preferences.Preferences, formId: string): void {
        try {
            if (preferences.hasSync('formIdList')) {
                let formIds = this.getFormIds(preferences);
                if (formIds.indexOf(formId) === -1) {
                    formIds.push(formId);
                    this.preferencesPut(preferences, 'formIdList', formIds);
                }
            }
            else {
                this.preferencesPut(preferences, 'formIdList', [formId]);
            }
            this.preferencesFlush(preferences);
        }
        catch (error) {
            Logger.error(TAG, `Failed to check the key 'formIds'. Code:${error.code}, message:${error.message}`);
        }
    }
    getFormInitData(key: string, preferences: preferences.Preferences): CardListItemData {
        let initData: CardListItemData = CommonConstants.CARD_LIST_DATA_FIRST[0];
        let index: number = preferences.getSync(key, 0) as number;
        if (preferences.hasSync(`dataArr`)) {
            initData = (preferences.getSync(`dataArr`, []) as CardListItemData[])[index];
            initData.favour = (preferences.getSync(`statusArr`, []) as boolean[])[index];
            initData.isLogin = (preferences.getSync(`statusArr`, []) as boolean[])[index];
        }
        return initData;
    }
    removeFormId(context: Context, formId: string) {
        try {
            let preferences = this.getPreferences(context);
            if (preferences === null) {
                Logger.error(TAG, `preferences is null`);
                return;
            }
            if (preferences.hasSync('formIdList')) {
                let formIds = this.getFormIds(preferences);
                let index = formIds.indexOf(formId);
                if (index !== -1) {
                    formIds.splice(index, 1);
                }
                this.preferencesPut(preferences, 'formIdList', formIds);
                if (preferences.hasSync(`${formId}_show_index`)) {
                    preferences.deleteSync(`${formId}_show_index`);
                }
                this.preferencesFlush(preferences);
            }
        }
        catch (error) {
            Logger.error(TAG, `Failed to get preferences. Code:${error.code}, message:${error.message}`);
        }
    }
}
