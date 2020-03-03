import { _decorator, CCObject, loader, Prefab, view, instantiate, SpriteComponent,Node, RichTextComponent, AnimationClip, AnimationComponent, find } from "cc";
import { ViewBase } from "./ViewBase";
import { UIAdaptor } from "./UIAdapt";
import { UIModule } from "./UIModule";
const { ccclass, property } = _decorator;

@ccclass("UIManager")
export class UIManager {

    private static sInstance: UIManager;

    private mViewStack = [];
    private mTipsArray = [];

    private mCurView : ViewBase;
    private uiRoot : Node;
    private mCurScene : string;
    
    static getInstance() : UIManager {
        if (this.sInstance == null) {
            this.sInstance = new UIManager( );
        }
        return this.sInstance;
    }

    constructor(){
        this.enterNewScene(UIModule.sScene.LaunchScene)
    }

    public enterNewScene( scene : string) {
        this.mCurScene = scene;
        this.mViewStack = [];
        this.mCurView = null;
        this.uiRoot = find("Root");
    }

    public openView( viewInfo : any , callback : any = null ) {
        let uim = this;
        let scene = UIModule.GetSceneName( viewInfo.viewName );
        if (this.mCurScene != scene) {
            cc.director.loadScene(scene, function () {
                uim.enterNewScene(scene);
                uim.addViewToScene(viewInfo, callback);
            });
        } else {
            this.addViewToScene( viewInfo, callback );
        }
    }

    private addViewToScene( viewInfo : any , callback : any = null  ) {
        let uim = this;
        this.loadView( viewInfo.viewName, function ( node : Node ) {
            let view = uim.addView( node, viewInfo.param );
            if (callback) {
                callback(view);
            }
        });
    }
    
    private loadView( path : any , callback: any ) {
        loader.loadRes( path, Prefab, function ( error, preView : Prefab ) {
            if (error) {
                console.log(error);
            } else {
                callback(instantiate(preView))
            }
        })
    }

    private addView( node : Node, param : any[] ) : ViewBase {
        const view  = node.getComponent(ViewBase);
        view.onOpen(param);
        if (this.mCurView) {
            this.mCurView.onConvert(view);
            this.mViewStack.push(this.mCurView);
        }
        this.mCurView = view;
        this.uiRoot.addChild( node );
        UIAdaptor.AdaptUI(node);
        return view;
    }

    public showTips( text : any ) {
        let uim = this;
        this.loadView( UIModule.sViews.Tips, function ( node : Node ) {
            uim.addTips(node, text);
        } )
    }

    private addTips( node : Node, text : any  ) {
        this.uiRoot.addChild( node );
        let richText = node.getComponentInChildren(RichTextComponent);
        richText.string = text;

        let animation = node.getComponent(AnimationComponent);
        let uim = this;
        animation.on( "stop" , function ( state ) {
            uim.mTipsArray.shift();
            node.destroy();
        } )
        this.mTipsArray.forEach(element => {
            let pos = element.getPosition();
            pos.y += element.getContentSize().height;
            element.setPosition(pos);
        });
        this.mTipsArray.push(node);
    }

}