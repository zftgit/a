/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

#ifndef RESOURCE_TABLE_H
#define RESOURCE_TABLE_H

#include<stdint.h>

namespace OHOS {
const int32_t STRING_ENTRYABILITY_DESC = 0x01000002;
const int32_t STRING_ENTRYABILITY_LABEL = 0x01000003;
const int32_t STRING_ENTRYFORMABILITY_DESC = 0x01000004;
const int32_t STRING_ENTRYFORMABILITY_LABEL = 0x01000005;
const int32_t STRING_APP_NAME = 0x01000000;
const int32_t STRING_CALL = 0x01000006;
const int32_t STRING_CARD_LIST_CONTENT = 0x01000007;
const int32_t STRING_CARD_LIST_TITLE = 0x01000008;
const int32_t STRING_CONTENT1 = 0x01000009;
const int32_t STRING_CONTENT10 = 0x0100000a;
const int32_t STRING_CONTENT11 = 0x0100000b;
const int32_t STRING_CONTENT12 = 0x0100000c;
const int32_t STRING_CONTENT2 = 0x0100000d;
const int32_t STRING_CONTENT3 = 0x0100000e;
const int32_t STRING_CONTENT4 = 0x0100000f;
const int32_t STRING_CONTENT5 = 0x01000010;
const int32_t STRING_CONTENT6 = 0x01000011;
const int32_t STRING_CONTENT7 = 0x01000012;
const int32_t STRING_CONTENT8 = 0x01000013;
const int32_t STRING_CONTENT9 = 0x01000014;
const int32_t STRING_MESSAGE = 0x01000015;
const int32_t STRING_MODULE_DESC = 0x01000016;
const int32_t STRING_REASON_KEEP_BACKGROUND_RUNNING = 0x01000017;
const int32_t STRING_ROUTER = 0x01000018;
const int32_t STRING_TITLE1 = 0x01000019;
const int32_t STRING_TITLE10 = 0x0100001a;
const int32_t STRING_TITLE11 = 0x0100001b;
const int32_t STRING_TITLE12 = 0x0100001c;
const int32_t STRING_TITLE2 = 0x0100001d;
const int32_t STRING_TITLE3 = 0x0100001e;
const int32_t STRING_TITLE4 = 0x0100001f;
const int32_t STRING_TITLE5 = 0x01000020;
const int32_t STRING_TITLE6 = 0x01000021;
const int32_t STRING_TITLE7 = 0x01000022;
const int32_t STRING_TITLE8 = 0x01000023;
const int32_t STRING_TITLE9 = 0x01000024;
const int32_t STRING_WIDGET1_DESC = 0x01000025;
const int32_t STRING_WIDGET1_DISPLAY_NAME = 0x01000026;
const int32_t STRING_WIDGET_DESC = 0x01000027;
const int32_t STRING_WIDGET_DISPLAY_NAME = 0x01000028;
const int32_t COLOR_CARD_LIST_BACKGROUND = 0x01000029;
const int32_t COLOR_ITEM_TITLE_FONT = 0x0100002a;
const int32_t COLOR_LIST_ITEM_COUNT_BACKGROUND = 0x0100002b;
const int32_t COLOR_REFRESH_COLOR = 0x0100002c;
const int32_t COLOR_START_WINDOW_BACKGROUND = 0x0100002d;
const int32_t FLOAT_BORDER_RADIUS = 0x0100002e;
const int32_t FLOAT_BOTTOM_ICON_SIZE = 0x0100002f;
const int32_t FLOAT_FONT_SIZE = 0x01000030;
const int32_t FLOAT_ICON_MARGIN = 0x01000031;
const int32_t FLOAT_ITEM_CONTENT_FONT_SIZE = 0x01000032;
const int32_t FLOAT_ITEM_COUNT_FONT_SIZE = 0x01000033;
const int32_t FLOAT_ITEM_COUNT_HEIGHT = 0x01000034;
const int32_t FLOAT_ITEM_COUNT_RADIUS = 0x01000035;
const int32_t FLOAT_ITEM_COUNT_WIDTH = 0x01000036;
const int32_t FLOAT_ITEM_HEIGHT = 0x01000037;
const int32_t FLOAT_ITEM_IMAGE_SIZE = 0x01000038;
const int32_t FLOAT_ITEM_TEXT_HEIGHT = 0x01000039;
const int32_t FLOAT_ITEM_TEXT_MARGIN = 0x0100003a;
const int32_t FLOAT_LIST_DIVIDER_MARGIN = 0x0100003b;
const int32_t FLOAT_LIST_LOGO_SIZE = 0x0100003c;
const int32_t FLOAT_LIST_MASK_HEIGHT = 0x0100003d;
const int32_t FLOAT_LIST_ROW_MARGIN = 0x0100003e;
const int32_t FLOAT_LIST_ROW_PADDING_BOTTOM = 0x0100003f;
const int32_t FLOAT_LIST_SIDE_PADDING = 0x01000040;
const int32_t FLOAT_LIST_TITLE_FONT_SIZE = 0x01000041;
const int32_t FLOAT_LIST_TITLE_HEIGHT = 0x01000042;
const int32_t FLOAT_LIST_TITLE_PADDING_RIGHT = 0x01000043;
const int32_t FLOAT_REFRESH_AREA_HEIGHT = 0x01000044;
const int32_t FLOAT_REFRESH_AREA_WIDTH = 0x01000045;
const int32_t FLOAT_REFRESH_IMAGE_SIZE = 0x01000046;
const int32_t FLOAT_TEXT_IMAGE_SPACE = 0x01000047;
const int32_t MEDIA_APP_ICON = 0x01000001;
const int32_t MEDIA_BACKGROUND = 0x01000048;
const int32_t MEDIA_BOTTOM_ICON = 0x01000049;
const int32_t MEDIA_FOREGROUND = 0x0100004a;
const int32_t MEDIA_IC_PICTURE1 = 0x0100004b;
const int32_t MEDIA_IC_PICTURE10 = 0x0100004c;
const int32_t MEDIA_IC_PICTURE11 = 0x0100004d;
const int32_t MEDIA_IC_PICTURE12 = 0x0100004e;
const int32_t MEDIA_IC_PICTURE2 = 0x0100004f;
const int32_t MEDIA_IC_PICTURE3 = 0x01000050;
const int32_t MEDIA_IC_PICTURE4 = 0x01000051;
const int32_t MEDIA_IC_PICTURE5 = 0x01000052;
const int32_t MEDIA_IC_PICTURE6 = 0x01000053;
const int32_t MEDIA_IC_PICTURE7 = 0x01000054;
const int32_t MEDIA_IC_PICTURE8 = 0x01000055;
const int32_t MEDIA_IC_PICTURE9 = 0x01000056;
const int32_t MEDIA_ITEM1 = 0x01000057;
const int32_t MEDIA_ITEM10 = 0x01000058;
const int32_t MEDIA_ITEM11 = 0x01000059;
const int32_t MEDIA_ITEM12 = 0x0100005a;
const int32_t MEDIA_ITEM2 = 0x0100005b;
const int32_t MEDIA_ITEM3 = 0x0100005c;
const int32_t MEDIA_ITEM4 = 0x0100005d;
const int32_t MEDIA_ITEM5 = 0x0100005e;
const int32_t MEDIA_ITEM6 = 0x0100005f;
const int32_t MEDIA_ITEM7 = 0x01000060;
const int32_t MEDIA_ITEM8 = 0x01000061;
const int32_t MEDIA_ITEM9 = 0x01000062;
const int32_t MEDIA_LAYERED_IMAGE = 0x01000063;
const int32_t MEDIA_LIST_BACKGROUND = 0x01000064;
const int32_t MEDIA_LIST_ITEM = 0x01000065;
const int32_t MEDIA_LOGO = 0x01000066;
const int32_t MEDIA_REFRESH = 0x01000067;
const int32_t MEDIA_STARTICON = 0x01000068;
const int32_t PROFILE_BACKUP_CONFIG = 0x01000069;
const int32_t PROFILE_FORM_CONFIG = 0x0100006a;
const int32_t PROFILE_MAIN_PAGES = 0x0100006b;
}
#endif