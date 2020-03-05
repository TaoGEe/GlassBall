import { _decorator, Component, Node, System, systemEvent, SystemEvent, EventKeyboard, v3, EventTouch, CameraComponent, Vec3, math, RigidBodyComponent, find } from "cc";
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

    mBall : RigidBodyComponent = null;

    mInitPos : Vec3 = null;

    mForce : number = 2000;

    start () {

        this.mCamera = this.node.getChildByName("Camera");
        this.mBall = find("game/BallMy").getComponent(RigidBodyComponent);

        this.mInitPos = this.mBall.node.getPosition();
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
        const up =new Vec3(0,1,0);
        const rotationx = this.node.getRotation();
        math.Quat.rotateAround(rotationx, rotationx, up, -delta/2/ 360.0 * 3.1415926535);
        this.node.setRotation(rotationx);
    }

    onSkill( index : number ) {
        if (index == 1) {
            let force = this.node.forward;
            cc.log("forward: "+force)
            let mCamera = this.mCamera.forward;
            cc.log("mCamera: "+mCamera)

            force.x *= -this.mForce;
            force.z *= -this.mForce;

            this.mBall.applyForce(force);
        } else if (index == 2) {
            this.mForce += 20;
        } else {
            this.mForce -= 20;
        }
    }

    addForce( force:number ) {
        let forward = this.node.forward;
        forward.x *= -this.mForce*force;
        forward.z *= -this.mForce*force;

        this.mBall.applyForce(forward);
    }
    

    reset() {
        this.mBall.sleep();
        this.mBall.node.setPosition(this.mInitPos);
    }

    update (deltaTime: number) {
        // Your update function goes here.
        let x = 0, z = 0;
        if (this.mKeyDown[cc.macro.KEY.w]) {
            z = -1;
        }else if (this.mKeyDown[cc.macro.KEY.s]) {
            z = 1;
        }
        if (this.mKeyDown[cc.macro.KEY.a]) {
            x = -1;
        }else if (this.mKeyDown[cc.macro.KEY.d]) {
            x = 1;
        }
        if ( x != 0 || z != 0 ) {
            this.node.translate( v3(x*deltaTime*this.mSpeed,0,z*deltaTime*this.mSpeed) );
        }        
    }
}
