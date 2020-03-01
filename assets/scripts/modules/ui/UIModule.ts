import { _decorator } from "cc";
import { ModuleBase } from "../base/ModuleBase";
const { ccclass, property } = _decorator;

@ccclass("UIModule")
export class UIModule extends ModuleBase{

    static sViews = {
        LoginView : "prefab/ui/LoginView.prefab" ,
        Tips : "prefab/ui/Tips.prefab" ,
        HomeView : "prefab/ui/HomeView.prefab" ,
    }
}