import { CommonConstants } from "@bundle:com.example.cardinforefresh/entry/ets/common/CommonConstants";
export class CommonData {
    static flag: number = 0;
    static getData(): Array<CardListItemData> {
        if (CommonData.flag === 0) {
            return CommonConstants.CARD_LIST_DATA_FIRST;
        }
        else if (CommonData.flag === 1) {
            return CommonConstants.CARD_LIST_DATA_SECOND;
        }
        else {
            return CommonConstants.CARD_LIST_DATA_THIRD;
        }
    }
    static changeFlag(): void {
        CommonData.flag = (CommonData.flag + 1) % 3;
    }
}
export interface CardListItemData {
    id: number;
    title: ResourceStr;
    content: ResourceStr;
    icon: Resource;
    favour: boolean;
    bgImage: Resource;
    isLogin: boolean;
}
export class FormData {
    formId: string = '';
    formTime: string = '';
    isFavor?: boolean = false;
    index?: number = 0;
    cardList: Array<CardListItemData> = [];
    constructor(formId: string) {
        this.formId = formId;
    }
}
