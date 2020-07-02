
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    nodeReady: cc.Node = null;

    @property(cc.Node)
    nodePinTu: cc.Node = null;

    @property(cc.Node)
    bgPinTu: cc.Node = null;

    @property(cc.Prefab)
    pre_item: cc.Prefab = null;


    start() {
        this.nodeReady.active = true;
        this.nodePinTu.active = false;
    }

    initPinTu() {
        this.bgPinTu.width = 600;
        this.bgPinTu.height = 600;

        let item = cc.instantiate(this.pre_item);
        this.bgPinTu.addChild(item);
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
