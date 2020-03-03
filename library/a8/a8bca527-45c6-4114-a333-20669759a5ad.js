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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvdWkvVUlNb2R1bGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk1vZHVsZUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSU1vZHVsZSIsInBhdGgiLCJmaWxlTmFtZSIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwia2V5IiwicmVwbGFjZSIsInNWaWV3cyIsImhhc093blByb3BlcnR5Iiwic1NjZW5lIiwiTGF1bmNoU2NlbmUiLCJzQmF0dGxlVmlldyIsIkJhdHRsZVNjZW5lIiwiTG9naW5WaWV3IiwiVGlwcyIsIkhvbWVWaWV3IiwiQmF0dGxlVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDQUMsTUFBQUEsVSxxQkFBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7Ozs7Ozs7Ozs7dUNBa0JpQkcsSSxFQUF5QjtBQUMxQyxnQkFBSUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FBYUYsSUFBSSxDQUFDRyxXQUFMLENBQWlCLEdBQWpCLElBQXNCLENBQW5DLENBQWY7QUFDQSxnQkFBSUMsR0FBRyxHQUFHSCxRQUFRLENBQUNJLE9BQVQsQ0FBaUIsU0FBakIsRUFBNEIsRUFBNUIsQ0FBVjs7QUFDQSxnQkFBSyxLQUFLQyxNQUFMLENBQVlDLGNBQVosQ0FBNEJILEdBQTVCLENBQUwsRUFBd0M7QUFDcEMscUJBQU8sS0FBS0ksTUFBTCxDQUFZQyxXQUFuQjtBQUNILGFBRkQsTUFFTyxJQUFLLEtBQUtDLFdBQUwsQ0FBaUJILGNBQWpCLENBQWlDSCxHQUFqQyxDQUFMLEVBQTRDO0FBQy9DLHFCQUFPLEtBQUtJLE1BQUwsQ0FBWUcsV0FBbkI7QUFDSDtBQUNKOzs7Ozs7NkNBdkJNTCxNLEdBQVM7QUFDWk0sUUFBQUEsU0FBUyxFQUFHLDRCQURBO0FBRVpDLFFBQUFBLElBQUksRUFBRyx1QkFGSztBQUdaQyxRQUFBQSxRQUFRLEVBQUc7QUFIQyxPLFVBTVRKLFcsR0FBYztBQUNqQkssUUFBQUEsVUFBVSxFQUFHO0FBREksTyxVQUlkUCxNLEdBQVM7QUFDWkMsUUFBQUEsV0FBVyxFQUFHLGFBREY7QUFFWkUsUUFBQUEsV0FBVyxFQUFHO0FBRkYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgTW9kdWxlQmFzZSB9IGZyb20gXCIuLi9iYXNlL01vZHVsZUJhc2VcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiVUlNb2R1bGVcIilcclxuZXhwb3J0IGNsYXNzIFVJTW9kdWxlIGV4dGVuZHMgTW9kdWxlQmFzZXtcclxuXHJcbiAgICBzdGF0aWMgc1ZpZXdzID0ge1xyXG4gICAgICAgIExvZ2luVmlldyA6IFwicHJlZmFiL3VpL0xvZ2luVmlldy5wcmVmYWJcIiAsXHJcbiAgICAgICAgVGlwcyA6IFwicHJlZmFiL3VpL1RpcHMucHJlZmFiXCIgLFxyXG4gICAgICAgIEhvbWVWaWV3IDogXCJwcmVmYWIvdWkvSG9tZVZpZXcucHJlZmFiXCIgLFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzQmF0dGxlVmlldyA9IHtcclxuICAgICAgICBCYXR0bGVWaWV3IDogXCJwcmVmYWIvdWkvQmF0dGxlVmlldy5wcmVmYWJcIiAsXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNTY2VuZSA9IHtcclxuICAgICAgICBMYXVuY2hTY2VuZSA6IFwiTGF1bmNoU2NlbmVcIiAsXHJcbiAgICAgICAgQmF0dGxlU2NlbmUgOiBcIkJhdHRsZVNjZW5lXCIgLFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBHZXRTY2VuZU5hbWUoIHBhdGggOiBzdHJpbmcgKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gcGF0aC5zdWJzdHIoIHBhdGgubGFzdEluZGV4T2YoJy8nKSsxICk7XHJcbiAgICAgICAgbGV0IGtleSA9IGZpbGVOYW1lLnJlcGxhY2UoXCIucHJlZmFiXCIsIFwiXCIpO1xyXG4gICAgICAgIGlmICggdGhpcy5zVmlld3MuaGFzT3duUHJvcGVydHkoIGtleSApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNTY2VuZS5MYXVuY2hTY2VuZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLnNCYXR0bGVWaWV3Lmhhc093blByb3BlcnR5KCBrZXkgKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNTY2VuZS5CYXR0bGVTY2VuZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=