import { _decorator, CCObject, loader, Prefab, view, instantiate, SpriteComponent,Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("UIAdaptor")
export class UIAdaptor {

    static sAdpatName = "Content";

    public static AdaptUI( view : Node ) {
        let content = view.getChildByName(this.sAdpatName);
        if (content) {
            let canvasSize = cc.view.getCanvasSize()
            content.setContentSize( canvasSize.width/cc.view.getScaleX(), canvasSize.height/cc.view.getScaleY() )
        }
    }
}