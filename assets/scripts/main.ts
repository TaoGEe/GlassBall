import { _decorator, Component, Node, CanvasPool, instantiate, find } from "cc";
import { UIManager } from "./modules/ui/UIManager";
import { UIModule } from "./modules/ui/UIModule";
const { ccclass, property } = _decorator;

@ccclass("main")
export class main extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        UIManager.getInstance().openView({
            viewName : UIModule.sViews.LoginView,
            param : "1"
        }, function ( view ) {
            
        })
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
