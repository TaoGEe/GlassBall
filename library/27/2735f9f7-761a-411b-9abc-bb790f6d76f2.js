System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, UIAdaptor;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2735fn3dhpBG5q8u3kPbXby", "UIAdapt", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIAdaptor", UIAdaptor = (_dec = ccclass("UIAdaptor"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        function UIAdaptor() {
          _classCallCheck(this, UIAdaptor);
        }

        _createClass(UIAdaptor, null, [{
          key: "AdaptUI",
          value: function AdaptUI(view) {
            var content = view.getChildByName(this.sAdpatName);

            if (content) {
              var canvasSize = cc.view.getCanvasSize();
              content.setContentSize(canvasSize.width / cc.view.getScaleX(), canvasSize.height / cc.view.getScaleY());
            }
          }
        }]);

        return UIAdaptor;
      }(), _class2.sAdpatName = "Content", _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvdWkvVUlBZGFwdC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlBZGFwdG9yIiwidmlldyIsImNvbnRlbnQiLCJnZXRDaGlsZEJ5TmFtZSIsInNBZHBhdE5hbWUiLCJjYW52YXNTaXplIiwiY2MiLCJnZXRDYW52YXNTaXplIiwic2V0Q29udGVudFNpemUiLCJ3aWR0aCIsImdldFNjYWxlWCIsImhlaWdodCIsImdldFNjYWxlWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7OztrQ0FLbUJHLEksRUFBYztBQUNqQyxnQkFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUNFLGNBQUwsQ0FBb0IsS0FBS0MsVUFBekIsQ0FBZDs7QUFDQSxnQkFBSUYsT0FBSixFQUFhO0FBQ1Qsa0JBQUlHLFVBQVUsR0FBR0MsRUFBRSxDQUFDTCxJQUFILENBQVFNLGFBQVIsRUFBakI7QUFDQUwsY0FBQUEsT0FBTyxDQUFDTSxjQUFSLENBQXdCSCxVQUFVLENBQUNJLEtBQVgsR0FBaUJILEVBQUUsQ0FBQ0wsSUFBSCxDQUFRUyxTQUFSLEVBQXpDLEVBQThETCxVQUFVLENBQUNNLE1BQVgsR0FBa0JMLEVBQUUsQ0FBQ0wsSUFBSCxDQUFRVyxTQUFSLEVBQWhGO0FBQ0g7QUFDSjs7OzttQkFSTVIsVSxHQUFhLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDQ09iamVjdCwgbG9hZGVyLCBQcmVmYWIsIHZpZXcsIGluc3RhbnRpYXRlLCBTcHJpdGVDb21wb25lbnQsTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJVSUFkYXB0b3JcIilcclxuZXhwb3J0IGNsYXNzIFVJQWRhcHRvciB7XHJcblxyXG4gICAgc3RhdGljIHNBZHBhdE5hbWUgPSBcIkNvbnRlbnRcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEFkYXB0VUkoIHZpZXcgOiBOb2RlICkge1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gdmlldy5nZXRDaGlsZEJ5TmFtZSh0aGlzLnNBZHBhdE5hbWUpO1xyXG4gICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXNTaXplID0gY2Mudmlldy5nZXRDYW52YXNTaXplKClcclxuICAgICAgICAgICAgY29udGVudC5zZXRDb250ZW50U2l6ZSggY2FudmFzU2l6ZS53aWR0aC9jYy52aWV3LmdldFNjYWxlWCgpLCBjYW52YXNTaXplLmhlaWdodC9jYy52aWV3LmdldFNjYWxlWSgpIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=