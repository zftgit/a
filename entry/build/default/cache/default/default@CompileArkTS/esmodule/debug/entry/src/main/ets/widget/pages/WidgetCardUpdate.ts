if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Widget1Card_Params {
    formId?: string;
    itemData?: CardListItemData[];
    ACTION_TYPE?: string;
    ABILITY_NAME?: string;
    MESSAGE?: string;
    FULL_HEIGHT_PERCENT?: string;
}
import { CommonConstants } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonConstants";
import type { CardListItemData } from '../../common/CommonData';
let localStorage = new LocalStorage();
class Widget1Card extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.ACTION_TYPE = 'router';
        this.ABILITY_NAME = 'EntryAbility';
        this.MESSAGE = 'add detail';
        this.FULL_HEIGHT_PERCENT = '100%';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Widget1Card_Params) {
        if (params.ACTION_TYPE !== undefined) {
            this.ACTION_TYPE = params.ACTION_TYPE;
        }
        if (params.ABILITY_NAME !== undefined) {
            this.ABILITY_NAME = params.ABILITY_NAME;
        }
        if (params.MESSAGE !== undefined) {
            this.MESSAGE = params.MESSAGE;
        }
        if (params.FULL_HEIGHT_PERCENT !== undefined) {
            this.FULL_HEIGHT_PERCENT = params.FULL_HEIGHT_PERCENT;
        }
    }
    updateStateVars(params: Widget1Card_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__formId.purgeDependencyOnElmtId(rmElmtId);
        this.__itemData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__formId.aboutToBeDeleted();
        this.__itemData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __formId: ObservedPropertyAbstractPU<string> = this.createLocalStorageProp<string>('formId', '', "formId");
    get formId() {
        return this.__formId.get();
    }
    set formId(newValue: string) {
        this.__formId.set(newValue);
    }
    private __itemData: ObservedPropertyAbstractPU<CardListItemData[]> = this.createLocalStorageProp<CardListItemData[]>('cardList', [CommonConstants.CARD_LIST_DATA_FIRST[0]], "itemData");
    get itemData() {
        return this.__itemData.get();
    }
    set itemData(newValue: CardListItemData[]) {
        this.__itemData.set(newValue);
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
     * The height percentage setting.
     */
    readonly FULL_HEIGHT_PERCENT: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.onClick(() => {
                postCardAction(this, {
                    action: this.ACTION_TYPE,
                    abilityName: this.ABILITY_NAME,
                    params: {
                        message: this.MESSAGE
                    }
                });
            });
            Column.alignItems(HorizontalAlign.Start);
            Column.width('100%');
            Column.height('100%');
            Column.backgroundImage(this.itemData[0].bgImage);
            Column.backgroundImageSize(ImageSize.Cover);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.itemData[0].title);
            Text.maxLines(1);
            Text.fontColor(Color.White);
            Text.fontSize(18);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.fontWeight(FontWeight.Bold);
            Text.margin({
                left: 12,
                top: 12,
                right: 12
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.backgroundBlurStyle(BlurStyle.BACKGROUND_THIN);
            Row.height(56);
            Row.alignItems(VerticalAlign.Bottom);
            Row.padding({
                top: 6,
                left: 12,
                right: 12,
                bottom: 12
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.itemData[0].content);
            Text.layoutWeight(1);
            Text.maxLines(2);
            Text.fontColor(Color.White);
            Text.fontSize(14);
            Text.lineHeight(19);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(26);
            Row.aspectRatio(1);
            Row.onClick(() => {
                postCardAction(this, {
                    action: 'call',
                    abilityName: 'EntryAbility',
                    params: {
                        formId: this.formId,
                        msgId: this.itemData[0].id,
                        method: 'updateFormFavour',
                        message: 'Call refresh card.'
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.itemData[0].favour) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        SymbolGlyph.create({ "id": 125831544, "type": 40000, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
                        SymbolGlyph.fontSize(24);
                        SymbolGlyph.aspectRatio(1);
                        SymbolGlyph.fontColor([Color.White]);
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
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Widget1Card";
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadEtsCard(new Widget1Card(undefined, {}, localStorage), "com.example.cardinforefresh/entry/ets/widget/pages/WidgetCardUpdate");
ViewStackProcessor.StopGetAccessRecording();
