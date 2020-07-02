
const { ccclass, property } = cc._decorator;

@ccclass
export default class item extends cc.Component {

    @property(cc.Label)
    lab_num: cc.Label = null;

    num: number = 0;

    onLoad() { }

    init(num: number, lab_size: number) {
        this.num = num;
        this.lab_num.string = "" + num;
        this.lab_num.fontSize = lab_size;
    }
}