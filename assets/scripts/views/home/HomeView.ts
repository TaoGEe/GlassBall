import { _decorator, Component, Node, ButtonComponent } from "cc";
import { UIManager } from "../../modules/ui/UIManager";
import { UIModule } from "../../modules/ui/UIModule";
const { ccclass, property } = _decorator;

@ccclass("HomeView")
export class HomeView extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        let btn = this.node.getChildByPath("Content/RightDown/Layout/ButtonChallenge");
        let btncom = btn.getComponent(ButtonComponent);
        let clickEvent = new cc.Component.EventHandler();
        clickEvent.target = this.node;
        clickEvent.component = "HomeView";
        clickEvent.handler = "onChallenge";
        btncom.clickEvents.push(clickEvent);
    }

    onChallenge() {
        UIManager.getInstance().openView({
            viewName : UIModule.sBattleView.BattleView
        })
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
