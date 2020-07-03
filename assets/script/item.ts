
const { ccclass, property } = cc._decorator;

@ccclass
export default class item extends cc.Component {

    @property(cc.Label)
    lab_num: cc.Label = null;

    num: number = 0;

    isEnd: boolean = false

    onLoad() { }

    init(num: number, lab_size: number) {
        this.num = num;
        this.lab_num.string = "" + num;
        this.lab_num.fontSize = lab_size;

    }

    senEnd(isEnd: boolean) {
        this.isEnd = isEnd;
        this.node.opacity = isEnd ? 0 : 255;
    }
}
