System.register(["cc", "code-quality:cr", "../../battle/heroControl/HeroController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, EventTouch, find, ProgressBarComponent, HeroController, _dec, _class, _temp, _crd, ccclass, property, BattleView;

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
      ProgressBarComponent = _cc.ProgressBarComponent;
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
          _this.mTouchTime = 0;
          _this.mProcessForce = null;
          _this.mStartAddForce = false;
          _this.mForceAdd = 1;
          _this.mForce = 0;
          _this.mMaxForce = 2;
          return _this;
        }

        _createClass(BattleView, [{
          key: "start",
          value: function start() {
            this.mProcessForce = this.getComponentInChildren(ProgressBarComponent); // Your initialization goes here.

            var skill3 = this.node.getChildByPath("Content/RightDown/Layout/ButtonSkill3");
            this.bindTouch(skill3, this.onForce, this);
            this.mPlayer = find("game/Hero").getComponent(_crd && HeroController === void 0 ? (_reportPossibleCrUseOfHeroController({
              error: Error()
            }), HeroController) : HeroController);
            this.bindTouch(this.node, this.onTouch, this);
          }
        }, {
          key: "bindTouch",
          value: function bindTouch(node, callback, cTarget) {
            node.on(Node.EventType.TOUCH_START, callback, cTarget);
            node.on(Node.EventType.TOUCH_MOVE, callback, cTarget);
            node.on(Node.EventType.TOUCH_END, callback, cTarget);
            node.on(Node.EventType.TOUCH_CANCEL, callback, cTarget);
          }
        }, {
          key: "onTouch",
          value: function onTouch(event) {
            if (event.getEventCode() == EventTouch.BEGAN) {} else if (event.getEventCode() == EventTouch.MOVED) {
              this.mPlayer.onCameraRotation(event.getDeltaX());
            }
          }
        }, {
          key: "onForce",
          value: function onForce(event) {
            if (event.getEventCode() == EventTouch.BEGAN) {
              this.mStartAddForce = true;
              this.mForce = 0;
              this.mForceAdd = 1;
            } else if (event.getEventCode() == EventTouch.ENDED || event.getEventCode() == EventTouch.CANCELLED) {
              this.mPlayer.addForce(this.mForce);
              this.mForce = 0;
              this.mStartAddForce = false;
              this.mForceAdd = 1;
              this.mProcessForce.progress = 0;
            }
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.mStartAddForce) {
              if (this.mForce >= this.mMaxForce) {
                this.mForceAdd = -this.mForceAdd;
              }

              this.mForce += deltaTime * this.mForceAdd;
              this.mProcessForce.progress = this.mForce / this.mMaxForce;
            }
          }
        }, {
          key: "onRestart",
          value: function onRestart() {
            this.mPlayer.reset();
          }
        }, {
          key: "onChange",
          value: function onChange() {}
        }, {
          key: "onBack",
          value: function onBack() {}
        }, {
          key: "onSkill1",
          value: function onSkill1() {
            this.mPlayer.onSkill(1);
          }
        }, {
          key: "onSkill2",
          value: function onSkill2() {
            this.mPlayer.onSkill(2);
          }
        }, {
          key: "onSkill3",
          value: function onSkill3() {
            this.mPlayer.onSkill(3);
          }
        }]);

        return BattleView;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy92aWV3cy9iYXR0bGUvQmF0dGxlVmlldy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkV2ZW50VG91Y2giLCJmaW5kIiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJIZXJvQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhdHRsZVZpZXciLCJtUGxheWVyIiwibVRvdWNoVGltZSIsIm1Qcm9jZXNzRm9yY2UiLCJtU3RhcnRBZGRGb3JjZSIsIm1Gb3JjZUFkZCIsIm1Gb3JjZSIsIm1NYXhGb3JjZSIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJza2lsbDMiLCJub2RlIiwiZ2V0Q2hpbGRCeVBhdGgiLCJiaW5kVG91Y2giLCJvbkZvcmNlIiwiZ2V0Q29tcG9uZW50Iiwib25Ub3VjaCIsImNhbGxiYWNrIiwiY1RhcmdldCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwiVE9VQ0hfQ0FOQ0VMIiwiZXZlbnQiLCJnZXRFdmVudENvZGUiLCJCRUdBTiIsIk1PVkVEIiwib25DYW1lcmFSb3RhdGlvbiIsImdldERlbHRhWCIsIkVOREVEIiwiQ0FOQ0VMTEVEIiwiYWRkRm9yY2UiLCJwcm9ncmVzcyIsImRlbHRhVGltZSIsInJlc2V0Iiwib25Ta2lsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLG9CLE9BQUFBLG9COzs7O0FBQzVEQyxNQUFBQSxjLHNDQUFBQSxjOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0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QUFTLEdBQUMsS0FBSzdCLFNBQTlCO0FBQ0EsbUJBQUtGLGFBQUwsQ0FBbUI4QixRQUFuQixHQUE4QixLQUFLM0IsTUFBTCxHQUFZLEtBQUtDLFNBQS9DO0FBQ0g7QUFDSjs7O3NDQUVXO0FBQ1IsaUJBQUtOLE9BQUwsQ0FBYWtDLEtBQWI7QUFDSDs7O3FDQUVVLENBRVY7OzttQ0FFUSxDQUVSOzs7cUNBRVU7QUFDUCxpQkFBS2xDLE9BQUwsQ0FBYW1DLE9BQWIsQ0FBcUIsQ0FBckI7QUFDSDs7O3FDQUVVO0FBQ1AsaUJBQUtuQyxPQUFMLENBQWFtQyxPQUFiLENBQXFCLENBQXJCO0FBQ0g7OztxQ0FFVTtBQUNQLGlCQUFLbkMsT0FBTCxDQUFhbUMsT0FBYixDQUFxQixDQUFyQjtBQUNIOzs7O1FBL0YyQjVDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFN5c3RlbUV2ZW50LCBFdmVudFRvdWNoLCBmaW5kLCBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgSGVyb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vYmF0dGxlL2hlcm9Db250cm9sL0hlcm9Db250cm9sbGVyXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkJhdHRsZVZpZXdcIilcbmV4cG9ydCBjbGFzcyBCYXR0bGVWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIG1QbGF5ZXIgOiBIZXJvQ29udHJvbGxlciA9IG51bGw7XG5cbiAgICBtVG91Y2hUaW1lID0gMDtcblxuICAgIG1Qcm9jZXNzRm9yY2UgOiBQcm9ncmVzc0JhckNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBtU3RhcnRBZGRGb3JjZSA9IGZhbHNlO1xuICAgIG1Gb3JjZUFkZCA9IDE7XG4gICAgbUZvcmNlID0gMDtcblxuICAgIG1NYXhGb3JjZSA9IDI7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubVByb2Nlc3NGb3JjZSA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihQcm9ncmVzc0JhckNvbXBvbmVudCk7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICBsZXQgc2tpbGwzID0gdGhpcy5ub2RlLmdldENoaWxkQnlQYXRoKFwiQ29udGVudC9SaWdodERvd24vTGF5b3V0L0J1dHRvblNraWxsM1wiKTtcbiAgICAgICAgdGhpcy5iaW5kVG91Y2goc2tpbGwzLCB0aGlzLm9uRm9yY2UsIHRoaXMpO1xuICAgICAgICB0aGlzLm1QbGF5ZXIgPSBmaW5kKFwiZ2FtZS9IZXJvXCIpLmdldENvbXBvbmVudChIZXJvQ29udHJvbGxlcik7XG5cblxuICAgICAgICB0aGlzLmJpbmRUb3VjaCh0aGlzLm5vZGUsIHRoaXMub25Ub3VjaCwgdGhpcyk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYmluZFRvdWNoICggbm9kZTpOb2RlLCBjYWxsYmFjaywgY1RhcmdldCApIHtcbiAgICAgICAgbm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgY2FsbGJhY2ssIGNUYXJnZXQpO1xuICAgICAgICBub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGNhbGxiYWNrLCBjVGFyZ2V0KTtcbiAgICAgICAgbm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGNhbGxiYWNrLCBjVGFyZ2V0KTtcbiAgICAgICAgbm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGNhbGxiYWNrLCBjVGFyZ2V0KTtcbiAgICB9XG5cbiAgICBvblRvdWNoKCBldmVudDogRXZlbnRUb3VjaCApIHtcbiAgICAgICAgaWYgKCBldmVudC5nZXRFdmVudENvZGUoKSA9PSBFdmVudFRvdWNoLkJFR0FOICkge1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmdldEV2ZW50Q29kZSgpID09IEV2ZW50VG91Y2guTU9WRUQgKSB7XG4gICAgICAgICAgICB0aGlzLm1QbGF5ZXIub25DYW1lcmFSb3RhdGlvbihldmVudC5nZXREZWx0YVgoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvcmNlKCBldmVudDogRXZlbnRUb3VjaCApIHtcbiAgICAgICAgaWYgKCBldmVudC5nZXRFdmVudENvZGUoKSA9PSBFdmVudFRvdWNoLkJFR0FOICkge1xuICAgICAgICAgICAgdGhpcy5tU3RhcnRBZGRGb3JjZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1Gb3JjZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1Gb3JjZUFkZCA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmdldEV2ZW50Q29kZSgpID09IEV2ZW50VG91Y2guRU5ERUQgfHwgZXZlbnQuZ2V0RXZlbnRDb2RlKCkgPT0gRXZlbnRUb3VjaC5DQU5DRUxMRUQpIHtcbiAgICAgICAgICAgIHRoaXMubVBsYXllci5hZGRGb3JjZSh0aGlzLm1Gb3JjZSk7XG4gICAgICAgICAgICB0aGlzLm1Gb3JjZSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1TdGFydEFkZEZvcmNlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1Gb3JjZUFkZCA9IDE7XG4gICAgICAgICAgICB0aGlzLm1Qcm9jZXNzRm9yY2UucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIGlmICh0aGlzLm1TdGFydEFkZEZvcmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tRm9yY2U+PXRoaXMubU1heEZvcmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tRm9yY2VBZGQgPSAtdGhpcy5tRm9yY2VBZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1Gb3JjZSArPSBkZWx0YVRpbWUqdGhpcy5tRm9yY2VBZGQ7XG4gICAgICAgICAgICB0aGlzLm1Qcm9jZXNzRm9yY2UucHJvZ3Jlc3MgPSB0aGlzLm1Gb3JjZS90aGlzLm1NYXhGb3JjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5tUGxheWVyLnJlc2V0KClcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25CYWNrKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvblNraWxsMSgpIHtcbiAgICAgICAgdGhpcy5tUGxheWVyLm9uU2tpbGwoMSk7XG4gICAgfVxuXG4gICAgb25Ta2lsbDIoKSB7XG4gICAgICAgIHRoaXMubVBsYXllci5vblNraWxsKDIpO1xuICAgIH1cblxuICAgIG9uU2tpbGwzKCkge1xuICAgICAgICB0aGlzLm1QbGF5ZXIub25Ta2lsbCgzKTtcbiAgICB9XG59XG4iXX0=