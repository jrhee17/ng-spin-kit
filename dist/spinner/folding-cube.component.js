var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';
var FoldingCubeComponent = (function (_super) {
    __extends(FoldingCubeComponent, _super);
    function FoldingCubeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'folding-cube-spinner';
        _this.childClass = 'cube';
        _this.numItems = 4;
        return _this;
    }
    return FoldingCubeComponent;
}(SpinnerComponent));
FoldingCubeComponent = __decorate([
    Component({
        selector: 'sk-folding-cube',
        styles: ["\n    .folding-cube-spinner {\n      position: relative;\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n      \n      -webkit-transform: rotateZ(45deg);\n      transform: rotateZ(45deg);\n    }\n    \n    .folding-cube-spinner div {\n      position: relative;\n      float: left;\n      width: 50%;\n      height: 50%;\n      background-color: transparent !important;\n      -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n      transform: scale(1.1);\n    }\n    \n    .folding-cube-spinner div:before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: #333;\n      content: '';\n      -webkit-transform-origin: 100% 100%;\n      -ms-transform-origin: 100% 100%;\n      transform-origin: 100% 100%;\n      -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n      animation: sk-foldCubeAngle 2.4s infinite linear both;\n    }\n    \n    .folding-cube-spinner .cube2 {\n      -webkit-transform: scale(1.1) rotateZ(90deg);\n      transform: scale(1.1) rotateZ(90deg);\n    }\n    \n    .folding-cube-spinner .cube4 {\n      -webkit-transform: scale(1.1) rotateZ(180deg);\n      transform: scale(1.1) rotateZ(180deg);\n    }\n    \n    .folding-cube-spinner .cube3 {\n      -webkit-transform: scale(1.1) rotateZ(270deg);\n      transform: scale(1.1) rotateZ(270deg);\n    }\n    \n    .folding-cube-spinner .cube2:before {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n    }\n    \n    .folding-cube-spinner .cube4:before {\n      -webkit-animation-delay: 0.6s;\n      animation-delay: 0.6s;\n    }\n    \n    .folding-cube-spinner .cube3:before {\n      -webkit-animation-delay: 0.9s;\n      animation-delay: 0.9s;\n    }\n    \n    @-webkit-keyframes sk-foldCubeAngle {\n      0%, 10% {\n        -webkit-transform: perspective(140px) rotateX(-180deg);\n        transform: perspective(140px) rotateX(-180deg);\n        opacity: 0;\n      }\n      25%, 75% {\n        -webkit-transform: perspective(140px) rotateX(0deg);\n        transform: perspective(140px) rotateX(0deg);\n        opacity: 1;\n      }\n      90%, 100% {\n        -webkit-transform: perspective(140px) rotateY(180deg);\n        transform: perspective(140px) rotateY(180deg);\n        opacity: 0;\n      }\n    }\n    \n    @keyframes sk-foldCubeAngle {\n      0%, 10% {\n        -webkit-transform: perspective(140px) rotateX(-180deg);\n        transform: perspective(140px) rotateX(-180deg);\n        opacity: 0;\n      }\n      25%, 75% {\n        -webkit-transform: perspective(140px) rotateX(0deg);\n        transform: perspective(140px) rotateX(0deg);\n        opacity: 1;\n      }\n      90%, 100% {\n        -webkit-transform: perspective(140px) rotateY(180deg);\n        transform: perspective(140px) rotateY(180deg);\n        opacity: 0;\n      }\n    }\n  "],
        template: SpinnerTemplate
    })
], FoldingCubeComponent);
export { FoldingCubeComponent };
//# sourceMappingURL=folding-cube.component.js.map