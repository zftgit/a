
let storageUpdateByMsg = new LocalStorage();

@Entry(storageUpdateByMsg)
@Component
struct WidgetCard {

  readonly actionType = 'router';

  readonly abilityName = 'EntryAbility';

  @LocalStorageProp('orderStatus') orderStatus:string='已签收';

  @LocalStorageProp('bookImg') bookImg: ResourceStr = '';

  @LocalStorageProp('timeData') timeData:string='03-28 14:56'

  @State isLogin:boolean=false;

  build() {
    Stack() {
      Text(this.isLogin?this.orderStatus:'')
        .width(45)
        .fontSize(12)
        .borderRadius({bottomRight:10})
        .backgroundColor(Color.White)
        .padding(3)
        .position({x:0,y:0})
      Image($r('app.media.startIcon')).width(20).position({x:125,y:8})
      Image(this.isLogin?$r('app.media.list_item'):'').width(50).height(50).borderRadius(10).position({x:53.5,y:25})
      Text(this.isLogin?`包裹${this.orderStatus}`:'请登录账号').fontSize(12).fontWeight(400).position({x:47,y:85})
      Text(this.isLogin?'查看订单详情 >':'去登录')
        .borderRadius(5)
        .fontSize(10)
        .fontColor(Color.White)
        .backgroundColor('#FFA500')
        .padding({top:5,bottom:5,left:20,right:20})
        .position({x:23,y:108})
        .onClick((event: ClickEvent) => {
          if (this.isLogin) {
            // 已登录，跳转到订单详情页面
            postCardAction(this, {
              action: this.actionType,
              abilityName: this.abilityName,
              params: { targetPage: 'order' }
            });
            console.log('isLogin:'+ this.isLogin);
          }
          else {
            // 未登录，跳转到登录页面
            postCardAction(this, {
              action: this.actionType,
              abilityName: this.abilityName,
              params: { targetPage: 'login' }
            });
            console.log('isLogin:'+ this.isLogin);
          }
        })
      Text(this.isLogin?this.timeData:'')
        .width('100%')
        .textAlign(TextAlign.Center)
        .fontSize(10)
        .fontColor(Color.Gray)
        .position({y:138})
    }
    .height('100%')
    .width('100%')
    // .backgroundImage($r('app.media.'))

  }
}
