System.register(["cc", "code-quality:cr", "../../modules/ui/UIManager.js", "../../modules/ui/UIModule.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, ButtonComponent, UIManager, UIModule, _dec, _class, _crd, ccclass, property, HomeView;

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
    _reporterNs.report("UIManager", "../../modules/ui/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIModule(extras) {
    _reporterNs.report("UIModule", "../../modules/ui/UIModule", _context.meta, extras);
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
      ButtonComponent = _cc.ButtonComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_modulesUiUIManagerJs) {
      UIManager = _modulesUiUIManagerJs.UIManager;
    }, function (_modulesUiUIModuleJs) {
      UIModule = _modulesUiUIModuleJs.UIModule;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9fc51PAnjZIsYYHSO9OyOlD", "HomeView", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HomeView", HomeView = (_dec = ccclass("HomeView"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        _inherits(HomeView, _Component);

        function HomeView() {
          _classCallCheck(this, HomeView);

          return _possibleConstructorReturn(this, _getPrototypeOf(HomeView).apply(this, arguments));
        }

        _createClass(HomeView, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            var btn = this.node.getChildByPath("Content/RightDown/Layout/ButtonChallenge");
            var btncom = btn.getComponent(ButtonComponent);
            var clickEvent = new cc.Component.EventHandler();
            clickEvent.target = this.node;
            clickEvent.component = "HomeView";
            clickEvent.handler = "onChallenge";
            btncom.clickEvents.push(clickEvent);
          }
        }, {
          key: "onChallenge",
          value: function onChallenge() {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().openView({
              viewName: (_crd && UIModule === void 0 ? (_reportPossibleCrUseOfUIModule({
                error: Error()
              }), UIModule) : UIModule).sBattleView.BattleView
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return HomeView;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL3ZpZXdzL2hvbWUvSG9tZVZpZXcudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIkJ1dHRvbkNvbXBvbmVudCIsIlVJTWFuYWdlciIsIlVJTW9kdWxlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiSG9tZVZpZXciLCJidG4iLCJub2RlIiwiZ2V0Q2hpbGRCeVBhdGgiLCJidG5jb20iLCJnZXRDb21wb25lbnQiLCJjbGlja0V2ZW50IiwiY2MiLCJFdmVudEhhbmRsZXIiLCJ0YXJnZXQiLCJjb21wb25lbnQiLCJoYW5kbGVyIiwiY2xpY2tFdmVudHMiLCJwdXNoIiwiZ2V0SW5zdGFuY2UiLCJvcGVuVmlldyIsInZpZXdOYW1lIiwic0JhdHRsZVZpZXciLCJCYXR0bGVWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsZSxPQUFBQSxlOzs7O0FBQzdCQyxNQUFBQSxTLHlCQUFBQSxTOztBQUNBQyxNQUFBQSxRLHdCQUFBQSxROzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7Ozs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUztBQUNMO0FBQ0EsZ0JBQUlHLEdBQUcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsMENBQXpCLENBQVY7QUFDQSxnQkFBSUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLFlBQUosQ0FBaUJWLGVBQWpCLENBQWI7QUFDQSxnQkFBSVcsVUFBVSxHQUFHLElBQUlDLEVBQUUsQ0FBQ2IsU0FBSCxDQUFhYyxZQUFqQixFQUFqQjtBQUNBRixZQUFBQSxVQUFVLENBQUNHLE1BQVgsR0FBb0IsS0FBS1AsSUFBekI7QUFDQUksWUFBQUEsVUFBVSxDQUFDSSxTQUFYLEdBQXVCLFVBQXZCO0FBQ0FKLFlBQUFBLFVBQVUsQ0FBQ0ssT0FBWCxHQUFxQixhQUFyQjtBQUNBUCxZQUFBQSxNQUFNLENBQUNRLFdBQVAsQ0FBbUJDLElBQW5CLENBQXdCUCxVQUF4QjtBQUNIOzs7d0NBRWE7QUFDVjtBQUFBO0FBQUEsd0NBQVVRLFdBQVYsR0FBd0JDLFFBQXhCLENBQWlDO0FBQzdCQyxjQUFBQSxRQUFRLEVBQUc7QUFBQTtBQUFBLHdDQUFTQyxXQUFULENBQXFCQztBQURILGFBQWpDO0FBR0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUEzQjBCeEIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VpL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VpL1VJTW9kdWxlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkhvbWVWaWV3XCIpXHJcbmV4cG9ydCBjbGFzcyBIb21lVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgICAgIGxldCBidG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeVBhdGgoXCJDb250ZW50L1JpZ2h0RG93bi9MYXlvdXQvQnV0dG9uQ2hhbGxlbmdlXCIpO1xyXG4gICAgICAgIGxldCBidG5jb20gPSBidG4uZ2V0Q29tcG9uZW50KEJ1dHRvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnQudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsaWNrRXZlbnQuY29tcG9uZW50ID0gXCJIb21lVmlld1wiO1xyXG4gICAgICAgIGNsaWNrRXZlbnQuaGFuZGxlciA9IFwib25DaGFsbGVuZ2VcIjtcclxuICAgICAgICBidG5jb20uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYWxsZW5nZSgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vcGVuVmlldyh7XHJcbiAgICAgICAgICAgIHZpZXdOYW1lIDogVUlNb2R1bGUuc0JhdHRsZVZpZXcuQmF0dGxlVmlld1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=