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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy92aWV3cy9ob21lL0hvbWVWaWV3LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJCdXR0b25Db21wb25lbnQiLCJVSU1hbmFnZXIiLCJVSU1vZHVsZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkhvbWVWaWV3IiwiYnRuIiwibm9kZSIsImdldENoaWxkQnlQYXRoIiwiYnRuY29tIiwiZ2V0Q29tcG9uZW50IiwiY2xpY2tFdmVudCIsImNjIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImNsaWNrRXZlbnRzIiwicHVzaCIsImdldEluc3RhbmNlIiwib3BlblZpZXciLCJ2aWV3TmFtZSIsInNCYXR0bGVWaWV3IiwiQmF0dGxlVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLGUsT0FBQUEsZTs7OztBQUM3QkMsTUFBQUEsUyx5QkFBQUEsUzs7QUFDQUMsTUFBQUEsUSx3QkFBQUEsUTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7a0NBRVM7QUFDTDtBQUNBLGdCQUFJRyxHQUFHLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLDBDQUF6QixDQUFWO0FBQ0EsZ0JBQUlDLE1BQU0sR0FBR0gsR0FBRyxDQUFDSSxZQUFKLENBQWlCVixlQUFqQixDQUFiO0FBQ0EsZ0JBQUlXLFVBQVUsR0FBRyxJQUFJQyxFQUFFLENBQUNiLFNBQUgsQ0FBYWMsWUFBakIsRUFBakI7QUFDQUYsWUFBQUEsVUFBVSxDQUFDRyxNQUFYLEdBQW9CLEtBQUtQLElBQXpCO0FBQ0FJLFlBQUFBLFVBQVUsQ0FBQ0ksU0FBWCxHQUF1QixVQUF2QjtBQUNBSixZQUFBQSxVQUFVLENBQUNLLE9BQVgsR0FBcUIsYUFBckI7QUFDQVAsWUFBQUEsTUFBTSxDQUFDUSxXQUFQLENBQW1CQyxJQUFuQixDQUF3QlAsVUFBeEI7QUFDSDs7O3dDQUVhO0FBQ1Y7QUFBQTtBQUFBLHdDQUFVUSxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQztBQUM3QkMsY0FBQUEsUUFBUSxFQUFHO0FBQUE7QUFBQSx3Q0FBU0MsV0FBVCxDQUFxQkM7QUFESCxhQUFqQztBQUdILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBM0IwQnhCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdWkvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3VpL1VJTW9kdWxlXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkhvbWVWaWV3XCIpXG5leHBvcnQgY2xhc3MgSG9tZVZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5UGF0aChcIkNvbnRlbnQvUmlnaHREb3duL0xheW91dC9CdXR0b25DaGFsbGVuZ2VcIik7XG4gICAgICAgIGxldCBidG5jb20gPSBidG4uZ2V0Q29tcG9uZW50KEJ1dHRvbkNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjbGlja0V2ZW50ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgY2xpY2tFdmVudC50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNsaWNrRXZlbnQuY29tcG9uZW50ID0gXCJIb21lVmlld1wiO1xuICAgICAgICBjbGlja0V2ZW50LmhhbmRsZXIgPSBcIm9uQ2hhbGxlbmdlXCI7XG4gICAgICAgIGJ0bmNvbS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnQpO1xuICAgIH1cblxuICAgIG9uQ2hhbGxlbmdlKCkge1xuICAgICAgICBVSU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5vcGVuVmlldyh7XG4gICAgICAgICAgICB2aWV3TmFtZSA6IFVJTW9kdWxlLnNCYXR0bGVWaWV3LkJhdHRsZVZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=