System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, ViewBase;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "118e92hrLtKm67AHmMS6tf3", "ViewBase", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ViewBase", ViewBase = (_dec = ccclass("ViewBase"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        _inherits(ViewBase, _Component);

        function ViewBase() {
          _classCallCheck(this, ViewBase);

          return _possibleConstructorReturn(this, _getPrototypeOf(ViewBase).call(this));
        }

        _createClass(ViewBase, [{
          key: "onOpen",
          value: function onOpen() {}
        }, {
          key: "onConvert",
          value: function onConvert(other) {
            this.node.active = false;
          }
        }]);

        return ViewBase;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3VpL1ZpZXdCYXNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJWaWV3QmFzZSIsIm90aGVyIiwibm9kZSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7Ozs7QUFDYkMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7Ozs7QUFNSiw0QkFBZ0I7QUFBQTs7QUFBQTtBQUVmOzs7O21DQUVzQixDQUV0Qjs7O29DQUVpQkcsSyxFQUFtQjtBQUNqQyxpQkFBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7Ozs7UUFmeUJOLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiVmlld0Jhc2VcIilcbmV4cG9ydCBjbGFzcyBWaWV3QmFzZSBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIG1WaWV3TmFtZSA6IHN0cmluZztcblxuXG4gICAgY29uc3RydWN0b3IoICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25PcGVuKC4uLmFyZ3MpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNvbnZlcnQoIG90aGVyIDogVmlld0Jhc2UgKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbn1cbiJdfQ==