System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, BattleController;

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
    }],
    execute: function () {
      _cclegacy._RF.push({}, "177b0NRSCFI+YwvIqKrcX+a", "BattleController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BattleController", BattleController = (_dec = ccclass("BattleController"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(BattleController, _Component);

        function BattleController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BattleController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BattleController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.mHeroControl = [];
          return _this;
        }

        _createClass(BattleController, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "update",
          value: function update(deltaTime) {// Your update function goes here.
          }
        }]);

        return BattleController;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9iYXR0bGUvQmF0dGxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmF0dGxlQ29udHJvbGxlciIsIm1IZXJvQ29udHJvbCIsImRlbHRhVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ2JDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU0pHLFksR0FBZSxFOzs7Ozs7a0NBRU4sQ0FDTDtBQUVIOzs7aUNBRU9DLFMsRUFBbUIsQ0FDdkI7QUFDSDs7OztRQWpCaUNMLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgUHJlZmFiIH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkJhdHRsZUNvbnRyb2xsZXJcIilcbmV4cG9ydCBjbGFzcyBCYXR0bGVDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIG1IZXJvQ29udHJvbCA9IFtdO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgfVxufVxuIl19