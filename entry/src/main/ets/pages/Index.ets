/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { formBindingData, formProvider } from '@kit.FormKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { CommonConstants } from '../common/CommonConstants';
import { CardListItemData, FormData } from '../common/CommonData';
import { PreferencesUtil } from '../common/utils/PreferencesUtil';

const TAG: string = 'Index';

@Entry
@Component
struct Index {
  @StorageLink('dataArr') dataArr: CardListItemData[] = [...CommonConstants.CARD_LIST_DATA_FIRST];
  @StorageLink('topHeight') topHeight: number = 0;
  @StorageLink('bottomHeight') bottomHeight: number = 0;

  build() {
    Navigation() {
      Scroll() {
        Column({ space: 12 }) {
          ForEach(this.dataArr, (item: CardListItemData, index: number) => {
            DataItemView({ itemData: item })
              .margin({ bottom: index === this.dataArr.length - 1 ? px2vp(this.bottomHeight) : 0 })
          }, (item: CardListItemData, index: number) => index + JSON.stringify(item))
        }
      }
      .scrollBar(BarState.Off)
      .padding({
        left: 16,
        right: 16
      })
    }
    .mode(NavigationMode.Stack)
    .title($r('app.string.EntryAbility_label'))
    .titleMode(NavigationTitleMode.Mini)
    .hideBackButton(true)
    .width('100%')
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])
    .backgroundColor('#F1F3F5')
    .padding({ top: px2vp(this.topHeight) })
  }
}

@Component
struct DataItemView {
  @Prop itemData: CardListItemData;
  @StorageLink('statusArr') statusArr: boolean[] = [];

  build() {
    Column() {
      Row({ space: 12 }) {
        Column({ space: 4 }) {
          Text(this.itemData.title)
            .maxLines(1)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .fontSize(16)
            .fontWeight(700)
            .lineHeight(21)
            .letterSpacing(0)
            .fontColor(Color.Black)
            .height(21)
          Text(this.itemData.content)
            .maxLines(2)
            .fontSize(12)
            .lineHeight(16)
            .letterSpacing(0)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .fontWeight(FontWeight.Regular)
            .height(35)
            .fontColor($r('sys.color.mask_secondary'))
        }
        .alignItems(HorizontalAlign.Start)
        .justifyContent(FlexAlign.Center)
        .layoutWeight(1)

        Row() {
          if (!this.statusArr[this.itemData.id!]) {
            SymbolGlyph($r('sys.symbol.heart'))
              .fontSize(24)
              .aspectRatio(1)
          } else {
            SymbolGlyph($r('sys.symbol.heart_fill'))
              .fontSize(24)
              .aspectRatio(1)
              .fontColor(['#E64566'])
          }
        }
        .onClick(() => {
          let util = PreferencesUtil.getInstance();
          let preferences = util.getPreferences(getContext(this));
          this.statusArr[this.itemData.id] = !this.statusArr[this.itemData.id];
          this.itemData.favour = this.statusArr[this.itemData.id!];
          this.itemData.isLogin=this.statusArr[this.itemData.id!];
          console.log('______________this.itemData.isLogin:'+this.itemData.isLogin);
          util.preferencesPut(preferences, 'statusArr', this.statusArr);

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
            })
          }
        })
      }
      .alignItems(VerticalAlign.Top)
      .width('100%')

      Blank()
        .height(12)
      Image(this.itemData.bgImage)
        .width('100%')
        .aspectRatio(16 / 9)
        .objectFit(ImageFit.Cover)
        .autoResize(true)
        .borderRadius(10)
    }
    .width('100%')
    .backgroundColor(Color.White)
    .borderRadius(15)
    .padding(12)
  }
}