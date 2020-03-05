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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dpbjEwL0dsYXNzQmFsbC9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3VpL1VJTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwibG9hZGVyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJSaWNoVGV4dENvbXBvbmVudCIsIkFuaW1hdGlvbkNvbXBvbmVudCIsImZpbmQiLCJWaWV3QmFzZSIsIlVJQWRhcHRvciIsIlVJTW9kdWxlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlNYW5hZ2VyIiwic0luc3RhbmNlIiwibVZpZXdTdGFjayIsIm1UaXBzQXJyYXkiLCJlbnRlck5ld1NjZW5lIiwic1NjZW5lIiwiTGF1bmNoU2NlbmUiLCJzY2VuZSIsIm1DdXJTY2VuZSIsIm1DdXJWaWV3IiwidWlSb290Iiwidmlld0luZm8iLCJjYWxsYmFjayIsInVpbSIsIkdldFNjZW5lTmFtZSIsInZpZXdOYW1lIiwiY2MiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFkZFZpZXdUb1NjZW5lIiwibG9hZFZpZXciLCJub2RlIiwidmlldyIsImFkZFZpZXciLCJwYXJhbSIsInBhdGgiLCJsb2FkUmVzIiwiZXJyb3IiLCJwcmVWaWV3IiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsIm9uT3BlbiIsIm9uQ29udmVydCIsInB1c2giLCJhZGRDaGlsZCIsIkFkYXB0VUkiLCJ0ZXh0Iiwic1ZpZXdzIiwiVGlwcyIsImFkZFRpcHMiLCJyaWNoVGV4dCIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJzdHJpbmciLCJhbmltYXRpb24iLCJvbiIsInN0YXRlIiwic2hpZnQiLCJkZXN0cm95IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwb3MiLCJnZXRQb3NpdGlvbiIsInkiLCJnZXRDb250ZW50U2l6ZSIsImhlaWdodCIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9B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QUksQ0FBQzJCLE9BQUw7QUFDSCxhQUhEO0FBSUEsaUJBQUs3QyxVQUFMLENBQWdCOEMsT0FBaEIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO0FBQy9CLGtCQUFJQyxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsV0FBUixFQUFWO0FBQ0FELGNBQUFBLEdBQUcsQ0FBQ0UsQ0FBSixJQUFTSCxPQUFPLENBQUNJLGNBQVIsR0FBeUJDLE1BQWxDO0FBQ0FMLGNBQUFBLE9BQU8sQ0FBQ00sV0FBUixDQUFvQkwsR0FBcEI7QUFDSCxhQUpEO0FBS0EsaUJBQUtoRCxVQUFMLENBQWdCK0IsSUFBaEIsQ0FBcUJiLElBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDQ09iamVjdCwgbG9hZGVyLCBQcmVmYWIsIHZpZXcsIGluc3RhbnRpYXRlLCBTcHJpdGVDb21wb25lbnQsTm9kZSwgUmljaFRleHRDb21wb25lbnQsIEFuaW1hdGlvbkNsaXAsIEFuaW1hdGlvbkNvbXBvbmVudCwgZmluZCB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgVmlld0Jhc2UgfSBmcm9tIFwiLi9WaWV3QmFzZVwiO1xuaW1wb3J0IHsgVUlBZGFwdG9yIH0gZnJvbSBcIi4vVUlBZGFwdFwiO1xuaW1wb3J0IHsgVUlNb2R1bGUgfSBmcm9tIFwiLi9VSU1vZHVsZVwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJVSU1hbmFnZXJcIilcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc0luc3RhbmNlOiBVSU1hbmFnZXI7XG5cbiAgICBwcml2YXRlIG1WaWV3U3RhY2sgPSBbXTtcbiAgICBwcml2YXRlIG1UaXBzQXJyYXkgPSBbXTtcblxuICAgIHByaXZhdGUgbUN1clZpZXcgOiBWaWV3QmFzZTtcbiAgICBwcml2YXRlIHVpUm9vdCA6IE5vZGU7XG4gICAgcHJpdmF0ZSBtQ3VyU2NlbmUgOiBzdHJpbmc7XG4gICAgXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkgOiBVSU1hbmFnZXIge1xuICAgICAgICBpZiAodGhpcy5zSW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zSW5zdGFuY2UgPSBuZXcgVUlNYW5hZ2VyKCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmVudGVyTmV3U2NlbmUoVUlNb2R1bGUuc1NjZW5lLkxhdW5jaFNjZW5lKVxuICAgIH1cblxuICAgIHB1YmxpYyBlbnRlck5ld1NjZW5lKCBzY2VuZSA6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1DdXJTY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLm1WaWV3U3RhY2sgPSBbXTtcbiAgICAgICAgdGhpcy5tQ3VyVmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMudWlSb290ID0gZmluZChcIlJvb3RcIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5WaWV3KCB2aWV3SW5mbyA6IGFueSAsIGNhbGxiYWNrIDogYW55ID0gbnVsbCApIHtcbiAgICAgICAgbGV0IHVpbSA9IHRoaXM7XG4gICAgICAgIGxldCBzY2VuZSA9IFVJTW9kdWxlLkdldFNjZW5lTmFtZSggdmlld0luZm8udmlld05hbWUgKTtcbiAgICAgICAgaWYgKHRoaXMubUN1clNjZW5lICE9IHNjZW5lKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1aW0uZW50ZXJOZXdTY2VuZShzY2VuZSk7XG4gICAgICAgICAgICAgICAgdWltLmFkZFZpZXdUb1NjZW5lKHZpZXdJbmZvLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVmlld1RvU2NlbmUoIHZpZXdJbmZvLCBjYWxsYmFjayApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRWaWV3VG9TY2VuZSggdmlld0luZm8gOiBhbnkgLCBjYWxsYmFjayA6IGFueSA9IG51bGwgICkge1xuICAgICAgICBsZXQgdWltID0gdGhpcztcbiAgICAgICAgdGhpcy5sb2FkVmlldyggdmlld0luZm8udmlld05hbWUsIGZ1bmN0aW9uICggbm9kZSA6IE5vZGUgKSB7XG4gICAgICAgICAgICBsZXQgdmlldyA9IHVpbS5hZGRWaWV3KCBub2RlLCB2aWV3SW5mby5wYXJhbSApO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGxvYWRWaWV3KCBwYXRoIDogYW55ICwgY2FsbGJhY2s6IGFueSApIHtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXMoIHBhdGgsIFByZWZhYiwgZnVuY3Rpb24gKCBlcnJvciwgcHJlVmlldyA6IFByZWZhYiApIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaW5zdGFudGlhdGUocHJlVmlldykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRWaWV3KCBub2RlIDogTm9kZSwgcGFyYW0gOiBhbnlbXSApIDogVmlld0Jhc2Uge1xuICAgICAgICBjb25zdCB2aWV3ICA9IG5vZGUuZ2V0Q29tcG9uZW50KFZpZXdCYXNlKTtcbiAgICAgICAgdmlldy5vbk9wZW4ocGFyYW0pO1xuICAgICAgICBpZiAodGhpcy5tQ3VyVmlldykge1xuICAgICAgICAgICAgdGhpcy5tQ3VyVmlldy5vbkNvbnZlcnQodmlldyk7XG4gICAgICAgICAgICB0aGlzLm1WaWV3U3RhY2sucHVzaCh0aGlzLm1DdXJWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1DdXJWaWV3ID0gdmlldztcbiAgICAgICAgdGhpcy51aVJvb3QuYWRkQ2hpbGQoIG5vZGUgKTtcbiAgICAgICAgVUlBZGFwdG9yLkFkYXB0VUkobm9kZSk7XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VGlwcyggdGV4dCA6IGFueSApIHtcbiAgICAgICAgbGV0IHVpbSA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9hZFZpZXcoIFVJTW9kdWxlLnNWaWV3cy5UaXBzLCBmdW5jdGlvbiAoIG5vZGUgOiBOb2RlICkge1xuICAgICAgICAgICAgdWltLmFkZFRpcHMobm9kZSwgdGV4dCk7XG4gICAgICAgIH0gKVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVGlwcyggbm9kZSA6IE5vZGUsIHRleHQgOiBhbnkgICkge1xuICAgICAgICB0aGlzLnVpUm9vdC5hZGRDaGlsZCggbm9kZSApO1xuICAgICAgICBsZXQgcmljaFRleHQgPSBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oUmljaFRleHRDb21wb25lbnQpO1xuICAgICAgICByaWNoVGV4dC5zdHJpbmcgPSB0ZXh0O1xuXG4gICAgICAgIGxldCBhbmltYXRpb24gPSBub2RlLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xuICAgICAgICBsZXQgdWltID0gdGhpcztcbiAgICAgICAgYW5pbWF0aW9uLm9uKCBcInN0b3BcIiAsIGZ1bmN0aW9uICggc3RhdGUgKSB7XG4gICAgICAgICAgICB1aW0ubVRpcHNBcnJheS5zaGlmdCgpO1xuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gKVxuICAgICAgICB0aGlzLm1UaXBzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBlbGVtZW50LmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBwb3MueSArPSBlbGVtZW50LmdldENvbnRlbnRTaXplKCkuaGVpZ2h0O1xuICAgICAgICAgICAgZWxlbWVudC5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tVGlwc0FycmF5LnB1c2gobm9kZSk7XG4gICAgfVxuXG59Il19