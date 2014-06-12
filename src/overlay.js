define(function (require, exports, module) {

/**
 * 浮动层
 * @module Overlay
 */

'use strict';

var $ = require('$'),
  Widget = require('widget');

/**
 * Overlay
 *
 * @class Overlay
 * @constructor
 */
var Overlay = Widget.extend({

  defaults: {
    // baseElement: null,
    // 原点及位置
    baseXY: {
      x: 0,
      y: 0
    },
    // 样式前缀
    classPrefix: 'ue-overlay',
    css: {
      height: 'auto',
      position: 'absolute',
      width: 'auto',
      zIndex: 901
    },
    // 事件代理
    // delegates: { },
    // 浮动层显示隐藏时的动画效果
    effect: 'fade',
    offset: {
      // 位置偏移，像素值
      x: 0,
      y: 0
    },
    selfXY: {
      x: 0,
      y: 0
    }
    // 浮动层触发点
    // trigger: null
  },

  setup: function () {
    this.element
      .attr({
        tabIndex: -1
      })
      .css({
        visibility: 'hidden'
      });

    this.render();
  },

  /**
   * 设定位置（left 与 top）
   *
   * @method setPosition
   */
  setPosition: function () {
    var self = this,
      baseElement = $(self.option('baseElement') || self.viewport),
      baseXY = self.option('baseXY'),
      selfElement = self.element,
      selfXY = self.option('selfXY'),
      fixed = self.option('css/position') === 'fixed',
      baseOffset = baseElement.offset() || { left: 0, top: 0 },
      offset = self.option('offset'),
      left = baseOffset.left + baseElement.outerWidth() * baseXY.x -
        selfElement.outerWidth() * selfXY.x +
        (fixed ? 0 : baseElement.scrollLeft()) + offset.x,
      top = baseOffset.top + baseElement.outerHeight() * baseXY.y -
        selfElement.outerHeight() * selfXY.y +
        (fixed ? 0 : baseElement.scrollTop()) + offset.y;

    selfElement.css({
        left: Math.max(left, 0),
        top: Math.max(top, 0)
      });

    return self;
  },

  /**
   * 显示浮动层
   *
   * @method show
   */
  show: function () {
    Overlay.EFFECTS[this.option('effect')].show
        .call(this, Overlay.superclass.show);

    /**
     * 通知显示
     *
     * @event show
     * @param {Object} e Event.
     */
    // this.fire('show');

    return this;
  },

  /**
   * 隐藏浮动层
   *
   * @method hide
   */
  hide: function () {
    Overlay.EFFECTS[this.option('effect')].hide
        .call(this, Overlay.superclass.hide);

    /**
     * 通知隐藏
     *
     * @event hide
     * @param {Object} e Event.
     */
    // this.fire('hide');

    return this;
  },

  render: function () {
    var self = this;

    Overlay.superclass.render.apply(self);

    // 设置位置
    self.setPosition();

    // window.setTimeout(function () {
      self.element.css({
        display: 'none',
        visibility: 'visible'
      });
    // }, 0);

    !self.option('trigger') && self.show();

    return self;
  }

});

// Overlay.STATE = {
//   INITIAL: -1,
//   READY: 0,
//   VISIBLE: 1,
//   HIDDEN: 2
// };

Overlay.EFFECTS = {

  none: {
    show: function (callback) {
      // this.element.show();
      callback.call(this);
    },
    hide: function (callback) {
      // this.element.hide();
      callback.call(this);
    }
  },

  // 浮动层显示隐藏时的动画效果
  fade: {
    show: function (callback) {
      var self = this;
      self.element.fadeIn(200, function () {
        callback.call(self);
      });
    },
    hide: function (callback) {
      var self = this;
      self.element.fadeOut(200, function () {
        callback.call(self);
      });
    }
  }
};

module.exports = Overlay;

});
