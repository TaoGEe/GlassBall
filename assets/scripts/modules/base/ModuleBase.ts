import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ModuleBase")
export class ModuleBase{

    mName : string;

    constructor( name:string ) {
        this.mName = name;
    }

}
