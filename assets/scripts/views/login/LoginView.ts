import { _decorator, Component, Node, LabelComponent, EditBoxComponent } from "cc";
import { ViewBase } from "../../modules/ui/ViewBase";
import { UIManager } from "../../modules/ui/UIManager";
import { UIModule } from "../../modules/ui/UIModule";
const { ccclass, property } = _decorator;

@ccclass("LoginView")
export class LoginView extends ViewBase {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({type:EditBoxComponent})
    editUserName : EditBoxComponent = null;

    @property({type:EditBoxComponent})
    editPWD : EditBoxComponent = null;

    private mUserName : string = "" ;
    private mPWD : string = "" ;

    public onOpen(...args) {
        console.log("loginview onOpen " + args.toString() );
    }
    
    start () {
        // Your initialization goes here.
        console.log("loginview start");
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }


    public onBtnLogin(...args) {
        this.mUserName = this.editUserName.string.trim();
        this.mPWD = this.editPWD.string;
        // UIManager.getInstance().showTips(this.mUserName+" "+this.mPWD);
        UIManager.getInstance().openView({
            viewName : UIModule.sViews.HomeView
        })
    }

    public onBtnRegister() {

    }

    public onUserNameEdit( edit : EditBoxComponent ) {
        this.mUserName = edit.string;
    }

    public onPWDEdit(edit : EditBoxComponent ) {
        this.mPWD = edit.string;
    }
}
