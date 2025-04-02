if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface WidgetCard_Params {
    actionType?;
    abilityName?;
    orderStatus?: string;
    bookImg?: ResourceStr;
    timeData?: string;
    isLogin?: boolean;
}
let storageUpdateByMsg = new LocalStorage();
class WidgetCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.actionType = 'router';
        this.abilityName = 'EntryAbility';
        this.__isLogin = new ObservedPropertySimplePU(false, this, "isLogin");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: WidgetCard_Params) {
        if (params.actionType !== undefined) {
            this.actionType = params.actionType;
        }
        if (params.abilityName !== undefined) {
            this.abilityName = params.abilityName;
        }
        if (params.isLogin !== undefined) {
            this.isLogin = params.isLogin;
        }
    }
    updateStateVars(params: WidgetCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__orderStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__bookImg.purgeDependencyOnElmtId(rmElmtId);
        this.__timeData.purgeDependencyOnElmtId(rmElmtId);
        this.__isLogin.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__orderStatus.aboutToBeDeleted();
        this.__bookImg.aboutToBeDeleted();
        this.__timeData.aboutToBeDeleted();
        this.__isLogin.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    readonly actionType;
    readonly abilityName;
    private __orderStatus: ObservedPropertyAbstractPU<string> = this.createLocalStorageProp<string>('orderStatus', '已签收', "orderStatus");
    get orderStatus() {
        return this.__orderStatus.get();
    }
    set orderStatus(newValue: string) {
        this.__orderStatus.set(newValue);
    }
    private __bookImg: ObservedPropertyAbstractPU<ResourceStr> = this.createLocalStorageProp<ResourceStr>('bookImg', '', "bookImg");
    get bookImg() {
        return this.__bookImg.get();
    }
    set bookImg(newValue: ResourceStr) {
        this.__bookImg.set(newValue);
    }
    private __timeData: ObservedPropertyAbstractPU<string> = this.createLocalStorageProp<string>('timeData', '03-28 14:56', "timeData");
    get timeData() {
        return this.__timeData.get();
    }
    set timeData(newValue: string) {
        this.__timeData.set(newValue);
    }
    private __isLogin: ObservedPropertySimplePU<boolean>;
    get isLogin() {
        return this.__isLogin.get();
    }
    set isLogin(newValue: boolean) {
        this.__isLogin.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.height('100%');
            Stack.width('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isLogin ? this.orderStatus : '');
            Text.width(45);
            Text.fontSize(12);
            Text.borderRadius({ bottomRight: 10 });
            Text.backgroundColor(Color.White);
            Text.padding(3);
            Text.position({ x: 0, y: 0 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777320, "type": 20000, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" });
            Image.width(20);
            Image.position({ x: 125, y: 8 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isLogin ? { "id": 16777317, "type": 20000, params: [], "bundleName": "com.example.cardinforefresh", "moduleName": "entry" } : '');
            Image.width(50);
            Image.height(50);
            Image.borderRadius(10);
            Image.position({ x: 53.5, y: 25 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isLogin ? `包裹${this.orderStatus}` : '请登录账号');
            Text.fontSize(12);
            Text.fontWeight(400);
            Text.position({ x: 47, y: 85 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isLogin ? '查看订单详情 >' : '去登录');
            Text.borderRadius(5);
            Text.fontSize(10);
            Text.fontColor(Color.White);
            Text.backgroundColor('#FFA500');
            Text.padding({ top: 5, bottom: 5, left: 20, right: 20 });
            Text.position({ x: 23, y: 108 });
            Text.onClick((event: ClickEvent) => {
                if (this.isLogin) {
                    // 已登录，跳转到订单详情页面
                    postCardAction(this, {
                        action: this.actionType,
                        abilityName: this.abilityName,
                        params: { targetPage: 'order' }
                    });
                    console.log('isLogin:' + this.isLogin);
                }
                else {
                    // 未登录，跳转到登录页面
                    postCardAction(this, {
                        action: this.actionType,
                        abilityName: this.abilityName,
                        params: { targetPage: 'login' }
                    });
                    console.log('isLogin:' + this.isLogin);
                }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.isLogin ? this.timeData : '');
            Text.width('100%');
            Text.textAlign(TextAlign.Center);
            Text.fontSize(10);
            Text.fontColor(Color.Gray);
            Text.position({ y: 138 });
        }, Text);
        Text.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "WidgetCard";
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadEtsCard(new WidgetCard(undefined, {}, storageUpdateByMsg), "com.example.cardinforefresh/entry/ets/widget/pages/myCart");
ViewStackProcessor.StopGetAccessRecording();
