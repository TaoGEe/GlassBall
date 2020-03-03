System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, _dec, _class, _temp, _crd, ccclass, property, HeroController;

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
            var rotation = this.node.getRotation();
            rotation.y -= delta / 1000;
            this.node.setRotation(rotation);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            var pos = this.node.getPosition();

            if (this.mKeyDown[cc.macro.KEY.w]) {
              pos.z -= this.mSpeed * deltaTime;
            }

            if (this.mKeyDown[cc.macro.KEY.s]) {
              pos.z += this.mSpeed * deltaTime;
            }

            if (this.mKeyDown[cc.macro.KEY.a]) {
              pos.x -= this.mSpeed * deltaTime;
            }

            if (this.mKeyDown[cc.macro.KEY.d]) {
              pos.x += this.mSpeed * deltaTime;
            }

            this.node.setPosition(pos);
          }
        }]);

        return HeroController;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9iYXR0bGUvaGVyb0NvbnRyb2wvSGVyb0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJIZXJvQ29udHJvbGxlciIsIm1LZXlEb3duIiwibVNwZWVkIiwibUNhbWVyYSIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNjIiwibWFjcm8iLCJLRVkiLCJ3IiwicyIsImEiLCJkIiwib24iLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIktFWV9VUCIsIm9uS2V5VXAiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJldmVudCIsImhhc093blByb3BlcnR5Iiwia2V5Q29kZSIsInRvdWNoIiwibG9nIiwiY2xpZW50WCIsImRlbHRhIiwicm90YXRpb24iLCJnZXRSb3RhdGlvbiIsInkiLCJzZXRSb3RhdGlvbiIsImRlbHRhVGltZSIsInBvcyIsImdldFBvc2l0aW9uIiwieiIsIngiLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUF5QkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVzs7Ozs7O0FBQ25EQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROztnQ0FHSkMsYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU0pHLFEsR0FBVyxFO2dCQUVYQyxNLEdBQVMsRTtnQkFFVEMsTyxHQUFpQixJOzs7Ozs7a0NBR1I7QUFFTCxpQkFBS0EsT0FBTCxHQUFlLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixD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QVMsS0FBS2xDLE1BQUwsR0FBWThCLFNBQXJCO0FBQ0g7O0FBQ0QsaUJBQUs1QixJQUFMLENBQVVpQyxXQUFWLENBQXNCSixHQUF0QjtBQUNIOzs7O1FBdEUrQnRDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFN5c3RlbSwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudEtleWJvYXJkLCB2MywgRXZlbnRUb3VjaCwgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkhlcm9Db250cm9sbGVyXCIpXG5leHBvcnQgY2xhc3MgSGVyb0NvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgbUtleURvd24gPSB7fTtcblxuICAgIG1TcGVlZCA9IDEwO1xuXG4gICAgbUNhbWVyYSA6IE5vZGUgPSBudWxsO1xuXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICAgICAgdGhpcy5tQ2FtZXJhID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FtZXJhXCIpO1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkud10gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuc10gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuYV0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tS2V5RG93bltjYy5tYWNyby5LRVkuZF0gPSBmYWxzZTtcblxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKVxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcbiAgICB9XG5cbiAgICBvbktleURvd24oIGV2ZW50OiBFdmVudEtleWJvYXJkICkge1xuICAgICAgICBpZiAodGhpcy5tS2V5RG93bi5oYXNPd25Qcm9wZXJ0eSggZXZlbnQua2V5Q29kZSApKSB7XG4gICAgICAgICAgICB0aGlzLm1LZXlEb3duW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAoIGV2ZW50IDogRXZlbnRLZXlib2FyZCApIHtcbiAgICAgICAgaWYgKHRoaXMubUtleURvd24uaGFzT3duUHJvcGVydHkoIGV2ZW50LmtleUNvZGUgKSkge1xuICAgICAgICAgICAgdGhpcy5tS2V5RG93bltldmVudC5rZXlDb2RlXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoIHRvdWNoIDogVG91Y2gsIGV2ZW50IDogRXZlbnRUb3VjaCApIHtcbiAgICAgICAgY2MubG9nKFwidG91Y2hcIit0b3VjaC5jbGllbnRYKVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uQ2FtZXJhUm90YXRpb24oIGRlbHRhIDogbnVtYmVyKSB7XG4gICAgICAgIGxldCByb3RhdGlvbiA9IHRoaXMubm9kZS5nZXRSb3RhdGlvbigpO1xuICAgICAgICByb3RhdGlvbi55IC09IGRlbHRhLzEwMDA7XG4gICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbiggcm90YXRpb24gKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS53XSkge1xuICAgICAgICAgICAgcG9zLnogLT0gdGhpcy5tU3BlZWQqZGVsdGFUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS5zXSkge1xuICAgICAgICAgICAgcG9zLnogKz0gdGhpcy5tU3BlZWQqZGVsdGFUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS5hXSkge1xuICAgICAgICAgICAgcG9zLnggLT0gdGhpcy5tU3BlZWQqZGVsdGFUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1LZXlEb3duW2NjLm1hY3JvLktFWS5kXSkge1xuICAgICAgICAgICAgcG9zLnggKz0gdGhpcy5tU3BlZWQqZGVsdGFUaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpXG4gICAgfVxufVxuIl19