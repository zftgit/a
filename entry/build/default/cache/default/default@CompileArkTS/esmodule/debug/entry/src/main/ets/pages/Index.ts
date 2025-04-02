if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DataItemView_Params {
    itemData?: CardListItemData;
    statusArr?: boolean[];
}
interface Index_Params {
    dataArr?: CardListItemData[];
    topHeight?: number;
    bottomHeight?: number;
}
import formBindingData from "@ohos:app.form.formBindingData";
import formProvider from "@ohos:app.form.formProvider";
import hilog from "@ohos:hilog";
import { CommonConstants } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonConstants";
import { FormData } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonData";
import type { CardListItemData } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonData";
import { PreferencesUtil } from "@bundle:com.example.cardinforefresh/entry/ets/common/utils/PreferencesUtil";
const TAG: string = 'Index';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__dataArr = this.createStorageLink('dataArr', [...CommonConstants.CARD_LIST_DATA_FIRST], "dataArr");
        this.__topHeight = this.createStorageLink('topHeight', 0, "topHeight");
        this.__bottomHeight = this.createStorageLink('bottomHeight', 0, "bottomHeight");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__dataArr.purgeDependencyOnElmtId(rmElmtId);
        this.__topHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__bottomHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__dataArr.aboutToBeDeleted();
        this.__topHeight.aboutToBeDeleted();
        this.__bottomHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __dataArr: ObservedPropertyAbstractPU<CardListItemData[]>;
    get dataArr() {
        return this.__dataArr.get();
    }
    set dataArr(newValue: CardListItemData[]) {
        this.__dataArr.set(newValue);
    }
    private __topHeight: ObservedPropertyAbstractPU<number>;
    get topHeight() {
        return this.__topHeight.get();
    }
    set topHeight(newValue: number) {
        this.__topHeight.set(newValue);
    }
    private __bottomHeight: ObservedPropertyAbstractPU<number>;
    get bottomHeight() {
        return this.__bottomHeight.get();
    }
    set bottomHeight(newValue: number) {
        this.__bottomHeight.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/pages/Index", isUserCreateStack: false });
            Navigation.mode(NavigationMode.Stack);
            Navigation.title({ "id": 16777219, "type": 10003, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Navigation.titleMode(NavigationTitleMode.Mini);
            Navigation.hideBackButton(true);
            Navigation.width('100%');
            Navigation.expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]);
            Navigation.backgroundColor('#F1F3F5');
            Navigation.padding({ top: px2vp(this.topHeight) });
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            Scroll.padding({
                left: 16,
                right: 16
            });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.margin({ bottom: index === this.dataArr.length - 1 ? px2vp(this.bottomHeight) : 0 });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new DataItemView(this, { itemData: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 36, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    itemData: item
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                itemData: item
                            });
                        }
                    }, { name: "DataItemView" });
                }
                __Common__.pop();
            };
            this.forEachUpdateFunction(elmtId, this.dataArr, forEachItemGenFunction, (item: CardListItemData, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
class DataItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__itemData = new SynchedPropertyObjectOneWayPU(params.itemData, this, "itemData");
        this.__statusArr = this.createStorageLink('statusArr', [], "statusArr");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DataItemView_Params) {
    }
    updateStateVars(params: DataItemView_Params) {
        this.__itemData.reset(params.itemData);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__itemData.purgeDependencyOnElmtId(rmElmtId);
        this.__statusArr.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__itemData.aboutToBeDeleted();
        this.__statusArr.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __itemData: SynchedPropertySimpleOneWayPU<CardListItemData>;
    get itemData() {
        return this.__itemData.get();
    }
    set itemData(newValue: CardListItemData) {
        this.__itemData.set(newValue);
    }
    private __statusArr: ObservedPropertyAbstractPU<boolean[]>;
    get statusArr() {
        return this.__statusArr.get();
    }
    set statusArr(newValue: boolean[]) {
        this.__statusArr.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(15);
            Column.padding(12);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.alignItems(VerticalAlign.Top);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Center);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.itemData.title);
            Text.maxLines(1);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.fontSize(16);
            Text.fontWeight(700);
            Text.lineHeight(21);
            Text.letterSpacing(0);
            Text.fontColor(Color.Black);
            Text.height(21);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.itemData.content);
            Text.maxLines(2);
            Text.fontSize(12);
            Text.lineHeight(16);
            Text.letterSpacing(0);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.fontWeight(FontWeight.Regular);
            Text.height(35);
            Text.fontColor({ "id": 125830998, "type": 10001, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.onClick(() => {
                let util = PreferencesUtil.getInstance();
                let preferences = util.getPreferences(getContext(this));
                this.statusArr[this.itemData.id] = !this.statusArr[this.itemData.id];
                this.itemData.favour = this.statusArr[this.itemData.id!];
                this.itemData.isLogin = this.statusArr[this.itemData.id!];
                console.log('______________this.itemData.isLogin:' + this.itemData.isLogin);
                util.preferencesPut(preferences, 'statusArr', ObservedObject.GetRawObject(this.statusArr));
                // Update page display data.
                AppStorage.set('statusArr', [...this.statusArr]);
                let idArr = PreferencesUtil.getInstance().getFormIds(preferences);
                if (idArr.length > 0) {
                    idArr.forEach((formId: string) => {
                        if (preferences.getSync(`${formId}_show_index`, -1) as number === this.itemData.id) {
                            let formData = new FormData(formId);
                            formData.cardList = [this.itemData];
                            let formMsg: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);
                            formProvider.updateForm(formId, formMsg).then(() => {
                                hilog.info(0x0000, TAG, `updateForm success.`);
                            }).catch((error: Error) => {
                                hilog.error(0x0000, TAG, `updateForm failed: ${JSON.stringify(error)}`);
                            });
                        }
                    });
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.statusArr[this.itemData.id!]) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        SymbolGlyph.create({ "id": 125831544, "type": 40000, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                        SymbolGlyph.fontSize(24);
                        SymbolGlyph.aspectRatio(1);
                    }, SymbolGlyph);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        SymbolGlyph.create({ "id": 125831545, "type": 40000, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                        SymbolGlyph.fontSize(24);
                        SymbolGlyph.aspectRatio(1);
                        SymbolGlyph.fontColor(['#E64566']);
                    }, SymbolGlyph);
                });
            }
        }, If);
        If.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.height(12);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.itemData.bgImage);
            Image.width('100%');
            Image.aspectRatio(16 / 9);
            Image.objectFit(ImageFit.Cover);
            Image.autoResize(true);
            Image.borderRadius(10);
        }, Image);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.cardinforefresh", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
