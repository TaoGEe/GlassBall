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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3VpL1VJQWRhcHQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlVJQWRhcHRvciIsInZpZXciLCJjb250ZW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJzQWRwYXROYW1lIiwiY2FudmFzU2l6ZSIsImNjIiwiZ2V0Q2FudmFzU2l6ZSIsInNldENvbnRlbnRTaXplIiwid2lkdGgiLCJnZXRTY2FsZVgiLCJoZWlnaHQiLCJnZXRTY2FsZVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7a0NBS21CRyxJLEVBQWM7QUFDakMsZ0JBQUlDLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxjQUFMLENBQW9CLEtBQUtDLFVBQXpCLENBQWQ7O0FBQ0EsZ0JBQUlGLE9BQUosRUFBYTtBQUNULGtCQUFJRyxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0wsSUFBSCxDQUFRTSxhQUFSLEVBQWpCO0FBQ0FMLGNBQUFBLE9BQU8sQ0FBQ00sY0FBUixDQUF3QkgsVUFBVSxDQUFDSSxLQUFYLEdBQWlCSCxFQUFFLENBQUNMLElBQUgsQ0FBUVMsU0FBUixFQUF6QyxFQUE4REwsVUFBVSxDQUFDTSxNQUFYLEdBQWtCTCxFQUFFLENBQUNMLElBQUgsQ0FBUVcsU0FBUixFQUFoRjtBQUNIO0FBQ0o7Ozs7bUJBUk1SLFUsR0FBYSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ0NPYmplY3QsIGxvYWRlciwgUHJlZmFiLCB2aWV3LCBpbnN0YW50aWF0ZSwgU3ByaXRlQ29tcG9uZW50LE5vZGUgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiVUlBZGFwdG9yXCIpXG5leHBvcnQgY2xhc3MgVUlBZGFwdG9yIHtcblxuICAgIHN0YXRpYyBzQWRwYXROYW1lID0gXCJDb250ZW50XCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIEFkYXB0VUkoIHZpZXcgOiBOb2RlICkge1xuICAgICAgICBsZXQgY29udGVudCA9IHZpZXcuZ2V0Q2hpbGRCeU5hbWUodGhpcy5zQWRwYXROYW1lKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGxldCBjYW52YXNTaXplID0gY2Mudmlldy5nZXRDYW52YXNTaXplKClcbiAgICAgICAgICAgIGNvbnRlbnQuc2V0Q29udGVudFNpemUoIGNhbnZhc1NpemUud2lkdGgvY2Mudmlldy5nZXRTY2FsZVgoKSwgY2FudmFzU2l6ZS5oZWlnaHQvY2Mudmlldy5nZXRTY2FsZVkoKSApXG4gICAgICAgIH1cbiAgICB9XG59Il19