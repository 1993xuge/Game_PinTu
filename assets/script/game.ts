import item from "./item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class game extends cc.Component {

    private BG_SIZE: number = 650;

    @property(cc.Node)
    nodeReady: cc.Node = null;

    @property(cc.Node)
    nodePinTu: cc.Node = null;

    @property(cc.Node)
    bgPinTu: cc.Node = null;

    @property(cc.Prefab)
    pre_itemBg: cc.Prefab = null;

    @property(cc.Prefab)
    pre_item: cc.Prefab = null;

    // 横竖有多少个
    itemNum: number = 3;
    // 每个item的宽高
    itemWH: number = 1;
    // 两个块 之间的间隔
    jiange: number = 5;
    // 拼图背景的宽高
    bgPinTuWH: number = 1;


    start() {
        this.nodeReady.active = true;
        this.nodePinTu.active = false;
    }

    initHRD() {
        this.itemWH = Math.round(this.BG_SIZE / this.itemNum);
        this.bgPinTuWH = this.itemWH * this.itemNum + this.jiange * (this.itemNum + 1);

        this.bgPinTu.width = this.bgPinTuWH;
        this.bgPinTu.height = this.bgPinTuWH;

        this.addItemBg();
        this.addAllItem();
    }

    addItemBg() {
        var pos = cc.v2(-this.bgPinTuWH / 2, -this.bgPinTuWH / 2);
        for (let i = 0; i < this.itemNum; i++) {
            for (let j = 0; j < this.itemNum; j++) {
                let node = cc.instantiate(this.pre_itemBg);
                this.bgPinTu.addChild(node);

                node.width = this.itemWH;
                node.height = this.itemWH;

                // 设置位置

                var posX = pos.x + this.itemWH / 2 + this.jiange + i * (this.itemWH + this.jiange);
                var posY = pos.y + this.itemWH / 2 + this.jiange + j * (this.itemWH + this.jiange);
                var posEnd = cc.v2(posX, posY);

                // node.getChildByName("num").getComponent(cc.Label).string = "" + ((i + 1) + j * 4);

                node.setPosition(posEnd);
            }
        }
    }

    addAllItem() {
        var pos = cc.v2(-this.bgPinTuWH / 2, this.bgPinTuWH / 2);
        for (let i = 0; i < this.itemNum; i++) {
            for (let j = 0; j < this.itemNum; j++) {
                let node = cc.instantiate(this.pre_item);
                this.bgPinTu.addChild(node);

                node.width = this.itemWH;
                node.height = this.itemWH;

                // 设置位置

                var posX = pos.x + this.itemWH / 2 + this.jiange + i * (this.itemWH + this.jiange);
                var posY = pos.y - this.itemWH / 2 - this.jiange - j * (this.itemWH + this.jiange);
                // var posY = pos.y + this.itemWH / 2 + this.jiange - j * (this.itemWH + this.jiange);
                var posEnd = cc.v2(posX, posY);

                var js = node.getComponent(item);
                if (js) {
                    js.init(i + j * this.itemNum + 1, 70 - 5 * (this.itemNum - 3));
                    let isEnd = (i === this.itemNum - 1) && (j === this.itemNum - 1);

                    js.senEnd(isEnd);
                }
                node.setPosition(posEnd);
            }
        }
    }

    clickButton(e, str) {
        if (str == "pintu") {
            console.log("点击了拼图按钮");
            this.nodeReady.active = false;
            this.nodePinTu.active = true;

        } if (str == "huarongdao") {
            console.log("点击了华容道按钮");
            this.nodeReady.active = false;
            this.nodePinTu.active = true;
            this.initHRD();
        } else if (str === "fanhui") {
            console.log("点击了返回按钮");
            this.nodeReady.active = true;
            this.nodePinTu.active = false;
            this.bgPinTu.removeAllChildren();
        }
    }

    clickToggle(event, str: string) {
        console.log("click Toggle: " + str);
        this.itemNum = parseInt(str);
    }
}
