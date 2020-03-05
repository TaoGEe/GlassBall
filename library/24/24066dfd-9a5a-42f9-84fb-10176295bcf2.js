System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, v3, Vec3, math, RigidBodyComponent, find, _dec, _class, _temp, _crd, ccclass, property, HeroController;

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
      RigidBodyComponent = _cc.RigidBodyComponent;
      find = _cc.find;
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
          _this.mBall = null;
          _this.mInitPos = null;
          _this.mForce = 2000;
          return _this;
        }

        _createClass(HeroController, [{
          key: "start",
          value: function start() {
            this.mCamera = this.node.getChildByName("Camera");
            this.mBall = find("game/BallMy").getComponent(RigidBodyComponent);
            this.mInitPos = this.mBall.node.getPosition(); // Your initialization goes here.

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
          key: "onSkill",
          value: function onSkill(index) {
            if (index == 1) {
              var force = this.node.forward;
              cc.log("forward: " + force);
              var mCamera = this.mCamera.forward;
              cc.log("mCamera: " + mCamera);
              force.x *= -this.mForce;
              force.z *= -this.mForce;
              this.mBall.applyForce(force);
            } else if (index == 2) {
              this.mForce += 20;
            } else {
              this.mForce -= 20;
            }
          }
        }, {
          key: "addForce",
          value: function addForce(force) {
            var forward = this.node.forward;
            forward.x *= -this.mForce * force;
            forward.z *= -this.mForce * force;
            this.mBall.applyForce(forward);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.mBall.sleep();
            this.mBall.node.setPosition(this.mInitPos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9iYXR0bGUvaGVyb0NvbnRyb2wvSGVyb0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJ2MyIsIlZlYzMiLCJtYXRoIiwiUmlnaWRCb2R5Q29tcG9uZW50IiwiZmluZCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkhlcm9Db250cm9sbGVyIiwibUtleURvd24iLCJtU3BlZWQiLCJtQ2FtZXJhIiwibUJhbGwiLCJtSW5pdFBvcyIsIm1Gb3JjZSIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsImdldFBvc2l0aW9uIiwiY2MiLCJtYWNybyIsIktFWSIsInciLCJzIiwiYSIsImQiLCJvbiIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsImV2ZW50IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb2RlIiwidG91Y2giLCJsb2ciLCJjbGllbnRYIiwiZGVsdGEiLCJ1cCIsInJvdGF0aW9ueCIsImdldFJvdGF0aW9uIiwiUXVhdCIsInJvdGF0ZUFyb3VuZCIsInNldFJvdGF0aW9uIiwiaW5kZXgiLCJmb3JjZSIsImZvcndhcmQiLCJ4IiwieiIsImFwcGx5Rm9yY2UiLCJzbGVlcCIsInNldFBvc2l0aW9uIiwiZGVsdGFUaW1lIiwidHJhbnNsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQXlCQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVyxPQUFBQSxXO0FBQTRCQyxNQUFBQSxFLE9BQUFBLEU7QUFBaUNDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFB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QUFHLENBQVI7QUFBQSxnQkFBV0MsQ0FBQyxHQUFHLENBQWY7O0FBQ0EsZ0JBQUksS0FBSzFDLFFBQUwsQ0FBY1UsRUFBRSxDQUFDQyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBM0IsQ0FBSixFQUFtQztBQUMvQjZCLGNBQUFBLENBQUMsR0FBRyxDQUFDLENBQUw7QUFDSCxhQUZELE1BRU0sSUFBSSxLQUFLMUMsUUFBTCxDQUFjVSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhRSxDQUEzQixDQUFKLEVBQW1DO0FBQ3JDNEIsY0FBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSDs7QUFDRCxnQkFBSSxLQUFLMUMsUUFBTCxDQUFjVSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhRyxDQUEzQixDQUFKLEVBQW1DO0FBQy9CMEIsY0FBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBTDtBQUNILGFBRkQsTUFFTSxJQUFJLEtBQUt6QyxRQUFMLENBQWNVLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxHQUFULENBQWFJLENBQTNCLENBQUosRUFBbUM7QUFDckN5QixjQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUNELGdCQUFLQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxDQUFDLElBQUksQ0FBcEIsRUFBd0I7QUFDcEIsbUJBQUtwQyxJQUFMLENBQVV5QyxTQUFWLENBQXFCdkQsRUFBRSxDQUFDaUQsQ0FBQyxHQUFDSyxTQUFGLEdBQVksS0FBSzdDLE1BQWxCLEVBQXlCLENBQXpCLEVBQTJCeUMsQ0FBQyxHQUFDSSxTQUFGLEdBQVksS0FBSzdDLE1BQTVDLENBQXZCO0FBQ0g7QUFDSjs7OztRQS9HK0JaLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFN5c3RlbSwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudEtleWJvYXJkLCB2MywgRXZlbnRUb3VjaCwgQ2FtZXJhQ29tcG9uZW50LCBWZWMzLCBtYXRoLCBSaWdpZEJvZHlDb21wb25lbnQsIGZpbmQgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiSGVyb0NvbnRyb2xsZXJcIilcbmV4cG9ydCBjbGFzcyBIZXJvQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG5cbiAgICBtS2V5RG93biA9IHt9O1xuXG4gICAgbVNwZWVkID0gMTA7XG5cbiAgICBtQ2FtZXJhIDogTm9kZSA9IG51bGw7XG5cbiAgICBtQmFsbCA6IFJpZ2lkQm9keUNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBtSW5pdFBvcyA6IFZlYzMgPSBudWxsO1xuXG4gICAgbUZvcmNlIDogbnVtYmVyID0gMjAwMDtcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgICAgICB0aGlzLm1DYW1lcmEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW1lcmFcIik7XG4gICAgICAgIHRoaXMubUJhbGwgPSBmaW5kKFwiZ2FtZS9CYWxsTXlcIikuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XG5cbiAgICAgICAgdGhpcy5tSW5pdFBvcyA9IHRoaXMubUJhbGwubm9kZS5nZXRQb3NpdGlvbigpO1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkud10gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuc10gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuYV0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuZF0gPSBmYWxzZTtcblxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKVxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25LZXlEb3duKCBldmVudDogRXZlbnRLZXlib2FyZCApIHtcbiAgICAgICAgaWYgKHRoaXMubUtleURvd24uaGFzT3duUHJvcGVydHkoIGV2ZW50LmtleUNvZGUgKSkge1xuICAgICAgICAgICAgdGhpcy5tS2V5RG93bltldmVudC5rZXlDb2RlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVVwKCBldmVudCA6IEV2ZW50S2V5Ym9hcmQgKSB7XG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duLmhhc093blByb3BlcnR5KCBldmVudC5rZXlDb2RlICkpIHtcbiAgICAgICAgICAgIHRoaXMubUtleURvd25bZXZlbnQua2V5Q29kZV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKCB0b3VjaCA6IFRvdWNoLCBldmVudCA6IEV2ZW50VG91Y2ggKSB7XG4gICAgICAgIGNjLmxvZyhcInRvdWNoXCIrdG91Y2guY2xpZW50WClcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNhbWVyYVJvdGF0aW9uKCBkZWx0YSA6IG51bWJlcikge1xuICAgICAgICBjb25zdCB1cCA9bmV3IFZlYzMoMCwxLDApO1xuICAgICAgICBjb25zdCByb3RhdGlvbnggPSB0aGlzLm5vZGUuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgbWF0aC5RdWF0LnJvdGF0ZUFyb3VuZChyb3RhdGlvbngsIHJvdGF0aW9ueCwgdXAsIC1kZWx0YS8yLyAzNjAuMCAqIDMuMTQxNTkyNjUzNSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xuICAgIH1cblxuICAgIG9uU2tpbGwoIGluZGV4IDogbnVtYmVyICkge1xuICAgICAgICBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgbGV0IGZvcmNlID0gdGhpcy5ub2RlLmZvcndhcmQ7XG4gICAgICAgICAgICBjYy5sb2coXCJmb3J3YXJkOiBcIitmb3JjZSlcbiAgICAgICAgICAgIGxldCBtQ2FtZXJhID0gdGhpcy5tQ2FtZXJhLmZvcndhcmQ7XG4gICAgICAgICAgICBjYy5sb2coXCJtQ2FtZXJhOiBcIittQ2FtZXJhKVxuXG4gICAgICAgICAgICBmb3JjZS54ICo9IC10aGlzLm1Gb3JjZTtcbiAgICAgICAgICAgIGZvcmNlLnogKj0gLXRoaXMubUZvcmNlO1xuXG4gICAgICAgICAgICB0aGlzLm1CYWxsLmFwcGx5Rm9yY2UoZm9yY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMubUZvcmNlICs9IDIwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tRm9yY2UgLT0gMjA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRGb3JjZSggZm9yY2U6bnVtYmVyICkge1xuICAgICAgICBsZXQgZm9yd2FyZCA9IHRoaXMubm9kZS5mb3J3YXJkO1xuICAgICAgICBmb3J3YXJkLnggKj0gLXRoaXMubUZvcmNlKmZvcmNlO1xuICAgICAgICBmb3J3YXJkLnogKj0gLXRoaXMubUZvcmNlKmZvcmNlO1xuXG4gICAgICAgIHRoaXMubUJhbGwuYXBwbHlGb3JjZShmb3J3YXJkKTtcbiAgICB9XG4gICAgXG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5tQmFsbC5zbGVlcCgpO1xuICAgICAgICB0aGlzLm1CYWxsLm5vZGUuc2V0UG9zaXRpb24odGhpcy5tSW5pdFBvcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIGxldCB4ID0gMCwgeiA9IDA7XG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS53XSkge1xuICAgICAgICAgICAgeiA9IC0xO1xuICAgICAgICB9ZWxzZSBpZiAodGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuc10pIHtcbiAgICAgICAgICAgIHogPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS5hXSkge1xuICAgICAgICAgICAgeCA9IC0xO1xuICAgICAgICB9ZWxzZSBpZiAodGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuZF0pIHtcbiAgICAgICAgICAgIHggPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICggeCAhPSAwIHx8IHogIT0gMCApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS50cmFuc2xhdGUoIHYzKHgqZGVsdGFUaW1lKnRoaXMubVNwZWVkLDAseipkZWx0YVRpbWUqdGhpcy5tU3BlZWQpICk7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==