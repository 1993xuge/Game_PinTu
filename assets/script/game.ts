
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    private BG_SIZE: number = 650;

    @property(cc.Node)
    nodeReady: cc.Node = null;

    @property(cc.Node)
    nodePinTu: cc.Node = null;

    @property(cc.Node)
    bgPinTu: cc.Node = null;

    @property(cc.Prefab)
    pre_item: cc.Prefab = null;

    // 横竖有多少个
    itemNum: number = 1;
    // 每个item的宽高
    itemWH: number = 1;
    // 两个块 之间的间隔
    jiange: number = 3;
    // 拼图背景的宽高
    bgPinTuWH: number = 1;


    start() {
        this.nodeReady.active = true;
        this.nodePinTu.active = false;
    }

    initPinTu() {

        this.itemNum = 4;
        this.itemWH = Math.round(this.BG_SIZE / this.itemNum);
        this.bgPinTuWH = this.itemWH * this.itemNum + this.jiange * (this.itemNum + 1);

        this.bgPinTu.width = this.bgPinTuWH;
        this.bgPinTu.height = this.bgPinTuWH;

        var pos = cc.v2(-this.bgPinTuWH / 2, -this.bgPinTuWH / 2);

        for (let i = 0; i < this.itemNum; i++) {
            for (let j = 0; j < this.itemNum; j++) {
                let node = cc.instantiate(this.pre_item);
                this.bgPinTu.addChild(node);

                node.width = this.itemWH;
                node.height = this.itemWH;

                // 设置位置

                var posEnd = cc.v2(pos.x + this.itemWH / 2, pos.y + this.itemWH / 2);
                node.setPosition(posEnd);
            }
        }
    }

    clickButton(e, str) {
        if (str == "pintu") {
            console.log("点击了拼图按钮");
            this.nodeReady.active = false;
            this.nodePinTu.active = true;
            this.initPinTu();
        } else if (str === "fanhui") {
            console.log("点击了返回按钮");
            this.nodeReady.active = true;
            this.nodePinTu.active = false;
        }
    }
}
