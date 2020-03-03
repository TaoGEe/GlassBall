System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, v3, Vec3, math, _dec, _class, _temp, _crd, ccclass, property, HeroController;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      math = _cc.math;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2406639mlpC+YT7EBdilbzy", "HeroController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HeroController", HeroController = (_dec = ccclass("HeroController"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(HeroController, _Component);

        function HeroController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HeroController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeroController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.mKeyDown = {};
          _this.mSpeed = 10;
          _this.mCamera = null;
          return _this;
        }

        _createClass(HeroController, [{
          key: "start",
          value: function start() {
            this.mCamera = this.node.getChildByName("Camera"); // Your initialization goes here.

            this.mKeyDown[cc.macro.KEY.w] = false;
            this.mKeyDown[cc.macro.KEY.s] = false;
            this.mKeyDown[cc.macro.KEY.a] = false;
            this.mKeyDown[cc.macro.KEY.d] = false;
            systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
            this.node.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (this.mKeyDown.hasOwnProperty(event.keyCode)) {
              this.mKeyDown[event.keyCode] = true;
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(event) {
            if (this.mKeyDown.hasOwnProperty(event.keyCode)) {
              this.mKeyDown[event.keyCode] = false;
            }
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(touch, event) {
            cc.log("touch" + touch.clientX);
          }
        }, {
          key: "onCameraRotation",
          value: function onCameraRotation(delta) {
            var up = new Vec3(0, 1, 0);
            var rotationx = this.node.getRotation();
            math.Quat.rotateAround(rotationx, rotationx, up, -delta / 2 / 360.0 * 3.1415926535);
            this.node.setRotation(rotationx);
          }
        }, {
          key: "_getDirection",
          value: function _getDirection(x, y, z) {
            var result = new Vec3(x, y, z);
            math.Vec3.transformQuat(result, result, this.node.getRotation());
            return result;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            var x = 0,
                z = 0;

            if (this.mKeyDown[cc.macro.KEY.w]) {
              z = -1;
            } else if (this.mKeyDown[cc.macro.KEY.s]) {
              z = 1;
            }

            if (this.mKeyDown[cc.macro.KEY.a]) {
              x = -1;
            } else if (this.mKeyDown[cc.macro.KEY.d]) {
              x = 1;
            }

            if (x != 0 || z != 0) {
              this.node.translate(v3(x * deltaTime * this.mSpeed, 0, z * deltaTime * this.mSpeed));
            }
          }
        }]);

        return HeroController;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL2JhdHRsZS9oZXJvQ29udHJvbC9IZXJvQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsInYzIiwiVmVjMyIsIm1hdGgiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJIZXJvQ29udHJvbGxlciIsIm1LZXlEb3duIiwibVNwZWVkIiwibUNhbWVyYSIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNjIiwibWFjcm8iLCJLRVkiLCJ3IiwicyIsImEiLCJkIiwib24iLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIktFWV9VUCIsIm9uS2V5VXAiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJldmVudCIsImhhc093blByb3BlcnR5Iiwia2V5Q29kZSIsInRvdWNoIiwibG9nIiwiY2xpZW50WCIsImRlbHRhIiwidXAiLCJyb3RhdGlvbngiLCJnZXRSb3RhdGlvbiIsIlF1YXQiLCJyb3RhdGVBcm91bmQiLCJzZXRSb3RhdGlvbiIsIngiLCJ5IiwieiIsInJlc3VsdCIsInRyYW5zZm9ybVF1YXQiLCJkZWx0YVRpbWUiLCJ0cmFuc2xhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBeUJDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBNEJDLE1BQUFBLEUsT0FBQUEsRTtBQUFpQ0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ3RIQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROztnQ0FHSkMsYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU0pHLFEsR0FBVyxFO2dCQUVYQyxNLEdBQVMsRTtnQkFFVEMsTyxHQUFpQixJOzs7Ozs7a0NBR1I7QUFFTCxpQkFBS0EsT0FBTCxHQUFlLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixRQUF6QixDQUFmLENBRkssQ0FHTDs7QUFDQSxpQkFBS0osUUFBTCxDQUFjSyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUEzQixJQUFnQyxLQUFoQztBQUNBLGlCQUFLUixRQUFMLENBQWNLLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxHQUFULENBQWFFLENBQTNCLElBQWdDLEtBQWhDO0FBQ0EsaUJBQUtULFFBQUwsQ0FBY0ssRUFBRSxDQUFDQyxLQUFILENBQVNDLEdBQVQsQ0FBYUcsQ0FBM0IsSUFBZ0MsS0FBaEM7QUFDQSxpQkFBS1YsUUFBTCxDQUFjSyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSSxDQUEzQixJQUFnQyxLQUFoQztBQUVBbkIsWUFBQUEsV0FBVyxDQUFDb0IsRUFBWixDQUFlbkIsV0FBVyxDQUFDb0IsU0FBWixDQUFzQkMsUUFBckMsRUFBK0MsS0FBS0MsU0FBcEQsRUFBK0QsSUFBL0Q7QUFDQXZCLFlBQUFBLFdBQVcsQ0FBQ29CLEVBQVosQ0FBZW5CLFdBQVcsQ0FBQ29CLFNBQVosQ0FBc0JHLE1BQXJDLEVBQTZDLEtBQUtDLE9BQWxELEVBQTJELElBQTNEO0FBQ0EsaUJBQUtkLElBQUwsQ0FBVVMsRUFBVixDQUFhbkIsV0FBVyxDQUFDb0IsU0FBWixDQUFzQkssVUFBbkMsRUFBK0MsS0FBS0MsV0FBcEQsRUFBaUUsSUFBakU7QUFDSDs7O29DQUVVQyxLLEVBQXVCO0FBQzlCLGdCQUFJLEtBQUtwQixRQUFMLENBQWNxQixjQUFkLENBQThCRCxLQUFLLENBQUNFLE9BQXBDLENBQUosRUFBbUQ7QUFDL0MsbUJBQUt0QixRQUFMLENBQWNvQixLQUFLLENBQUNFLE9BQXBCLElBQStCLElBQS9CO0FBQ0g7QUFDSjs7O2tDQUVRRixLLEVBQXdCO0FBQzdCLGdCQUFJLEtBQUtwQixRQUFMLENBQWNxQixjQUFkLENBQThCRCxLQUFLLENBQUNFLE9BQXBDLENBQUosRUFBbUQ7QUFDL0MsbUJBQUt0QixRQUFMLENBQWNvQixLQUFLLENBQUNFLE9BQXBCLElBQStCLEtBQS9CO0FBQ0g7QUFDSjs7O3NDQUVZQyxLLEVBQWVILEssRUFBcUI7QUFDN0NmLFlBQUFBLEVBQUUsQ0FBQ21CLEdBQUgsQ0FBTyxVQUFRRCxLQUFLLENBQUNFLE9BQXJCO0FBR0g7OzsyQ0FFaUJDLEssRUFBZ0I7QUFDOUIsZ0JBQU1DLEVBQUUsR0FBRSxJQUFJaEMsSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFWO0FBQ0EsZ0JBQU1pQyxTQUFTLEdBQUcsS0FBS3pCLElBQUwsQ0FBVTBCLFdBQVYsRUFBbEI7QUFDQWpDLFlBQUFBLElBQUksQ0FBQ2tDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkgsU0FBdkIsRUFBa0NBLFNBQWxDLEVBQTZDRCxFQUE3QyxFQUFpRCxDQUFDRCxLQUFELEdBQU8sQ0FBUCxHQUFVLEtBQVYsR0FBa0IsWUFBbkU7QUFDQSxpQkFBS3ZCLElBQUwsQ0FBVTZCLFdBQVYsQ0FBc0JKLFNBQXRCO0FBQ0g7Ozt3Q0FFYUssQyxFQUFHQyxDLEVBQUdDLEMsRUFBRztBQUN6QixnQkFBTUMsTUFBTSxHQUFHLElBQUl6QyxJQUFKLENBQVNzQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixDQUFmO0FBQ0F2QyxZQUFBQSxJQUFJLENBQUNELElBQUwsQ0FBVTBDLGFBQVYsQ0FBd0JELE1BQXhCLEVBQWdDQSxNQUFoQyxFQUF3QyxLQUFLakMsSUFBTCxDQUFVMEIsV0FBVixFQUF4QztBQUNBLG1CQUFPTyxNQUFQO0FBQ0c7OztpQ0FHT0UsUyxFQUFtQjtBQUN2QjtBQUNBLGdCQUFJTCxDQUFDLEdBQUcsQ0FBUjtBQUFBLGdCQUFXRSxDQUFDLEdBQUcsQ0FBZjs7QUFDQSxnQkFBSSxLQUFLbkMsUUFBTCxDQUFjSyxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUEzQixDQUFKLEVBQW1DO0FBQy9CMkIsY0FBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBTDtBQUNILGFBRkQsTUFFTSxJQUFJLEtBQUtuQyxRQUFMLENBQWNLLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxHQUFULENBQWFFLENBQTNCLENBQUosRUFBbUM7QUFDckMwQixjQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUNELGdCQUFJLEtBQUtuQyxRQUFMLENBQWNLLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxHQUFULENBQWFHLENBQTNCLENBQUosRUFBbUM7QUFDL0J1QixjQUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFMO0FBQ0gsYUFGRCxNQUVNLElBQUksS0FBS2pDLFFBQUwsQ0FBY0ssRUFBRSxDQUFDQyxLQUFILENBQVNDLEdBQVQsQ0FBYUksQ0FBM0IsQ0FBSixFQUFtQztBQUNyQ3NCLGNBQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0g7O0FBQ0QsZ0JBQUtBLENBQUMsSUFBSSxDQUFMLElBQVVFLENBQUMsSUFBSSxDQUFwQixFQUF3QjtBQUNwQixtQkFBS2hDLElBQUwsQ0FBVW9DLFNBQVYsQ0FBcUI3QyxFQUFFLENBQUN1QyxDQUFDLEdBQUNLLFNBQUYsR0FBWSxLQUFLckMsTUFBbEIsRUFBeUIsQ0FBekIsRUFBMkJrQyxDQUFDLEdBQUNHLFNBQUYsR0FBWSxLQUFLckMsTUFBNUMsQ0FBdkI7QUFDSDtBQUNKOzs7O1FBN0UrQlYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3lzdGVtLCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnQsIEV2ZW50S2V5Ym9hcmQsIHYzLCBFdmVudFRvdWNoLCBDYW1lcmFDb21wb25lbnQsIFZlYzMsIG1hdGggfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiSGVyb0NvbnRyb2xsZXJcIilcclxuZXhwb3J0IGNsYXNzIEhlcm9Db250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBtS2V5RG93biA9IHt9O1xyXG5cclxuICAgIG1TcGVlZCA9IDEwO1xyXG5cclxuICAgIG1DYW1lcmEgOiBOb2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLm1DYW1lcmEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW1lcmFcIik7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkud10gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS5zXSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubUtleURvd25bY2MubWFjcm8uS0VZLmFdID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuZF0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcylcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93biggZXZlbnQ6IEV2ZW50S2V5Ym9hcmQgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubUtleURvd24uaGFzT3duUHJvcGVydHkoIGV2ZW50LmtleUNvZGUgKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1LZXlEb3duW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcCggZXZlbnQgOiBFdmVudEtleWJvYXJkICkge1xyXG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duLmhhc093blByb3BlcnR5KCBldmVudC5rZXlDb2RlICkpIHtcclxuICAgICAgICAgICAgdGhpcy5tS2V5RG93bltldmVudC5rZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZSggdG91Y2ggOiBUb3VjaCwgZXZlbnQgOiBFdmVudFRvdWNoICkge1xyXG4gICAgICAgIGNjLmxvZyhcInRvdWNoXCIrdG91Y2guY2xpZW50WClcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25DYW1lcmFSb3RhdGlvbiggZGVsdGEgOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB1cCA9bmV3IFZlYzMoMCwxLDApO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9ueCA9IHRoaXMubm9kZS5nZXRSb3RhdGlvbigpO1xyXG4gICAgICAgIG1hdGguUXVhdC5yb3RhdGVBcm91bmQocm90YXRpb254LCByb3RhdGlvbngsIHVwLCAtZGVsdGEvMi8gMzYwLjAgKiAzLjE0MTU5MjY1MzUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXREaXJlY3Rpb24oeCwgeSwgeikge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IFZlYzMoeCwgeSwgeik7XHJcblx0XHRtYXRoLlZlYzMudHJhbnNmb3JtUXVhdChyZXN1bHQsIHJlc3VsdCwgdGhpcy5ub2RlLmdldFJvdGF0aW9uKCkpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBsZXQgeCA9IDAsIHogPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS53XSkge1xyXG4gICAgICAgICAgICB6ID0gLTE7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMubUtleURvd25bY2MubWFjcm8uS0VZLnNdKSB7XHJcbiAgICAgICAgICAgIHogPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuYV0pIHtcclxuICAgICAgICAgICAgeCA9IC0xO1xyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS5kXSkge1xyXG4gICAgICAgICAgICB4ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB4ICE9IDAgfHwgeiAhPSAwICkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUudHJhbnNsYXRlKCB2Myh4KmRlbHRhVGltZSp0aGlzLm1TcGVlZCwwLHoqZGVsdGFUaW1lKnRoaXMubVNwZWVkKSApO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==