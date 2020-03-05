System.register(["cc", "code-quality:cr", "../base/ModuleBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, ModuleBase, _dec, _class, _class2, _temp, _crd, ccclass, property, UIModule;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfModuleBase(extras) {
    _reporterNs.report("ModuleBase", "../base/ModuleBase", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_baseModuleBaseJs) {
      ModuleBase = _baseModuleBaseJs.ModuleBase;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a8bcaUnRcZBFKMzIGaXWaWt", "UIModule", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIModule", UIModule = (_dec = ccclass("UIModule"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_ref) {
        _inherits(UIModule, _ref);

        function UIModule() {
          _classCallCheck(this, UIModule);

          return _possibleConstructorReturn(this, _getPrototypeOf(UIModule).apply(this, arguments));
        }

        _createClass(UIModule, null, [{
          key: "GetSceneName",
          value: function GetSceneName(path) {
            var fileName = path.substr(path.lastIndexOf('/') + 1);
            var key = fileName.replace(".prefab", "");

            if (this.sViews.hasOwnProperty(key)) {
              return this.sScene.LaunchScene;
            } else if (this.sBattleView.hasOwnProperty(key)) {
              return this.sScene.BattleScene;
            }
          }
        }]);

        return UIModule;
      }(_crd && ModuleBase === void 0 ? (_reportPossibleCrUseOfModuleBase({
        error: Error()
      }), ModuleBase) : ModuleBase), _class2.sViews = {
        LoginView: "prefab/ui/LoginView.prefab",
        Tips: "prefab/ui/Tips.prefab",
        HomeView: "prefab/ui/HomeView.prefab"
      }, _class2.sBattleView = {
        BattleView: "prefab/ui/BattleView.prefab"
      }, _class2.sScene = {
        LaunchScene: "LaunchScene",
        BattleScene: "BattleScene"
      }, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3VpL1VJTW9kdWxlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNb2R1bGVCYXNlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlNb2R1bGUiLCJwYXRoIiwiZmlsZU5hbWUiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsImtleSIsInJlcGxhY2UiLCJzVmlld3MiLCJoYXNPd25Qcm9wZXJ0eSIsInNTY2VuZSIsIkxhdW5jaFNjZW5lIiwic0JhdHRsZVZpZXciLCJCYXR0bGVTY2VuZSIsIkxvZ2luVmlldyIsIlRpcHMiLCJIb21lVmlldyIsIkJhdHRsZVZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFUscUJBQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzswQkFHSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDOzs7Ozs7Ozs7Ozs7O3VDQWtCaUJHLEksRUFBeUI7QUFDMUMsZ0JBQUlDLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxNQUFMLENBQWFGLElBQUksQ0FBQ0csV0FBTCxDQUFpQixHQUFqQixJQUFzQixDQUFuQyxDQUFmO0FBQ0EsZ0JBQUlDLEdBQUcsR0FBR0gsUUFBUSxDQUFDSSxPQUFULENBQWlCLFNBQWpCLEVBQTRCLEVBQTVCLENBQVY7O0FBQ0EsZ0JBQUssS0FBS0MsTUFBTCxDQUFZQyxjQUFaLENBQTRCSCxHQUE1QixDQUFMLEVBQXdDO0FBQ3BDLHFCQUFPLEtBQUtJLE1BQUwsQ0FBWUMsV0FBbkI7QUFDSCxhQUZELE1BRU8sSUFBSyxLQUFLQyxXQUFMLENBQWlCSCxjQUFqQixDQUFpQ0gsR0FBakMsQ0FBTCxFQUE0QztBQUMvQyxxQkFBTyxLQUFLSSxNQUFMLENBQVlHLFdBQW5CO0FBQ0g7QUFDSjs7Ozs7OzZDQXZCTUwsTSxHQUFTO0FBQ1pNLFFBQUFBLFNBQVMsRUFBRyw0QkFEQTtBQUVaQyxRQUFBQSxJQUFJLEVBQUcsdUJBRks7QUFHWkMsUUFBQUEsUUFBUSxFQUFHO0FBSEMsTyxVQU1USixXLEdBQWM7QUFDakJLLFFBQUFBLFVBQVUsRUFBRztBQURJLE8sVUFJZFAsTSxHQUFTO0FBQ1pDLFFBQUFBLFdBQVcsRUFBRyxhQURGO0FBRVpFLFFBQUFBLFdBQVcsRUFBRztBQUZGLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBNb2R1bGVCYXNlIH0gZnJvbSBcIi4uL2Jhc2UvTW9kdWxlQmFzZVwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJVSU1vZHVsZVwiKVxuZXhwb3J0IGNsYXNzIFVJTW9kdWxlIGV4dGVuZHMgTW9kdWxlQmFzZXtcblxuICAgIHN0YXRpYyBzVmlld3MgPSB7XG4gICAgICAgIExvZ2luVmlldyA6IFwicHJlZmFiL3VpL0xvZ2luVmlldy5wcmVmYWJcIiAsXG4gICAgICAgIFRpcHMgOiBcInByZWZhYi91aS9UaXBzLnByZWZhYlwiICxcbiAgICAgICAgSG9tZVZpZXcgOiBcInByZWZhYi91aS9Ib21lVmlldy5wcmVmYWJcIiAsXG4gICAgfVxuXG4gICAgc3RhdGljIHNCYXR0bGVWaWV3ID0ge1xuICAgICAgICBCYXR0bGVWaWV3IDogXCJwcmVmYWIvdWkvQmF0dGxlVmlldy5wcmVmYWJcIiAsXG4gICAgfVxuXG4gICAgc3RhdGljIHNTY2VuZSA9IHtcbiAgICAgICAgTGF1bmNoU2NlbmUgOiBcIkxhdW5jaFNjZW5lXCIgLFxuICAgICAgICBCYXR0bGVTY2VuZSA6IFwiQmF0dGxlU2NlbmVcIiAsXG4gICAgfVxuXG4gICAgc3RhdGljIEdldFNjZW5lTmFtZSggcGF0aCA6IHN0cmluZyApIDogc3RyaW5nIHtcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gcGF0aC5zdWJzdHIoIHBhdGgubGFzdEluZGV4T2YoJy8nKSsxICk7XG4gICAgICAgIGxldCBrZXkgPSBmaWxlTmFtZS5yZXBsYWNlKFwiLnByZWZhYlwiLCBcIlwiKTtcbiAgICAgICAgaWYgKCB0aGlzLnNWaWV3cy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNTY2VuZS5MYXVuY2hTY2VuZTtcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5zQmF0dGxlVmlldy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc1NjZW5lLkJhdHRsZVNjZW5lO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==