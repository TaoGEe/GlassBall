import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ViewBase")
export class ViewBase extends Component{

    mViewName : string;


    constructor(  ) {
        super();
    }

    public onOpen(...args) {

    }

    public onConvert( other : ViewBase ) {
        this.node.active = false;
    }

}
