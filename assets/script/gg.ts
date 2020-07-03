const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    lab_num: cc.Label = null;

    private numTime: number = 5;

    onLoad() {

        this.updateLabelTime();
        this.schedule(function () {
            this.numTime--;
            console.log("倒计时：" + this.numTime);
            this.updateLabelTime();

            if (this.numTime == 0) {
                this.gotoGame();
            }
        }.bind(this), 1)
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    private updateLabelTime() {
        this.lab_num.string = "" + this.numTime;
    }

    // 跳转场景
    gotoGame() {
        cc.director.loadScene("game");
    }
}
