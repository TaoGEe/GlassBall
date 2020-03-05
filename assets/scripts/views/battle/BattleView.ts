import { _decorator, Component, Node, SystemEvent, EventTouch, find, ProgressBarComponent } from "cc";
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

    mTouchTime = 0;

    mProcessForce : ProgressBarComponent = null;

    mStartAddForce = false;
    mForceAdd = 1;
    mForce = 0;

    mMaxForce = 2;

    start () {
        this.mProcessForce = this.getComponentInChildren(ProgressBarComponent);
        // Your initialization goes here.
        let skill3 = this.node.getChildByPath("Content/RightDown/Layout/ButtonSkill3");
        this.bindTouch(skill3, this.onForce, this);
        this.mPlayer = find("game/Hero").getComponent(HeroController);


        this.bindTouch(this.node, this.onTouch, this);

        
    }

    bindTouch ( node:Node, callback, cTarget ) {
        node.on(Node.EventType.TOUCH_START, callback, cTarget);
        node.on(Node.EventType.TOUCH_MOVE, callback, cTarget);
        node.on(Node.EventType.TOUCH_END, callback, cTarget);
        node.on(Node.EventType.TOUCH_CANCEL, callback, cTarget);
    }

    onTouch( event: EventTouch ) {
        if ( event.getEventCode() == EventTouch.BEGAN ) {
            
        } else if ( event.getEventCode() == EventTouch.MOVED ) {
            this.mPlayer.onCameraRotation(event.getDeltaX());
        }
    }

    onForce( event: EventTouch ) {
        if ( event.getEventCode() == EventTouch.BEGAN ) {
            this.mStartAddForce = true;
            this.mForce = 0;
            this.mForceAdd = 1;
        } else if ( event.getEventCode() == EventTouch.ENDED || event.getEventCode() == EventTouch.CANCELLED) {
            this.mPlayer.addForce(this.mForce);
            this.mForce = 0;
            this.mStartAddForce = false;
            this.mForceAdd = 1;
            this.mProcessForce.progress = 0;
        }
    }

    update (deltaTime: number) {
        // Your update function goes here.
        if (this.mStartAddForce) {
            if (this.mForce>=this.mMaxForce) {
                this.mForceAdd = -this.mForceAdd;
            }
            this.mForce += deltaTime*this.mForceAdd;
            this.mProcessForce.progress = this.mForce/this.mMaxForce;
        }
    }

    onRestart() {
        this.mPlayer.reset()
    }

    onChange() {
        
    }

    onBack() {
        
    }

    onSkill1() {
        this.mPlayer.onSkill(1);
    }

    onSkill2() {
        this.mPlayer.onSkill(2);
    }

    onSkill3() {
        this.mPlayer.onSkill(3);
    }
}
