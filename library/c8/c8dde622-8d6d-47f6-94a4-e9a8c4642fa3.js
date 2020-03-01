System.register(["cc", "code-quality:cr", "./ViewBase.js", "./UIAdapt.js", "./UIModule.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, loader, Prefab, instantiate, RichTextComponent, AnimationComponent, ViewBase, UIAdaptor, UIModule, _dec, _class, _temp, _crd, ccclass, property, UIManager;

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
        }

        _createClass(UIManager, [{
          key: "setUIRoot",
          value: function setUIRoot(root) {
            this.uiRoot = root;
          }
        }, {
          key: "openView",
          value: function openView(viewInfo) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9HbGFzc0JhbGwvR2xhc3NCYWxsL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvdWkvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJsb2FkZXIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlJpY2hUZXh0Q29tcG9uZW50IiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiVmlld0Jhc2UiLCJVSUFkYXB0b3IiLCJVSU1vZHVsZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlVJTWFuYWdlciIsInNJbnN0YW5jZSIsIm1WaWV3U3RhY2siLCJtVGlwc0FycmF5Iiwicm9vdCIsInVpUm9vdCIsInZpZXdJbmZvIiwiY2FsbGJhY2siLCJ1aW0iLCJsb2FkVmlldyIsInZpZXdOYW1lIiwibm9kZSIsInZpZXciLCJhZGRWaWV3IiwicGFyYW0iLCJwYXRoIiwibG9hZFJlcyIsImVycm9yIiwicHJlVmlldyIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21wb25lbnQiLCJvbk9wZW4iLCJtQ3VyVmlldyIsIm9uQ29udmVydCIsInB1c2giLCJhZGRDaGlsZCIsIkFkYXB0VUkiLCJ0ZXh0Iiwic1ZpZXdzIiwiVGlwcyIsImFkZFRpcHMiLCJyaWNoVGV4dCIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJzdHJpbmciLCJhbmltYXRpb24iLCJvbiIsInN0YXRlIiwic2hpZnQiLCJkZXN0cm95IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJwb3MiLCJnZXRQb3NpdGlvbiIsInkiLCJnZXRDb250ZW50U2l6ZSIsImhlaWdodCIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBc0JDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxNLE9BQUFBLE07QUFBY0MsTUFBQUEsVyxPQUFBQSxXO0FBQW1DQyxNQUFBQSxpQixPQUFB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R3hCLElBQUksQ0FBQ1UsWUFBTCxDQUFrQjNCLGtCQUFsQixDQUFoQjtBQUNBLGdCQUFJYyxHQUFHLEdBQUcsSUFBVjtBQUNBMkIsWUFBQUEsU0FBUyxDQUFDQyxFQUFWLENBQWMsTUFBZCxFQUF1QixVQUFXQyxLQUFYLEVBQW1CO0FBQ3RDN0IsY0FBQUEsR0FBRyxDQUFDTCxVQUFKLENBQWVtQyxLQUFmO0FBQ0EzQixjQUFBQSxJQUFJLENBQUM0QixPQUFMO0FBQ0gsYUFIRDtBQUlBLGlCQUFLcEMsVUFBTCxDQUFnQnFDLE9BQWhCLENBQXdCLFVBQUFDLE9BQU8sRUFBSTtBQUMvQixrQkFBSUMsR0FBRyxHQUFHRCxPQUFPLENBQUNFLFdBQVIsRUFBVjtBQUNBRCxjQUFBQSxHQUFHLENBQUNFLENBQUosSUFBU0gsT0FBTyxDQUFDSSxjQUFSLEdBQXlCQyxNQUFsQztBQUNBTCxjQUFBQSxPQUFPLENBQUNNLFdBQVIsQ0FBb0JMLEdBQXBCO0FBQ0gsYUFKRDtBQUtBLGlCQUFLdkMsVUFBTCxDQUFnQnNCLElBQWhCLENBQXFCZCxJQUFyQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ0NPYmplY3QsIGxvYWRlciwgUHJlZmFiLCB2aWV3LCBpbnN0YW50aWF0ZSwgU3ByaXRlQ29tcG9uZW50LE5vZGUsIFJpY2hUZXh0Q29tcG9uZW50LCBBbmltYXRpb25DbGlwLCBBbmltYXRpb25Db21wb25lbnQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgVmlld0Jhc2UgfSBmcm9tIFwiLi9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBVSUFkYXB0b3IgfSBmcm9tIFwiLi9VSUFkYXB0XCI7XHJcbmltcG9ydCB7IFVJTW9kdWxlIH0gZnJvbSBcIi4vVUlNb2R1bGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiVUlNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNJbnN0YW5jZTogVUlNYW5hZ2VyO1xyXG5cclxuICAgIHByaXZhdGUgbVZpZXdTdGFjayA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtVGlwc0FycmF5ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBtQ3VyVmlldyA6IFZpZXdCYXNlO1xyXG4gICAgcHJpdmF0ZSB1aVJvb3QgOiBOb2RlO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSA6IFVJTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuc0luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zSW5zdGFuY2UgPSBuZXcgVUlNYW5hZ2VyKCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VUlSb290KCByb290IDogTm9kZSApIHtcclxuICAgICAgICB0aGlzLnVpUm9vdCA9IHJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5WaWV3KCB2aWV3SW5mbyA6IGFueSAsIGNhbGxiYWNrIDogYW55ID0gbnVsbCApIHtcclxuICAgICAgICBsZXQgdWltID0gdGhpcztcclxuICAgICAgICB0aGlzLmxvYWRWaWV3KCB2aWV3SW5mby52aWV3TmFtZSwgZnVuY3Rpb24gKCBub2RlIDogTm9kZSApIHtcclxuICAgICAgICAgICAgbGV0IHZpZXcgPSB1aW0uYWRkVmlldyggbm9kZSwgdmlld0luZm8ucGFyYW0gKTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2aWV3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGxvYWRWaWV3KCBwYXRoIDogYW55ICwgY2FsbGJhY2s6IGFueSApIHtcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyggcGF0aCwgUHJlZmFiLCBmdW5jdGlvbiAoIGVycm9yLCBwcmVWaWV3IDogUHJlZmFiICkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGluc3RhbnRpYXRlKHByZVZpZXcpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFZpZXcoIG5vZGUgOiBOb2RlLCBwYXJhbSA6IGFueVtdICkgOiBWaWV3QmFzZSB7XHJcbiAgICAgICAgY29uc3QgdmlldyAgPSBub2RlLmdldENvbXBvbmVudChWaWV3QmFzZSk7XHJcbiAgICAgICAgdmlldy5vbk9wZW4ocGFyYW0pO1xyXG4gICAgICAgIGlmICh0aGlzLm1DdXJWaWV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMubUN1clZpZXcub25Db252ZXJ0KHZpZXcpO1xyXG4gICAgICAgICAgICB0aGlzLm1WaWV3U3RhY2sucHVzaCh0aGlzLm1DdXJWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tQ3VyVmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy51aVJvb3QuYWRkQ2hpbGQoIG5vZGUgKTtcclxuICAgICAgICBVSUFkYXB0b3IuQWRhcHRVSShub2RlKTtcclxuICAgICAgICByZXR1cm4gdmlldztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RpcHMoIHRleHQgOiBhbnkgKSB7XHJcbiAgICAgICAgbGV0IHVpbSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2FkVmlldyggVUlNb2R1bGUuc1ZpZXdzLlRpcHMsIGZ1bmN0aW9uICggbm9kZSA6IE5vZGUgKSB7XHJcbiAgICAgICAgICAgIHVpbS5hZGRUaXBzKG5vZGUsIHRleHQpO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVGlwcyggbm9kZSA6IE5vZGUsIHRleHQgOiBhbnkgICkge1xyXG4gICAgICAgIHRoaXMudWlSb290LmFkZENoaWxkKCBub2RlICk7XHJcbiAgICAgICAgbGV0IHJpY2hUZXh0ID0gbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFJpY2hUZXh0Q29tcG9uZW50KTtcclxuICAgICAgICByaWNoVGV4dC5zdHJpbmcgPSB0ZXh0O1xyXG5cclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbm9kZS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBsZXQgdWltID0gdGhpcztcclxuICAgICAgICBhbmltYXRpb24ub24oIFwic3RvcFwiICwgZnVuY3Rpb24gKCBzdGF0ZSApIHtcclxuICAgICAgICAgICAgdWltLm1UaXBzQXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSApXHJcbiAgICAgICAgdGhpcy5tVGlwc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBlbGVtZW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvcy55ICs9IGVsZW1lbnQuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1UaXBzQXJyYXkucHVzaChub2RlKTtcclxuICAgIH1cclxuXHJcbn0iXX0=