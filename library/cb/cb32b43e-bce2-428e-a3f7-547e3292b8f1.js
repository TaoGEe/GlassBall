System.register(["cc", "code-quality:cr", "../../battle/heroControl/HeroController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, EventTouch, find, HeroController, _dec, _class, _temp, _crd, ccclass, property, BattleView;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfHeroController(extras) {
    _reporterNs.report("HeroController", "../../battle/heroControl/HeroController", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      EventTouch = _cc.EventTouch;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_battleHeroControlHeroControllerJs) {
      HeroController = _battleHeroControlHeroControllerJs.HeroController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "cb32bQ+vOJCjqP3VH4ykrjx", "BattleView", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BattleView", BattleView = (_dec = ccclass("BattleView"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(BattleView, _Component);

        function BattleView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BattleView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BattleView)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.mPlayer = null;
          return _this;
        }

        _createClass(BattleView, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.node.on(Node.EventType.TOUCH_START, this.onTouch, this);
            this.node.on(Node.EventType.TOUCH_MOVE, this.onTouch, this);
            this.node.on(Node.EventType.TOUCH_END, this.onTouch, this);
            this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouch, this);
            this.mPlayer = find("game/Hero").getComponent(_crd && HeroController === void 0 ? (_reportPossibleCrUseOfHeroController({
              error: Error()
            }), HeroController) : HeroController);
          }
        }, {
          key: "onTouch",
          value: function onTouch(event) {
            if (event.getEventCode() == EventTouch.BEGAN) {} else if (event.getEventCode() == EventTouch.MOVED) {
              this.mPlayer.onCameraRotation(event.getDeltaX());
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "onRestart",
          value: function onRestart() {}
        }, {
          key: "onChange",
          value: function onChange() {}
        }, {
          key: "onBack",
          value: function onBack() {}
        }, {
          key: "onSkill1",
          value: function onSkill1() {}
        }, {
          key: "onSkill2",
          value: function onSkill2() {}
        }, {
          key: "onSkill3",
          value: function onSkill3() {}
        }]);

        return BattleView;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL3ZpZXdzL2JhdHRsZS9CYXR0bGVWaWV3LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiRXZlbnRUb3VjaCIsImZpbmQiLCJIZXJvQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhdHRsZVZpZXciLCJtUGxheWVyIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoIiwiVE9VQ0hfTU9WRSIsIlRPVUNIX0VORCIsIlRPVUNIX0NBTkNFTCIsImdldENvbXBvbmVudCIsImV2ZW50IiwiZ2V0RXZlbnRDb2RlIiwiQkVHQU4iLCJNT1ZFRCIsIm9uQ2FtZXJhUm90YXRpb24iLCJnZXREZWx0YVgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLEksT0FBQUEsSTs7OztBQUN0REMsTUFBQUEsYyxzQ0FBQUEsYzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzRCQUdKQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVNKRyxPLEdBQTJCLEk7Ozs7OztrQ0FFbEI7QUFDTDtBQUNBLGlCQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVQsSUFBSSxDQUFDVSxTQUFMLENBQWVDLFdBQTVCLEVBQXlDLEtBQUtDLE9BQTlDLEVBQXVELElBQXZEO0FBQ0EsaUJBQUtKLElBQUwsQ0FBVUMsRUFBVixDQUFhVCxJQUFJLENBQUNVLFNBQUwsQ0FBZUcsVUFBNUIsRUFBd0MsS0FBS0QsT0FBN0MsRUFBc0QsSUFBdEQ7QUFDQSxpQkFBS0osSUFBTCxDQUFVQyxFQUFWLENBQWFULElBQUksQ0FBQ1UsU0FBTCxDQUFlSSxTQUE1QixFQUF1QyxLQUFLRixPQUE1QyxFQUFxRCxJQUFyRDtBQUNBLGlCQUFLSixJQUFMLENBQVVDLEVBQVYsQ0FBYVQsSUFBSSxDQUFDVSxTQUFMLENBQWVLLFlBQTVCLEVBQTBDLEtBQUtILE9BQS9DLEVBQXdELElBQXhEO0FBQ0EsaUJBQUtMLE9BQUwsR0FBZUwsSUFBSSxDQUFDLFdBQUQsQ0FBSixDQUFrQmMsWUFBbEI7QUFBQTtBQUFBLGlEQUFmO0FBQ0g7OztrQ0FFUUMsSyxFQUFvQjtBQUN6QixnQkFBS0EsS0FBSyxDQUFDQyxZQUFOLE1BQXdCakIsVUFBVSxDQUFDa0IsS0FBeEMsRUFBZ0QsQ0FFL0MsQ0FGRCxNQUVPLElBQUtGLEtBQUssQ0FBQ0MsWUFBTixNQUF3QmpCLFVBQVUsQ0FBQ21CLEtBQXhDLEVBQWdEO0FBQ25ELG1CQUFLYixPQUFMLENBQWFjLGdCQUFiLENBQThCSixLQUFLLENBQUNLLFNBQU4sRUFBOUI7QUFDSDtBQUNKLFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7c0NBRVksQ0FFWDs7O3FDQUVVLENBRVY7OzttQ0FFUSxDQUVSOzs7cUNBRVUsQ0FFVjs7O3FDQUVVLENBRVY7OztxQ0FFVSxDQUVWOzs7O1FBckQyQnZCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFN5c3RlbUV2ZW50LCBFdmVudFRvdWNoLCBmaW5kIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IEhlcm9Db250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2JhdHRsZS9oZXJvQ29udHJvbC9IZXJvQ29udHJvbGxlclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJCYXR0bGVWaWV3XCIpXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBtUGxheWVyIDogSGVyb0NvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubVBsYXllciA9IGZpbmQoXCJnYW1lL0hlcm9cIikuZ2V0Q29tcG9uZW50KEhlcm9Db250cm9sbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoKCBldmVudDogRXZlbnRUb3VjaCApIHtcclxuICAgICAgICBpZiAoIGV2ZW50LmdldEV2ZW50Q29kZSgpID09IEV2ZW50VG91Y2guQkVHQU4gKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmdldEV2ZW50Q29kZSgpID09IEV2ZW50VG91Y2guTU9WRUQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMubVBsYXllci5vbkNhbWVyYVJvdGF0aW9uKGV2ZW50LmdldERlbHRhWCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxuXHJcbiAgICBvblJlc3RhcnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2tpbGwxKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2tpbGwyKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2tpbGwzKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==