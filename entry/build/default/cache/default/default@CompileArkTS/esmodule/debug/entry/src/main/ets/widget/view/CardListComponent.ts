if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CardListComponent_Params {
    customBuilderParam?: () => void;
    cardListParameter?: CardListParameter;
    MAX_QUANTITY?: number;
    FULL_WIDTH_PERCENT?: string;
    FULL_HEIGHT_PERCENT?: string;
}
import type { CardListParameter } from '../viewmodel/CardListParameter';
export class CardListComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.customBuilderParam = this.customBuilder;
        this.__cardListParameter = new SynchedPropertyObjectTwoWayPU(params.cardListParameter, this, "cardListParameter");
        this.MAX_QUANTITY = 99;
        this.FULL_WIDTH_PERCENT = '100%';
        this.FULL_HEIGHT_PERCENT = '100%';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CardListComponent_Params) {
        if (params.customBuilderParam !== undefined) {
            this.customBuilderParam = params.customBuilderParam;
        }
        if (params.MAX_QUANTITY !== undefined) {
            this.MAX_QUANTITY = params.MAX_QUANTITY;
        }
        if (params.FULL_WIDTH_PERCENT !== undefined) {
            this.FULL_WIDTH_PERCENT = params.FULL_WIDTH_PERCENT;
        }
        if (params.FULL_HEIGHT_PERCENT !== undefined) {
            this.FULL_HEIGHT_PERCENT = params.FULL_HEIGHT_PERCENT;
        }
    }
    updateStateVars(params: CardListComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__cardListParameter.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__cardListParameter.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __customBuilderParam;
    private __cardListParameter: SynchedPropertySimpleOneWayPU<CardListParameter>;
    get cardListParameter() {
        return this.__cardListParameter.get();
    }
    set cardListParameter(newValue: CardListParameter) {
        this.__cardListParameter.set(newValue);
    }
    /**
     * The max quantity of list items.
     */
    readonly MAX_QUANTITY: number;
    /*
   * The width percentage setting.
   */
    readonly FULL_WIDTH_PERCENT: string;
    /*
     * The height percentage setting.
     */
    readonly FULL_HEIGHT_PERCENT: string;
    customBuilder(parent = null) {
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.cardListParameter !== undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create({ alignContent: Alignment.Bottom });
                        Stack.backgroundImage(this.cardListParameter.backgroundImage);
                        Stack.backgroundImageSize(this.cardListParameter.backgroundImageSize);
                        Stack.backgroundColor(this.cardListParameter.backgroundColor);
                        Stack.padding({
                            top: { "id": 16777280, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" },
                            bottom: { "id": 16777280, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" },
                            left: { "id": 16777280, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" },
                            right: { "id": 16777280, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" }
                        });
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: FlexAlign.Start });
                        Column.pixelRound({ bottom: PixelRoundCalcPolicy.FORCE_CEIL });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(this.FULL_WIDTH_PERCENT);
                        Row.alignItems(VerticalAlign.Top);
                        Row.justifyContent(FlexAlign.SpaceBetween);
                        Row.padding({ bottom: { "id": 16777279, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.layoutWeight(1);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.cardListParameter.title);
                        Text.fontSize({ "id": 16777281, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                        Text.fontWeight(FontWeight.Bold);
                        Text.height({ "id": 16777282, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                        Text.fontColor(this.cardListParameter.titleColor);
                        Text.padding({ right: { "id": 16777283, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
                        Text.maxLines(1);
                        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.cardListParameter.isLogin) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(this.cardListParameter.isLogin.toString());
                                    Text.fontSize({ "id": 16777281, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    Text.fontWeight(FontWeight.Bold);
                                    Text.height({ "id": 16777282, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    Text.fontColor(this.cardListParameter.titleColor);
                                    Text.padding({ right: { "id": 16777283, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
                                    Text.maxLines(1);
                                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.cardListParameter.isItemCount && this.cardListParameter.itemCount) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(this.cardListParameter.itemCount > this.MAX_QUANTITY ? '99+' :
                                        this.cardListParameter.itemCount.toString());
                                    Text.textAlign(TextAlign.Center);
                                    Text.fontSize({ "id": 16777267, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    Text.fontWeight(FontWeight.Medium);
                                    Text.fontColor(this.cardListParameter.itemCountColor);
                                    Text.backgroundColor(this.cardListParameter.itemCountBackgroundColor);
                                    Text.width({ "id": 16777270, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    Text.height({ "id": 16777268, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    Text.borderRadius({ "id": 16777269, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.cardListParameter.logo);
                        Image.width({ "id": 16777276, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                        Image.height({ "id": 16777276, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                        Image.margin({ left: { "id": 16777265, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } });
                    }, Image);
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create();
                        List.width(this.FULL_WIDTH_PERCENT);
                        List.height(this.FULL_HEIGHT_PERCENT);
                        List.layoutWeight(1);
                        List.scrollBar(BarState.Off);
                    }, List);
                    this.customBuilderParam.bind(this)();
                    List.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create({ alignContent: Alignment.BottomEnd });
                        Stack.width(this.FULL_WIDTH_PERCENT);
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.cardListParameter.isMask) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Row.create();
                                    Row.width(this.FULL_WIDTH_PERCENT);
                                    Row.height({ "id": 16777277, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    Row.linearGradient({
                                        direction: GradientDirection.Top,
                                        repeating: false,
                                        colors: [[this.cardListParameter.maskColor, 0.0], ['#00ffffff', 1]]
                                    });
                                    Row.pixelRound({ bottom: PixelRoundCalcPolicy.FORCE_CEIL });
                                    Row.hitTestBehavior(HitTestMode.None);
                                }, Row);
                                Row.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.cardListParameter.isBottomIcon) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Image.create(this.cardListParameter.bottomIcon);
                                    Image.width({ "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                    Image.height({ "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                                }, Image);
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    Stack.pop();
                    Stack.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
