System.register(["cc", "code-quality:cr", "./modules/ui/UIManager.js", "./modules/ui/UIModule.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, find, UIManager, UIModule, _dec, _class, _crd, ccclass, property, main;

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
      find = _cc.find;
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
            var root = find("Root");
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().setUIRoot(root);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL21haW4udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImZpbmQiLCJVSU1hbmFnZXIiLCJVSU1vZHVsZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIm1haW4iLCJyb290IiwiZ2V0SW5zdGFuY2UiLCJzZXRVSVJvb3QiLCJvcGVuVmlldyIsInZpZXdOYW1lIiwic1ZpZXdzIiwiTG9naW5WaWV3IiwicGFyYW0iLCJ2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUEwQ0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ3REQyxNQUFBQSxTLHlCQUFBQSxTOztBQUNBQyxNQUFBQSxRLHdCQUFBQSxROzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7c0JBR0pDLEksV0FEWkYsT0FBTyxDQUFDLE1BQUQsQzs7Ozs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUztBQUNMO0FBQ0EsZ0JBQUlHLElBQUksR0FBR04sSUFBSSxDQUFDLE1BQUQsQ0FBZjtBQUNBO0FBQUE7QUFBQSx3Q0FBVU8sV0FBVixHQUF3QkMsU0FBeEIsQ0FBa0NGLElBQWxDO0FBQ0E7QUFBQTtBQUFBLHdDQUFVQyxXQUFWLEdBQXdCRSxRQUF4QixDQUFpQztBQUM3QkMsY0FBQUEsUUFBUSxFQUFHO0FBQUE7QUFBQSx3Q0FBU0MsTUFBVCxDQUFnQkMsU0FERTtBQUU3QkMsY0FBQUEsS0FBSyxFQUFHO0FBRnFCLGFBQWpDLEVBR0csVUFBV0MsSUFBWCxFQUFrQixDQUVwQixDQUxEO0FBTUgsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUF0QnNCZixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDYW52YXNQb29sLCBpbnN0YW50aWF0ZSwgZmluZCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3VpL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gXCIuL21vZHVsZXMvdWkvVUlNb2R1bGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwibWFpblwiKVxyXG5leHBvcnQgY2xhc3MgbWFpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIGxldCByb290ID0gZmluZChcIlJvb3RcIilcclxuICAgICAgICBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRVSVJvb3Qocm9vdCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkub3BlblZpZXcoe1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA6IFVJTW9kdWxlLnNWaWV3cy5Mb2dpblZpZXcsXHJcbiAgICAgICAgICAgIHBhcmFtIDogXCIxXCJcclxuICAgICAgICB9LCBmdW5jdGlvbiAoIHZpZXcgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=