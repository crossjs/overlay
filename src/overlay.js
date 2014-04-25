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
      x: 0.5,
      y: 0.5
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
    // 对话框显示隐藏时的动画效果
    effect: 'fade',
    offset: {
      x: 0,
      y: 0
    },
    selfXY: {
      // 对话框相对于原点位置的位移像素值
      x: 0.5,
      y: 0.5
    }
    // 浮动层触发点
    // trigger: null
  },

  setup: function () {
    var self = this;

    // element
    self.element
      .attr({
        tabIndex: -1
      })
      .css({
        visibility: 'hidden'
      });

    self.option('trigger') || self.render();
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
   * 显示对话框
   *
   * @method show
   */
  show: function () {
    Overlay.EFFECT[this.option('effect')].show.call(this);

    /**
     * 通知显示
     *
     * @event show
     * @param {Object} e Event.
     */
    this.fire('show');

    return this;
  },

  /**
   * 隐藏对话框
   *
   * @method hide
   */
  hide: function () {
    Overlay.EFFECT[this.option('effect')].hide.call(this);

    /**
     * 通知隐藏
     *
     * @event hide
     * @param {Object} e Event.
     */
    this.fire('hide');

    return this;
  },

  render: function () {
    var self = this;

    Overlay.superclass.render.apply(self);

    // 设置位置
    self.setPosition();

    self.element.css({
      visibility: 'visible'
    });

    return self;
  }

});

// Overlay.STATE = {
//   INITIAL: -1,
//   READY: 0,
//   VISIBLE: 1,
//   HIDDEN: 2
// };

Overlay.EFFECT = {

  none: {
    show: function () {
      this.element.show();
    },
    hide: function () {
      this.element.hide();
    }
  },

  // 对话框显示隐藏时的动画效果
  fade: {
    show: function () {
      this.element.fadeIn(200, function () {
        $(this).show();
      });
    },
    hide: function () {
      this.element.fadeOut(200, function () {
        $(this).hide();
      });
    }
  }
};

module.exports = Overlay;

});
