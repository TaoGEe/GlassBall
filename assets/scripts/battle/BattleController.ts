import { _decorator, Component, Node, loader, Prefab } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BattleController")
export class BattleController extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    mHeroControl = [];

    start () {
        // Your initialization goes here.
        
    }

    update (deltaTime: number) {
        // Your update function goes here.
    }
}
