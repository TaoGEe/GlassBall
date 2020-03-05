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
            this.mPWD = this.editPWD.string; // UIManager.getInstance().showTips(this.mUserName+" "+this.mPWD);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy92aWV3cy9sb2dpbi9Mb2dpblZpZXcudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkVkaXRCb3hDb21wb25lbnQiLCJWaWV3QmFzZSIsIlVJTWFuYWdlciIsIlVJTW9kdWxlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9naW5WaWV3IiwidHlwZSIsIm1Vc2VyTmFtZSIsIm1QV0QiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiZWRpdFVzZXJOYW1lIiwic3RyaW5nIiwidHJpbSIsImVkaXRQV0QiLCJnZXRJbnN0YW5jZSIsIm9wZW5WaWV3Iiwidmlld05hbWUiLCJzVmlld3MiLCJIb21lVmlldyIsImVkaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZDQyxNQUFBQSxnQixPQUFBQSxnQjs7OztBQUM3Q0MsTUFBQUEsUSx3QkFBQUEsUTs7QUFDQUMsTUFBQUEsUyx5QkFBQUEsUzs7QUFDQUMsTUFBQUEsUSx3QkFBQUEsUTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEMsVUFTSEMsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ1A7QUFBTixPQUFELEMsVUFHUkssUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ1A7QUFBTixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0RRLFMsR0FBcUIsRTtnQkFDckJDLEksR0FBZ0IsRTs7Ozs7O21DQUVEO0FBQUEsK0NBQU5DLElBQU07QUFBTkEsY0FBQUEsSUFBTTtBQUFBOztBQUNuQkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQXNCRixJQUFJLENBQUNHLFFBQUwsRUFBbEM7QUFDSDs7O2tDQUVRO0FBQ0w7QUFDQUYsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7O3VDQUcyQjtBQUN2QixpQkFBS0osU0FBTCxHQUFpQixLQUFLTSxZQUFMLENBQWtCQyxNQUFsQixDQUF5QkMsSUFBekIsRUFBakI7QUFDQSxpQkFBS1AsSUFBTCxHQUFZLEtBQUtRLE9BQUwsQ0FBYUYsTUFBekIsQ0FGdUIsQ0FHdkI7O0FBQ0E7QUFBQTtBQUFBLHdDQUFVRyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQztBQUM3QkMsY0FBQUEsUUFBUSxFQUFHO0FBQUE7QUFBQSx3Q0FBU0MsTUFBVCxDQUFnQkM7QUFERSxhQUFqQztBQUdIOzs7MENBRXNCLENBRXRCOzs7eUNBRXNCQyxJLEVBQTBCO0FBQzdDLGlCQUFLZixTQUFMLEdBQWlCZSxJQUFJLENBQUNSLE1BQXRCO0FBQ0g7OztvQ0FFZ0JRLEksRUFBMEI7QUFDdkMsaUJBQUtkLElBQUwsR0FBWWMsSUFBSSxDQUFDUixNQUFqQjtBQUNIOzs7Ozs7Ozs7OztpQkF6Q2lDLEk7Ozs7Ozs7aUJBR0wsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQsIEVkaXRCb3hDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IFZpZXdCYXNlIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdWkvVmlld0Jhc2VcIjtcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VpL1VJTWFuYWdlclwiO1xuaW1wb3J0IHsgVUlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy91aS9VSU1vZHVsZVwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJMb2dpblZpZXdcIilcbmV4cG9ydCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6RWRpdEJveENvbXBvbmVudH0pXG4gICAgZWRpdFVzZXJOYW1lIDogRWRpdEJveENvbXBvbmVudCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6RWRpdEJveENvbXBvbmVudH0pXG4gICAgZWRpdFBXRCA6IEVkaXRCb3hDb21wb25lbnQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBtVXNlck5hbWUgOiBzdHJpbmcgPSBcIlwiIDtcbiAgICBwcml2YXRlIG1QV0QgOiBzdHJpbmcgPSBcIlwiIDtcblxuICAgIHB1YmxpYyBvbk9wZW4oLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2ludmlldyBvbk9wZW4gXCIgKyBhcmdzLnRvU3RyaW5nKCkgKTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbnZpZXcgc3RhcnRcIik7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxuXG5cbiAgICBwdWJsaWMgb25CdG5Mb2dpbiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubVVzZXJOYW1lID0gdGhpcy5lZGl0VXNlck5hbWUuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgdGhpcy5tUFdEID0gdGhpcy5lZGl0UFdELnN0cmluZztcbiAgICAgICAgLy8gVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd1RpcHModGhpcy5tVXNlck5hbWUrXCIgXCIrdGhpcy5tUFdEKTtcbiAgICAgICAgVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkub3BlblZpZXcoe1xuICAgICAgICAgICAgdmlld05hbWUgOiBVSU1vZHVsZS5zVmlld3MuSG9tZVZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgb25CdG5SZWdpc3RlcigpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblVzZXJOYW1lRWRpdCggZWRpdCA6IEVkaXRCb3hDb21wb25lbnQgKSB7XG4gICAgICAgIHRoaXMubVVzZXJOYW1lID0gZWRpdC5zdHJpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUFdERWRpdChlZGl0IDogRWRpdEJveENvbXBvbmVudCApIHtcbiAgICAgICAgdGhpcy5tUFdEID0gZWRpdC5zdHJpbmc7XG4gICAgfVxufVxuIl19