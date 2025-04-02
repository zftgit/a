if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface WidgetCard_Params {
    formTime?: string;
    cardList?: Array<CardListItemData>;
    formId?: string;
    cardListParameter?: CardListParameter;
    ACTION_TYPE?: string;
    ABILITY_NAME?: string;
    MESSAGE?: string;
    FULL_WIDTH_PERCENT?: string;
    FULL_HEIGHT_PERCENT?: string;
}
import { CardListComponent } from "@bundle:com.example.cardinforefresh/entry/ets/widget/view/CardListComponent";
import { CardListParameter } from "@bundle:com.example.cardinforefresh/entry/ets/widget/viewmodel/CardListParameter";
import type { CardListItemData } from '../../common/CommonData';
let storageLocal = new LocalStorage();
class WidgetCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__cardListParameter = new ObservedPropertyObjectPU(new CardListParameter({ "id": 125829129, "type": 10001, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" }, { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" }, '', ImageSize.Cover, { "id": 16777318, "type": 20000, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" }, false, { "id": 125829129, "type": 10001, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" }, true, this.cardList.length, { "id": 125829135, "type": 10001, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" }, { "id": 16777259, "type": 10001, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" }, '', false), this, "cardListParameter");
        this.ACTION_TYPE = 'router';
        this.ABILITY_NAME = 'EntryAbility';
        this.MESSAGE = 'add detail';
        this.FULL_WIDTH_PERCENT = '100%';
        this.FULL_HEIGHT_PERCENT = '100%';
        this.setInitiallyProvidedValue(params);
        this.declareWatch("formTime", this.onFormTimeChange);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: WidgetCard_Params) {
        if (params.cardListParameter !== undefined) {
            this.cardListParameter = params.cardListParameter;
        }
        if (params.ACTION_TYPE !== undefined) {
            this.ACTION_TYPE = params.ACTION_TYPE;
        }
        if (params.ABILITY_NAME !== undefined) {
            this.ABILITY_NAME = params.ABILITY_NAME;
        }
        if (params.MESSAGE !== undefined) {
            this.MESSAGE = params.MESSAGE;
        }
        if (params.FULL_WIDTH_PERCENT !== undefined) {
            this.FULL_WIDTH_PERCENT = params.FULL_WIDTH_PERCENT;
        }
        if (params.FULL_HEIGHT_PERCENT !== undefined) {
            this.FULL_HEIGHT_PERCENT = params.FULL_HEIGHT_PERCENT;
        }
    }
    updateStateVars(params: WidgetCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__formTime.purgeDependencyOnElmtId(rmElmtId);
        this.__cardList.purgeDependencyOnElmtId(rmElmtId);
        this.__formId.purgeDependencyOnElmtId(rmElmtId);
        this.__cardListParameter.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__formTime.aboutToBeDeleted();
        this.__cardList.aboutToBeDeleted();
        this.__formId.aboutToBeDeleted();
        this.__cardListParameter.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __formTime: ObservedPropertyAbstractPU<string> = this.createLocalStorageProp<string>('formTime', '', "formTime");
    get formTime() {
        return this.__formTime.get();
    }
    set formTime(newValue: string) {
        this.__formTime.set(newValue);
    }
    private __cardList: ObservedPropertyAbstractPU<Array<CardListItemData>> = this.createLocalStorageProp<Array<CardListItemData>>('cardList', [], "cardList");
    get cardList() {
        return this.__cardList.get();
    }
    set cardList(newValue: Array<CardListItemData>) {
        this.__cardList.set(newValue);
    }
    private __formId: ObservedPropertyAbstractPU<string> = this.createLocalStorageProp<string>('formId', '', "formId");
    get formId() {
        return this.__formId.get();
    }
    set formId(newValue: string) {
        this.__formId.set(newValue);
    }
    private __cardListParameter: ObservedPropertyObjectPU<CardListParameter>;
    get cardListParameter() {
        return this.__cardListParameter.get();
    }
    set cardListParameter(newValue: CardListParameter) {
        this.__cardListParameter.set(newValue);
    }
    /*
     * The action type.
     */
    readonly ACTION_TYPE: string;
    /*
     * The ability name.
     */
    readonly ABILITY_NAME: string;
    /*
     * The message.
     */
    readonly MESSAGE: string;
    /*
     * The width percentage setting.
     */
    readonly FULL_WIDTH_PERCENT: string;
    /*
     * The height percentage setting.
     */
    readonly FULL_HEIGHT_PERCENT: string;
    onFormTimeChange() {
        postCardAction(this, {
            action: 'call',
            abilityName: 'EntryAbility',
            params: {
                formId: this.formId,
                method: 'updateCardInfo',
                message: 'Call refresh card.'
            }
        });
    }
    buttonBuilder(text: ResourceStr, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.height({ "id": 16777284, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Column.width({ "id": 16777285, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Column.borderRadius({ "id": 16777262, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Column.backgroundColor({ "id": 125831015, "type": 10001, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777319, "type": 20000, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Image.width({ "id": 16777286, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Image.height({ "id": 16777286, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(text);
            Text.fontColor({ "id": 16777260, "type": 10001, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Text.fontSize({ "id": 16777266, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777287, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
    }
    cardListBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.cardList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.height(this.FULL_HEIGHT_PERCENT);
                        Column.justifyContent(FlexAlign.SpaceBetween);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            {
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    itemCreation2(elmtId, isInitialRender);
                                    if (!isInitialRender) {
                                        ListItem.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                };
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(deepRenderFunction, true);
                                    ListItem.width(this.FULL_WIDTH_PERCENT);
                                    ListItem.height({ "id": 16777271, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Row.create();
                                        Row.alignItems(VerticalAlign.Center);
                                        Row.width(this.FULL_WIDTH_PERCENT);
                                    }, Row);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Column.create();
                                        Column.margin({ right: { "id": 16777278, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
                                        Column.alignItems(HorizontalAlign.Start);
                                        Column.layoutWeight(1);
                                    }, Column);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.title);
                                        Text.maxLines(1);
                                        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                                        Text.fontSize({ "id": 16777266, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                        Text.fontWeight(FontWeight.Medium);
                                        Text.fontColor(Color.Black);
                                        Text.height({ "id": 16777273, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                        Text.margin({ top: { "id": 16777274, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.content);
                                        Text.maxLines(1);
                                        Text.fontSize({ "id": 16777266, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                                        Text.fontWeight(FontWeight.Regular);
                                        Text.height({ "id": 16777273, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Divider.create();
                                        Divider.strokeWidth(0.38);
                                        Divider.lineCap(LineCapStyle.Square);
                                        Divider.margin({ top: { "id": 16777275, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
                                        Divider.visibility(item.id === 4 ? Visibility.None : Visibility.Visible);
                                    }, Divider);
                                    Column.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Image.create(item.icon);
                                        Image.width({ "id": 16777272, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                        Image.height({ "id": 16777272, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                        Image.borderRadius({ "id": 16777262, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    }, Image);
                                    Row.pop();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.cardList, forEachItemGenFunction, (item: CardListItemData, index) => index + JSON.stringify(item), false, true);
                    }, ForEach);
                    ForEach.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(this.FULL_WIDTH_PERCENT);
                        Row.justifyContent(FlexAlign.SpaceBetween);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.onClick(() => {
                            postCardAction(this, {
                                action: 'router',
                                abilityName: 'EntryAbility',
                                params: {
                                    message: 'Router refresh card.'
                                }
                            });
                        });
                    }, Row);
                    this.buttonBuilder.bind(this)({ "id": 16777240, "type": 10003, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.onClick(() => {
                            postCardAction(this, {
                                action: 'call',
                                abilityName: 'EntryAbility',
                                params: {
                                    formId: this.formId,
                                    method: 'updateCardInfo',
                                    params: {
                                        message: 'Call refresh card.'
                                    }
                                }
                            });
                        });
                    }, Row);
                    this.buttonBuilder.bind(this)({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.onClick(() => {
                            postCardAction(this, {
                                action: 'message',
                                params: {
                                    message: 'Message refresh card.'
                                }
                            });
                        });
                    }, Row);
                    this.buttonBuilder.bind(this)({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                    Row.pop();
                    Row.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(this.FULL_HEIGHT_PERCENT);
            Row.onClick(() => {
                postCardAction(this, {
                    action: this.ACTION_TYPE,
                    abilityName: this.ABILITY_NAME,
                    params: {
                        message: this.MESSAGE
                    }
                });
            });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CardListComponent(this, {
                        cardListParameter: this.__cardListParameter,
                        customBuilderParam: () => {
                            this.cardListBuilder.bind(this)();
                        }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/widget/pages/WidgetCard.ets", line: 184, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            cardListParameter: this.cardListParameter,
                            customBuilderParam: () => {
                                this.cardListBuilder.bind(this)();
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CardListComponent" });
        }
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "WidgetCard";
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadEtsCard(new WidgetCard(undefined, {}, storageLocal), "com.example.cardinforefresh/entry/ets/widget/pages/WidgetCard");
ViewStackProcessor.StopGetAccessRecording();
