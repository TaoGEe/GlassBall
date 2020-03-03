System.register(["cc", "code-quality:cr", "./ViewBase.js", "./UIAdapt.js", "./UIModule.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, loader, Prefab, instantiate, RichTextComponent, AnimationComponent, find, ViewBase, UIAdaptor, UIModule, _dec, _class, _temp, _crd, ccclass, property, UIManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfViewBase(extras) {
    _reporterNs.report("ViewBase", "./ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIAdaptor(extras) {
    _reporterNs.report("UIAdaptor", "./UIAdapt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIModule(extras) {
    _reporterNs.report("UIModule", "./UIModule", _context.meta, extras);
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
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      RichTextComponent = _cc.RichTextComponent;
      AnimationComponent = _cc.AnimationComponent;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_ViewBaseJs) {
      ViewBase = _ViewBaseJs.ViewBase;
    }, function (_UIAdaptJs) {
      UIAdaptor = _UIAdaptJs.UIAdaptor;
    }, function (_UIModuleJs) {
      UIModule = _UIModuleJs.UIModule;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "c8ddeYijW1H9pSk6ajEZC+j", "UIManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec(_class = (_temp =
      /*#__PURE__*/
      function () {
        _createClass(UIManager, null, [{
          key: "getInstance",
          value: function getInstance() {
            if (this.sInstance == null) {
              this.sInstance = new UIManager();
            }

            return this.sInstance;
          }
        }]);

        function UIManager() {
          _classCallCheck(this, UIManager);

          this.mViewStack = [];
          this.mTipsArray = [];
          this.enterNewScene((_crd && UIModule === void 0 ? (_reportPossibleCrUseOfUIModule({
            error: Error()
          }), UIModule) : UIModule).sScene.LaunchScene);
        }

        _createClass(UIManager, [{
          key: "enterNewScene",
          value: function enterNewScene(scene) {
            this.mCurScene = scene;
            this.mViewStack = [];
            this.mCurView = null;
            this.uiRoot = find("Root");
          }
        }, {
          key: "openView",
          value: function openView(viewInfo) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var uim = this;
            var scene = (_crd && UIModule === void 0 ? (_reportPossibleCrUseOfUIModule({
              error: Error()
            }), UIModule) : UIModule).GetSceneName(viewInfo.viewName);

            if (this.mCurScene != scene) {
              cc.director.loadScene(scene, function () {
                uim.enterNewScene(scene);
                uim.addViewToScene(viewInfo, callback);
              });
            } else {
              this.addViewToScene(viewInfo, callback);
            }
          }
        }, {
          key: "addViewToScene",
          value: function addViewToScene(viewInfo) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var uim = this;
            this.loadView(viewInfo.viewName, function (node) {
              var view = uim.addView(node, viewInfo.param);

              if (callback) {
                callback(view);
              }
            });
          }
        }, {
          key: "loadView",
          value: function loadView(path, callback) {
            loader.loadRes(path, Prefab, function (error, preView) {
              if (error) {
                console.log(error);
              } else {
                callback(instantiate(preView));
              }
            });
          }
        }, {
          key: "addView",
          value: function addView(node, param) {
            var view = node.getComponent(_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
              error: Error()
            }), ViewBase) : ViewBase);
            view.onOpen(param);

            if (this.mCurView) {
              this.mCurView.onConvert(view);
              this.mViewStack.push(this.mCurView);
            }

            this.mCurView = view;
            this.uiRoot.addChild(node);
            (_crd && UIAdaptor === void 0 ? (_reportPossibleCrUseOfUIAdaptor({
              error: Error()
            }), UIAdaptor) : UIAdaptor).AdaptUI(node);
            return view;
          }
        }, {
          key: "showTips",
          value: function showTips(text) {
            var uim = this;
            this.loadView((_crd && UIModule === void 0 ? (_reportPossibleCrUseOfUIModule({
              error: Error()
            }), UIModule) : UIModule).sViews.Tips, function (node) {
              uim.addTips(node, text);
            });
          }
        }, {
          key: "addTips",
          value: function addTips(node, text) {
            this.uiRoot.addChild(node);
            var richText = node.getComponentInChildren(RichTextComponent);
            richText.string = text;
            var animation = node.getComponent(AnimationComponent);
            var uim = this;
            animation.on("stop", function (state) {
              uim.mTipsArray.shift();
              node.destroy();
            });
            this.mTipsArray.forEach(function (element) {
              var pos = element.getPosition();
              pos.y += element.getContentSize().height;
              element.setPosition(pos);
            });
            this.mTipsArray.push(node);
          }
        }]);

        return UIManager;
      }(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvdWkvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJsb2FkZXIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlJpY2hUZXh0Q29tcG9uZW50IiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiZmluZCIsIlZpZXdCYXNlIiwiVUlBZGFwdG9yIiwiVUlNb2R1bGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSU1hbmFnZXIiLCJzSW5zdGFuY2UiLCJtVmlld1N0YWNrIiwibVRpcHNBcnJheSIsImVudGVyTmV3U2NlbmUiLCJzU2NlbmUiLCJMYXVuY2hTY2VuZSIsInNjZW5lIiwibUN1clNjZW5lIiwibUN1clZpZXciLCJ1aVJvb3QiLCJ2aWV3SW5mbyIsImNhbGxiYWNrIiwidWltIiwiR2V0U2NlbmVOYW1lIiwidmlld05hbWUiLCJjYyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYWRkVmlld1RvU2NlbmUiLCJsb2FkVmlldyIsIm5vZGUiLCJ2aWV3IiwiYWRkVmlldyIsInBhcmFtIiwicGF0aCIsImxvYWRSZXMiLCJlcnJvciIsInByZVZpZXciLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29tcG9uZW50Iiwib25PcGVuIiwib25Db252ZXJ0IiwicHVzaCIsImFkZENoaWxkIiwiQWRhcHRVSSIsInRleHQiLCJzVmlld3MiLCJUaXBzIiwiYWRkVGlwcyIsInJpY2hUZXh0IiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsInN0cmluZyIsImFuaW1hdGlvbiIsIm9uIiwic3RhdGUiLCJzaGlmdCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwiZWxlbWVudCIsInBvcyIsImdldFBvc2l0aW9uIiwieSIsImdldENvbnRlbnRTaXplIiwiaGVpZ2h0Iiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFzQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLE0sT0FBQUEsTTtBQUFjQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUNDLE1BQUFBLGlCLE9BQUFBLGlCO0FBQWtDQyxNQUFBQSxrQixPQUFBQSxrQjtBQUFvQkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ3JJQyxNQUFBQSxRLGVBQUFBLFE7O0FBQ0FDLE1BQUFBLFMsY0FBQUEsUzs7QUFDQUMsTUFBQUEsUSxlQUFBQSxROzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlYsVSxDQUF0QlUsTztBQUFTQyxNQUFBQSxRLEdBQWFYLFUsQ0FBYlcsUTs7MkJBR0pDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQzs7Ozs7d0NBWTZCO0FBQzdCLGdCQUFJLEtBQUtHLFNBQUwsSUFBa0IsSUFBdEIsRUFBNEI7QUFDeEIsbUJBQUtBLFNBQUwsR0FBaUIsSUFBSUQsU0FBSixFQUFqQjtBQUNIOztBQUNELG1CQUFPLEtBQUtDLFNBQVo7QUFDSDs7O0FBRUQsNkJBQWE7QUFBQTs7QUFBQSxlQWRMQyxVQWNLLEdBZFEsRUFjUjtBQUFBLGVBYkxDLFVBYUssR0FiUSxFQWFSO0FBQ1QsZUFBS0MsYUFBTCxDQUFtQjtBQUFBO0FBQUEsb0NBQVNDLE1BQVQsQ0FBZ0JDLFdBQW5DO0FBQ0g7Ozs7d0NBRXFCQyxLLEVBQWdCO0FBQ2xDLGlCQUFLQyxTQUFMLEdBQWlCRCxLQUFqQjtBQUNBLGlCQUFLTCxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsaUJBQUtPLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjaEIsSUFBSSxDQUFDLE1BQUQsQ0FBbEI7QUFDSDs7O21DQUVnQmlCLFEsRUFBeUM7QUFBQSxnQkFBeEJDLFFBQXdCLHVFQUFQLElBQU87QUFDdEQsZ0JBQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsZ0JBQUlOLEtBQUssR0FBRztBQUFBO0FBQUEsc0NBQVNPLFlBQVQsQ0FBdUJILFFBQVEsQ0FBQ0ksUUFBaEMsQ0FBWjs7QUFDQSxnQkFBSSxLQUFLUCxTQUFMLElBQWtCRCxLQUF0QixFQUE2QjtBQUN6QlMsY0FBQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFNBQVosQ0FBc0JYLEtBQXRCLEVBQTZCLFlBQVk7QUFDckNNLGdCQUFBQSxHQUFHLENBQUNULGFBQUosQ0FBa0JHLEtBQWxCO0FBQ0FNLGdCQUFBQSxHQUFHLENBQUNNLGNBQUosQ0FBbUJSLFFBQW5CLEVBQTZCQyxRQUE3QjtBQUNILGVBSEQ7QUFJSCxhQUxELE1BS087QUFDSCxtQkFBS08sY0FBTCxDQUFxQlIsUUFBckIsRUFBK0JDLFFBQS9CO0FBQ0g7QUFDSjs7O3lDQUV1QkQsUSxFQUEwQztBQUFBLGdCQUF6QkMsUUFBeUIsdUVBQVIsSUFBUTtBQUM5RCxnQkFBSUMsR0FBRyxHQUFHLElBQVY7QUFDQSxpQkFBS08sUUFBTCxDQUFlVCxRQUFRLENBQUNJLFFBQXhCLEVBQWtDLFVBQVdNLElBQVgsRUFBeUI7QUFDdkQsa0JBQUlDLElBQUksR0FBR1QsR0FBRyxDQUFDVSxPQUFKLENBQWFGLElBQWIsRUFBbUJWLFFBQVEsQ0FBQ2EsS0FBNUIsQ0FBWDs7QUFDQSxrQkFBSVosUUFBSixFQUFjO0FBQ1ZBLGdCQUFBQSxRQUFRLENBQUNVLElBQUQsQ0FBUjtBQUNIO0FBQ0osYUFMRDtBQU1IOzs7bUNBRWlCRyxJLEVBQWFiLFEsRUFBZ0I7QUFDM0N2QixZQUFBQSxNQUFNLENBQUNxQyxPQUFQLENBQWdCRCxJQUFoQixFQUFzQm5DLE1BQXRCLEVBQThCLFVBQVdxQyxLQUFYLEVBQWtCQyxPQUFsQixFQUFxQztBQUMvRCxrQkFBSUQsS0FBSixFQUFXO0FBQ1BFLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNILGVBRkQsTUFFTztBQUNIZixnQkFBQUEsUUFBUSxDQUFDckIsV0FBVyxDQUFDcUMsT0FBRCxDQUFaLENBQVI7QUFDSDtBQUNKLGFBTkQ7QUFPSDs7O2tDQUVnQlAsSSxFQUFhRyxLLEVBQTJCO0FBQ3JELGdCQUFNRixJQUFJLEdBQUlELElBQUksQ0FBQ1UsWUFBTDtBQUFBO0FBQUEscUNBQWQ7QUFDQVQsWUFBQUEsSUFBSSxDQUFDVSxNQUFMLENBQVlSLEtBQVo7O0FBQ0EsZ0JBQUksS0FBS2YsUUFBVCxFQUFtQjtBQUNmLG1CQUFLQSxRQUFMLENBQWN3QixTQUFkLENBQXdCWCxJQUF4QjtBQUNBLG1CQUFLcEIsVUFBTCxDQUFnQmdDLElBQWhCLENBQXFCLEtBQUt6QixRQUExQjtBQUNIOztBQUNELGlCQUFLQSxRQUFMLEdBQWdCYSxJQUFoQjtBQUNBLGlCQUFLWixNQUFMLENBQVl5QixRQUFaLENBQXNCZCxJQUF0QjtBQUNBO0FBQUE7QUFBQSx3Q0FBVWUsT0FBVixDQUFrQmYsSUFBbEI7QUFDQSxtQkFBT0MsSUFBUDtBQUNIOzs7bUNBRWdCZSxJLEVBQWE7QUFDMUIsZ0JBQUl4QixHQUFHLEdBQUcsSUFBVjtBQUNBLGlCQUFLTyxRQUFMLENBQWU7QUFBQTtBQUFBLHNDQUFTa0IsTUFBVCxDQUFnQkMsSUFBL0IsRUFBcUMsVUFBV2xCLElBQVgsRUFBeUI7QUFDMURSLGNBQUFBLEdBQUcsQ0FBQzJCLE9BQUosQ0FBWW5CLElBQVosRUFBa0JnQixJQUFsQjtBQUNILGFBRkQ7QUFHSDs7O2tDQUVnQmhCLEksRUFBYWdCLEksRUFBYztBQUN4QyxpQkFBSzNCLE1BQUwsQ0FBWXlCLFFBQVosQ0FBc0JkLElBQXRCO0FBQ0EsZ0JBQUlvQixRQUFRLEdBQUdwQixJQUFJLENBQUNxQixzQkFBTCxDQUE0QmxELGlCQUE1QixDQUFmO0FBQ0FpRCxZQUFBQSxRQUFRLENBQUNFLE1BQVQsR0FBa0JOLElBQWxCO0FBRUEsZ0JBQUlPLFNBQVMsR0FBR3ZCLElBQUksQ0FBQ1UsWUFBTCxDQUFrQnRDLGtCQUFsQixDQUFoQjtBQUNBLGdCQUFJb0IsR0FBRyxHQUFHLElBQVY7QUFDQStCLFlBQUFBLFNBQVMsQ0FBQ0MsRUFBVixDQUFjLE1BQWQsRUFBdUIsVUFBV0MsS0FBWCxFQUFtQjtBQUN0Q2pDLGNBQUFBLEdBQUcsQ0FBQ1YsVUFBSixDQUFlNEMsS0FBZjtBQUNBMUIsY0FBQUEsSUFBSSxDQUFDMkIsT0FBTDtBQUNILGFBSEQ7QUFJQSxpQkFBSzdDLFVBQUwsQ0FBZ0I4QyxPQUFoQixDQUF3QixVQUFBQyxPQUFPLEVBQUk7QUFDL0Isa0JBQUlDLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxXQUFSLEVBQVY7QUFDQUQsY0FBQUEsR0FBRyxDQUFDRSxDQUFKLElBQVNILE9BQU8sQ0FBQ0ksY0FBUixHQUF5QkMsTUFBbEM7QUFDQUwsY0FBQUEsT0FBTyxDQUFDTSxXQUFSLENBQW9CTCxHQUFwQjtBQUNILGFBSkQ7QUFLQSxpQkFBS2hELFVBQUwsQ0FBZ0IrQixJQUFoQixDQUFxQmIsSUFBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENDT2JqZWN0LCBsb2FkZXIsIFByZWZhYiwgdmlldywgaW5zdGFudGlhdGUsIFNwcml0ZUNvbXBvbmVudCxOb2RlLCBSaWNoVGV4dENvbXBvbmVudCwgQW5pbWF0aW9uQ2xpcCwgQW5pbWF0aW9uQ29tcG9uZW50LCBmaW5kIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFZpZXdCYXNlIH0gZnJvbSBcIi4vVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgVUlBZGFwdG9yIH0gZnJvbSBcIi4vVUlBZGFwdFwiO1xyXG5pbXBvcnQgeyBVSU1vZHVsZSB9IGZyb20gXCIuL1VJTW9kdWxlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlVJTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgVUlNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzSW5zdGFuY2U6IFVJTWFuYWdlcjtcclxuXHJcbiAgICBwcml2YXRlIG1WaWV3U3RhY2sgPSBbXTtcclxuICAgIHByaXZhdGUgbVRpcHNBcnJheSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgbUN1clZpZXcgOiBWaWV3QmFzZTtcclxuICAgIHByaXZhdGUgdWlSb290IDogTm9kZTtcclxuICAgIHByaXZhdGUgbUN1clNjZW5lIDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSA6IFVJTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuc0luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zSW5zdGFuY2UgPSBuZXcgVUlNYW5hZ2VyKCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVudGVyTmV3U2NlbmUoVUlNb2R1bGUuc1NjZW5lLkxhdW5jaFNjZW5lKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnRlck5ld1NjZW5lKCBzY2VuZSA6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubUN1clNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5tVmlld1N0YWNrID0gW107XHJcbiAgICAgICAgdGhpcy5tQ3VyVmlldyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51aVJvb3QgPSBmaW5kKFwiUm9vdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlblZpZXcoIHZpZXdJbmZvIDogYW55ICwgY2FsbGJhY2sgOiBhbnkgPSBudWxsICkge1xyXG4gICAgICAgIGxldCB1aW0gPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY2VuZSA9IFVJTW9kdWxlLkdldFNjZW5lTmFtZSggdmlld0luZm8udmlld05hbWUgKTtcclxuICAgICAgICBpZiAodGhpcy5tQ3VyU2NlbmUgIT0gc2NlbmUpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB1aW0uZW50ZXJOZXdTY2VuZShzY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB1aW0uYWRkVmlld1RvU2NlbmUodmlld0luZm8sIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRWaWV3VG9TY2VuZSggdmlld0luZm8sIGNhbGxiYWNrICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVmlld1RvU2NlbmUoIHZpZXdJbmZvIDogYW55ICwgY2FsbGJhY2sgOiBhbnkgPSBudWxsICApIHtcclxuICAgICAgICBsZXQgdWltID0gdGhpcztcclxuICAgICAgICB0aGlzLmxvYWRWaWV3KCB2aWV3SW5mby52aWV3TmFtZSwgZnVuY3Rpb24gKCBub2RlIDogTm9kZSApIHtcclxuICAgICAgICAgICAgbGV0IHZpZXcgPSB1aW0uYWRkVmlldyggbm9kZSwgdmlld0luZm8ucGFyYW0gKTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2aWV3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGxvYWRWaWV3KCBwYXRoIDogYW55ICwgY2FsbGJhY2s6IGFueSApIHtcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyggcGF0aCwgUHJlZmFiLCBmdW5jdGlvbiAoIGVycm9yLCBwcmVWaWV3IDogUHJlZmFiICkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGluc3RhbnRpYXRlKHByZVZpZXcpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFZpZXcoIG5vZGUgOiBOb2RlLCBwYXJhbSA6IGFueVtdICkgOiBWaWV3QmFzZSB7XHJcbiAgICAgICAgY29uc3QgdmlldyAgPSBub2RlLmdldENvbXBvbmVudChWaWV3QmFzZSk7XHJcbiAgICAgICAgdmlldy5vbk9wZW4ocGFyYW0pO1xyXG4gICAgICAgIGlmICh0aGlzLm1DdXJWaWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMubUN1clZpZXcub25Db252ZXJ0KHZpZXcpO1xyXG4gICAgICAgICAgICB0aGlzLm1WaWV3U3RhY2sucHVzaCh0aGlzLm1DdXJWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tQ3VyVmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy51aVJvb3QuYWRkQ2hpbGQoIG5vZGUgKTtcclxuICAgICAgICBVSUFkYXB0b3IuQWRhcHRVSShub2RlKTtcclxuICAgICAgICByZXR1cm4gdmlldztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RpcHMoIHRleHQgOiBhbnkgKSB7XHJcbiAgICAgICAgbGV0IHVpbSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2FkVmlldyggVUlNb2R1bGUuc1ZpZXdzLlRpcHMsIGZ1bmN0aW9uICggbm9kZSA6IE5vZGUgKSB7XHJcbiAgICAgICAgICAgIHVpbS5hZGRUaXBzKG5vZGUsIHRleHQpO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVGlwcyggbm9kZSA6IE5vZGUsIHRleHQgOiBhbnkgICkge1xyXG4gICAgICAgIHRoaXMudWlSb290LmFkZENoaWxkKCBub2RlICk7XHJcbiAgICAgICAgbGV0IHJpY2hUZXh0ID0gbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0Q29tcG9uZW50KTtcclxuICAgICAgICByaWNoVGV4dC5zdHJpbmcgPSB0ZXh0O1xyXG5cclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbm9kZS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBsZXQgdWltID0gdGhpcztcclxuICAgICAgICBhbmltYXRpb24ub24oIFwic3RvcFwiICwgZnVuY3Rpb24gKCBzdGF0ZSApIHtcclxuICAgICAgICAgICAgdWltLm1UaXBzQXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgdGhpcy5tVGlwc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBlbGVtZW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvcy55ICs9IGVsZW1lbnQuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1UaXBzQXJyYXkucHVzaChub2RlKTtcclxuICAgIH1cclxuXHJcbn0iXX0=