System.register(["cc", "code-quality:cr", "../base/ModuleBase.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, ModuleBase, _dec, _class, _class2, _temp, _crd, ccclass, property, UIModule;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

        return UIModule;
      }(_crd && ModuleBase === void 0 ? (_reportPossibleCrUseOfModuleBase({
        error: Error()
      }), ModuleBase) : ModuleBase), _class2.sViews = {
        LoginView: "prefab/ui/LoginView.prefab",
        Tips: "prefab/ui/Tips.prefab",
        HomeView: "prefab/ui/HomeView.prefab"
      }, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvdWkvVUlNb2R1bGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk1vZHVsZUJhc2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSU1vZHVsZSIsInNWaWV3cyIsIkxvZ2luVmlldyIsIlRpcHMiLCJIb21lVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNBQyxNQUFBQSxVLHFCQUFBQSxVOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7Ozs7Ozs7Ozs7Ozs7NkNBR0dHLE0sR0FBUztBQUNaQyxRQUFBQSxTQUFTLEVBQUcsNEJBREE7QUFFWkMsUUFBQUEsSUFBSSxFQUFHLHVCQUZLO0FBR1pDLFFBQUFBLFFBQVEsRUFBRztBQUhDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IE1vZHVsZUJhc2UgfSBmcm9tIFwiLi4vYmFzZS9Nb2R1bGVCYXNlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlVJTW9kdWxlXCIpXHJcbmV4cG9ydCBjbGFzcyBVSU1vZHVsZSBleHRlbmRzIE1vZHVsZUJhc2V7XHJcblxyXG4gICAgc3RhdGljIHNWaWV3cyA9IHtcclxuICAgICAgICBMb2dpblZpZXcgOiBcInByZWZhYi91aS9Mb2dpblZpZXcucHJlZmFiXCIgLFxyXG4gICAgICAgIFRpcHMgOiBcInByZWZhYi91aS9UaXBzLnByZWZhYlwiICxcclxuICAgICAgICBIb21lVmlldyA6IFwicHJlZmFiL3VpL0hvbWVWaWV3LnByZWZhYlwiICxcclxuICAgIH1cclxufSJdfQ==