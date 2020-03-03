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

    static sBattleView = {
        BattleView : "prefab/ui/BattleView.prefab" ,
    }

    static sScene = {
        LaunchScene : "LaunchScene" ,
        BattleScene : "BattleScene" ,
    }

    static GetSceneName( path : string ) : string {
        let fileName = path.substr( path.lastIndexOf('/')+1 );
        let key = fileName.replace(".prefab", "");
        if ( this.sViews.hasOwnProperty( key )) {
            return this.sScene.LaunchScene;
        } else if ( this.sBattleView.hasOwnProperty( key )){
            return this.sScene.BattleScene;
        }
    }
}