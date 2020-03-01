System.register(["cc", "code-quality:cr", "../../modules/ui/ViewBase.js", "../../modules/ui/UIManager.js", "../../modules/ui/UIModule.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, EditBoxComponent, ViewBase, UIManager, UIModule, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, LoginView;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  function _reportPossibleCrUseOfViewBase(extras) {
    _reporterNs.report("ViewBase", "../../modules/ui/ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../modules/ui/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIModule(extras) {
    _reporterNs.report("UIModule", "../../modules/ui/UIModule", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      EditBoxComponent = _cc.EditBoxComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_modulesUiViewBaseJs) {
      ViewBase = _modulesUiViewBaseJs.ViewBase;
    }, function (_modulesUiUIManagerJs) {
      UIManager = _modulesUiUIManagerJs.UIManager;
    }, function (_modulesUiUIModuleJs) {
      UIModule = _modulesUiUIModuleJs.UIModule;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2c4adYcaCNJjbUe/LeMCk7+", "LoginView", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoginView", LoginView = (_dec = ccclass("LoginView"), _dec2 = property({
        type: EditBoxComponent
      }), _dec3 = property({
        type: EditBoxComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_ref) {
        _inherits(LoginView, _ref);

        function LoginView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, LoginView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "editUserName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "editPWD", _descriptor2, _assertThisInitialized(_this));

          _this.mUserName = "";
          _this.mPWD = "";
          return _this;
        }

        _createClass(LoginView, [{
          key: "onOpen",
          value: function onOpen() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            console.log("loginview onOpen " + args.toString());
          }
        }, {
          key: "start",
          value: function start() {
            // Your initialization goes here.
            console.log("loginview start");
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "onBtnLogin",
          value: function onBtnLogin() {
            this.mUserName = this.editUserName.string.trim();
            this.mPWD = this.editPWD.string;
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().showTips(this.mUserName + " " + this.mPWD);
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().openView({
              viewName: (_crd && UIModule === void 0 ? (_reportPossibleCrUseOfUIModule({
                error: Error()
              }), UIModule) : UIModule).sViews.HomeView
            });
          }
        }, {
          key: "onBtnRegister",
          value: function onBtnRegister() {}
        }, {
          key: "onUserNameEdit",
          value: function onUserNameEdit(edit) {
            this.mUserName = edit.string;
          }
        }, {
          key: "onPWDEdit",
          value: function onPWDEdit(edit) {
            this.mPWD = edit.string;
          }
        }]);

        return LoginView;
      }(_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
        error: Error()
      }), ViewBase) : ViewBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editUserName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "editPWD", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL3ZpZXdzL2xvZ2luL0xvZ2luVmlldy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRWRpdEJveENvbXBvbmVudCIsIlZpZXdCYXNlIiwiVUlNYW5hZ2VyIiwiVUlNb2R1bGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2dpblZpZXciLCJ0eXBlIiwibVVzZXJOYW1lIiwibVBXRCIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJlZGl0VXNlck5hbWUiLCJzdHJpbmciLCJ0cmltIiwiZWRpdFBXRCIsImdldEluc3RhbmNlIiwic2hvd1RpcHMiLCJvcGVuVmlldyIsInZpZXdOYW1lIiwic1ZpZXdzIiwiSG9tZVZpZXciLCJlZGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2Q0MsTUFBQUEsZ0IsT0FBQUEsZ0I7Ozs7QUFDN0NDLE1BQUFBLFEsd0JBQUFBLFE7O0FBQ0FDLE1BQUFBLFMseUJBQUFBLFM7O0FBQ0FDLE1BQUFBLFEsd0JBQUFBLFE7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDLFVBU0hDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUNQO0FBQU4sT0FBRCxDLFVBR1JLLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUNQO0FBQU4sT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdEUSxTLEdBQXFCLEU7Z0JBQ3JCQyxJLEdBQWdCLEU7Ozs7OzttQ0FFRDtBQUFBLCtDQUFOQyxJQUFNO0FBQU5BLGNBQUFBLElBQU07QUFBQTs7QUFDbkJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFzQkYsSUFBSSxDQUFDRyxRQUFMLEVBQWxDO0FBQ0g7OztrQ0FFUTtBQUNMO0FBQ0FGLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozt1Q0FHMkI7QUFDdkIsaUJBQUtKLFNBQUwsR0FBaUIsS0FBS00sWUFBTCxDQUFrQkMsTUFBbEIsQ0FBeUJDLElBQXpCLEVBQWpCO0FBQ0EsaUJBQUtQLElBQUwsR0FBWSxLQUFLUSxPQUFMLENBQWFGLE1BQXpCO0FBQ0E7QUFBQTtBQUFBLHdDQUFVRyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQyxLQUFLWCxTQUFMLEdBQWUsR0FBZixHQUFtQixLQUFLQyxJQUF6RDtBQUNBO0FBQUE7QUFBQSx3Q0FBVVMsV0FBVixHQUF3QkUsUUFBeEIsQ0FBaUM7QUFDN0JDLGNBQUFBLFFBQVEsRUFBRztBQUFBO0FBQUEsd0NBQVNDLE1BQVQsQ0FBZ0JDO0FBREUsYUFBakM7QUFHSDs7OzBDQUVzQixDQUV0Qjs7O3lDQUVzQkMsSSxFQUEwQjtBQUM3QyxpQkFBS2hCLFNBQUwsR0FBaUJnQixJQUFJLENBQUNULE1BQXRCO0FBQ0g7OztvQ0FFZ0JTLEksRUFBMEI7QUFDdkMsaUJBQUtmLElBQUwsR0FBWWUsSUFBSSxDQUFDVCxNQUFqQjtBQUNIOzs7Ozs7Ozs7OztpQkF6Q2lDLEk7Ozs7Ozs7aUJBR0wsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQsIEVkaXRCb3hDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgVmlld0Jhc2UgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy91aS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy91aS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy91aS9VSU1vZHVsZVwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJMb2dpblZpZXdcIilcclxuZXhwb3J0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6RWRpdEJveENvbXBvbmVudH0pXHJcbiAgICBlZGl0VXNlck5hbWUgOiBFZGl0Qm94Q29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6RWRpdEJveENvbXBvbmVudH0pXHJcbiAgICBlZGl0UFdEIDogRWRpdEJveENvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtVXNlck5hbWUgOiBzdHJpbmcgPSBcIlwiIDtcclxuICAgIHByaXZhdGUgbVBXRCA6IHN0cmluZyA9IFwiXCIgO1xyXG5cclxuICAgIHB1YmxpYyBvbk9wZW4oLi4uYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9naW52aWV3IG9uT3BlbiBcIiArIGFyZ3MudG9TdHJpbmcoKSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbnZpZXcgc3RhcnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9uQnRuTG9naW4oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMubVVzZXJOYW1lID0gdGhpcy5lZGl0VXNlck5hbWUuc3RyaW5nLnRyaW0oKTtcclxuICAgICAgICB0aGlzLm1QV0QgPSB0aGlzLmVkaXRQV0Quc3RyaW5nO1xyXG4gICAgICAgIFVJTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dUaXBzKHRoaXMubVVzZXJOYW1lK1wiIFwiK3RoaXMubVBXRCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkub3BlblZpZXcoe1xyXG4gICAgICAgICAgICB2aWV3TmFtZSA6IFVJTW9kdWxlLnNWaWV3cy5Ib21lVmlld1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQnRuUmVnaXN0ZXIoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVzZXJOYW1lRWRpdCggZWRpdCA6IEVkaXRCb3hDb21wb25lbnQgKSB7XHJcbiAgICAgICAgdGhpcy5tVXNlck5hbWUgPSBlZGl0LnN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QV0RFZGl0KGVkaXQgOiBFZGl0Qm94Q29tcG9uZW50ICkge1xyXG4gICAgICAgIHRoaXMubVBXRCA9IGVkaXQuc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==