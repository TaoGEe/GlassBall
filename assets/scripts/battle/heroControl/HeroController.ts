import { _decorator, Component, Node, System, systemEvent, SystemEvent, EventKeyboard, v3, EventTouch, CameraComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("HeroController")
export class HeroController extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    mKeyDown = {};

    mSpeed = 10;

    mCamera : Node = null;


    start () {

        this.mCamera = this.node.getChildByName("Camera");
        // Your initialization goes here.
        this.mKeyDown[cc.macro.KEY.w] = false;
        this.mKeyDown[cc.macro.KEY.s] = false;
        this.mKeyDown[cc.macro.KEY.a] = false;
        this.mKeyDown[cc.macro.KEY.d] = false;

        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
        this.node.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }

    onKeyDown( event: EventKeyboard ) {
        if (this.mKeyDown.hasOwnProperty( event.keyCode )) {
            this.mKeyDown[event.keyCode] = true;
        }
    }

    onKeyUp( event : EventKeyboard ) {
        if (this.mKeyDown.hasOwnProperty( event.keyCode )) {
            this.mKeyDown[event.keyCode] = false;
        }
    }

    onTouchMove( touch : Touch, event : EventTouch ) {
        cc.log("touch"+touch.clientX)

        
    }

    onCameraRotation( delta : number) {
        let rotation = this.node.getRotation();
        rotation.y -= delta/1000;
        this.node.setRotation( rotation );
    }


    update (deltaTime: number) {
        // Your update function goes here.
        let pos = this.node.getPosition();
        if (this.mKeyDown[cc.macro.KEY.w]) {
            pos.z -= this.mSpeed*deltaTime;
        }
        if (this.mKeyDown[cc.macro.KEY.s]) {
            pos.z += this.mSpeed*deltaTime;
        }
        if (this.mKeyDown[cc.macro.KEY.a]) {
            pos.x -= this.mSpeed*deltaTime;
        }
        if (this.mKeyDown[cc.macro.KEY.d]) {
            pos.x += this.mSpeed*deltaTime;
        }
        this.node.setPosition(pos)
    }
}
