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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL3ZpZXdzL2xvZ2luL0xvZ2luVmlldy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRWRpdEJveENvbXBvbmVudCIsIlZpZXdCYXNlIiwiVUlNYW5hZ2VyIiwiVUlNb2R1bGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2dpblZpZXciLCJ0eXBlIiwibVVzZXJOYW1lIiwibVBXRCIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJlZGl0VXNlck5hbWUiLCJzdHJpbmciLCJ0cmltIiwiZWRpdFBXRCIsImdldEluc3RhbmNlIiwib3BlblZpZXciLCJ2aWV3TmFtZSIsInNWaWV3cyIsIkhvbWVWaWV3IiwiZWRpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkNDLE1BQUFBLGdCLE9BQUFBLGdCOzs7O0FBQzdDQyxNQUFBQSxRLHdCQUFBQSxROztBQUNBQyxNQUFBQSxTLHlCQUFBQSxTOztBQUNBQyxNQUFBQSxRLHdCQUFBQSxROzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQyxVQVNIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDUDtBQUFOLE9BQUQsQyxVQUdSSyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDUDtBQUFOLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHRFEsUyxHQUFxQixFO2dCQUNyQkMsSSxHQUFnQixFOzs7Ozs7bUNBRUQ7QUFBQSwrQ0FBTkMsSUFBTTtBQUFOQSxjQUFBQSxJQUFNO0FBQUE7O0FBQ25CQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0JGLElBQUksQ0FBQ0csUUFBTCxFQUFsQztBQUNIOzs7a0NBRVE7QUFDTDtBQUNBRixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7dUNBRzJCO0FBQ3ZCLGlCQUFLSixTQUFMLEdBQWlCLEtBQUtNLFlBQUwsQ0FBa0JDLE1BQWxCLENBQXlCQyxJQUF6QixFQUFqQjtBQUNBLGlCQUFLUCxJQUFMLEdBQVksS0FBS1EsT0FBTCxDQUFhRixNQUF6QixDQUZ1QixDQUd2Qjs7QUFDQTtBQUFBO0FBQUEsd0NBQVVHLFdBQVYsR0FBd0JDLFFBQXhCLENBQWlDO0FBQzdCQyxjQUFBQSxRQUFRLEVBQUc7QUFBQTtBQUFBLHdDQUFTQyxNQUFULENBQWdCQztBQURFLGFBQWpDO0FBR0g7OzswQ0FFc0IsQ0FFdEI7Ozt5Q0FFc0JDLEksRUFBMEI7QUFDN0MsaUJBQUtmLFNBQUwsR0FBaUJlLElBQUksQ0FBQ1IsTUFBdEI7QUFDSDs7O29DQUVnQlEsSSxFQUEwQjtBQUN2QyxpQkFBS2QsSUFBTCxHQUFZYyxJQUFJLENBQUNSLE1BQWpCO0FBQ0g7Ozs7Ozs7Ozs7O2lCQXpDaUMsSTs7Ozs7OztpQkFHTCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBMYWJlbENvbXBvbmVudCwgRWRpdEJveENvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBWaWV3QmFzZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VpL1ZpZXdCYXNlXCI7XHJcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VpL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VpL1VJTW9kdWxlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkxvZ2luVmlld1wiKVxyXG5leHBvcnQgY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpFZGl0Qm94Q29tcG9uZW50fSlcclxuICAgIGVkaXRVc2VyTmFtZSA6IEVkaXRCb3hDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpFZGl0Qm94Q29tcG9uZW50fSlcclxuICAgIGVkaXRQV0QgOiBFZGl0Qm94Q29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1Vc2VyTmFtZSA6IHN0cmluZyA9IFwiXCIgO1xyXG4gICAgcHJpdmF0ZSBtUFdEIDogc3RyaW5nID0gXCJcIiA7XHJcblxyXG4gICAgcHVibGljIG9uT3BlbiguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbnZpZXcgb25PcGVuIFwiICsgYXJncy50b1N0cmluZygpICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2ludmlldyBzdGFydFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25CdG5Mb2dpbiguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5tVXNlck5hbWUgPSB0aGlzLmVkaXRVc2VyTmFtZS5zdHJpbmcudHJpbSgpO1xyXG4gICAgICAgIHRoaXMubVBXRCA9IHRoaXMuZWRpdFBXRC5zdHJpbmc7XHJcbiAgICAgICAgLy8gVUlNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd1RpcHModGhpcy5tVXNlck5hbWUrXCIgXCIrdGhpcy5tUFdEKTtcclxuICAgICAgICBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vcGVuVmlldyh7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lIDogVUlNb2R1bGUuc1ZpZXdzLkhvbWVWaWV3XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25CdG5SZWdpc3RlcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVXNlck5hbWVFZGl0KCBlZGl0IDogRWRpdEJveENvbXBvbmVudCApIHtcclxuICAgICAgICB0aGlzLm1Vc2VyTmFtZSA9IGVkaXQuc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBXREVkaXQoZWRpdCA6IEVkaXRCb3hDb21wb25lbnQgKSB7XHJcbiAgICAgICAgdGhpcy5tUFdEID0gZWRpdC5zdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19