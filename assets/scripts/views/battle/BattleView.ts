import { _decorator, Component, Node, SystemEvent, EventTouch, find } from "cc";
import { HeroController } from "../../battle/heroControl/HeroController";
const { ccclass, property } = _decorator;

@ccclass("BattleView")
export class BattleView extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    mPlayer : HeroController = null;

    start () {
        // Your initialization goes here.
        this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouch, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouch, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouch, this);
        this.mPlayer = find("game/Hero").getComponent(HeroController);
    }

    onTouch( event: EventTouch ) {
        if ( event.getEventCode() == EventTouch.BEGAN ) {
            
        } else if ( event.getEventCode() == EventTouch.MOVED ) {
            this.mPlayer.onCameraRotation(event.getDeltaX());
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }

    onRestart() {
        
    }

    onChange() {
        
    }

    onBack() {
        
    }

    onSkill1() {
        
    }

    onSkill2() {
        
    }

    onSkill3() {
        
    }
}
