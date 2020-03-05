System.register(["cc", "code-quality:cr", "./modules/ui/UIManager.js", "./modules/ui/UIModule.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, UIManager, UIModule, _dec, _class, _crd, ccclass, property, main;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./modules/ui/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIModule(extras) {
    _reporterNs.report("UIModule", "./modules/ui/UIModule", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_modulesUiUIManagerJs) {
      UIManager = _modulesUiUIManagerJs.UIManager;
    }, function (_modulesUiUIModuleJs) {
      UIModule = _modulesUiUIModuleJs.UIModule;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4f631TK8ZdI54isaDHS7vkD", "main", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("main", main = (_dec = ccclass("main"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        _inherits(main, _Component);

        function main() {
          _classCallCheck(this, main);

          return _possibleConstructorReturn(this, _getPrototypeOf(main).apply(this, arguments));
        }

        _createClass(main, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().openView({
              viewName: (_crd && UIModule === void 0 ? (_reportPossibleCrUseOfUIModule({
                error: Error()
              }), UIModule) : UIModule).sViews.LoginView,
              param: "1"
            }, function (view) {});
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return main;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9tYWluLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJVSU1hbmFnZXIiLCJVSU1vZHVsZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIm1haW4iLCJnZXRJbnN0YW5jZSIsIm9wZW5WaWV3Iiwidmlld05hbWUiLCJzVmlld3MiLCJMb2dpblZpZXciLCJwYXJhbSIsInZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7O0FBQ1pDLE1BQUFBLFMseUJBQUFBLFM7O0FBQ0FDLE1BQUFBLFEsd0JBQUFBLFE7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROztzQkFHSkMsSSxXQURaRixPQUFPLENBQUMsTUFBRCxDOzs7Ozs7Ozs7Ozs7OztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO2tDQUVTO0FBQ0w7QUFDQTtBQUFBO0FBQUEsd0NBQVVHLFdBQVYsR0FBd0JDLFFBQXhCLENBQWlDO0FBQzdCQyxjQUFBQSxRQUFRLEVBQUc7QUFBQTtBQUFBLHdDQUFTQyxNQUFULENBQWdCQyxTQURFO0FBRTdCQyxjQUFBQSxLQUFLLEVBQUc7QUFGcUIsYUFBakMsRUFHRyxVQUFXQyxJQUFYLEVBQWtCLENBRXBCLENBTEQ7QUFNSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQXBCc0JaLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENhbnZhc1Bvb2wsIGluc3RhbnRpYXRlLCBmaW5kIH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3VpL1VJTWFuYWdlclwiO1xuaW1wb3J0IHsgVUlNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVzL3VpL1VJTW9kdWxlXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIm1haW5cIilcbmV4cG9ydCBjbGFzcyBtYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLm9wZW5WaWV3KHtcbiAgICAgICAgICAgIHZpZXdOYW1lIDogVUlNb2R1bGUuc1ZpZXdzLkxvZ2luVmlldyxcbiAgICAgICAgICAgIHBhcmFtIDogXCIxXCJcbiAgICAgICAgfSwgZnVuY3Rpb24gKCB2aWV3ICkge1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19