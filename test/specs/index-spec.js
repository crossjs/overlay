var Overlay = require('../../src');
var $ = require('jquery');

function top (e, out) {
  e || (e = $(document));
  var o = e.offset() || {left:0,top:0};
  return o.top - (out ? 100 : 0);
}

function middle (e, out) {
  e || (e = $(document));
  var o = e.offset() || {left:0,top:0};
  return o.top + e.outerHeight() / 2 - 50;
}

function bottom (e, out) {
  e || (e = $(document));
  var o = e.offset() || {left:0,top:0};
  return o.top + e.outerHeight() - 100 + (out ? 100 : 0);
}

function left (e, out) {
  e || (e = $(document));
  var o = e.offset() || {left:0,top:0};
  return o.left - (out ? 100 : 0);
}

function center (e, out) {
  e || (e = $(document));
  var o = e.offset() || {left:0,top:0};
  return o.left + e.outerWidth() / 2 - 50;
}

function right (e, out) {
  e || (e = $(document));
  var o = e.offset() || {left:0,top:0};
  return o.left + e.outerWidth() - 100 + (out ? 100 : 0);
}

describe('overlay', function() {
  var baseElement
  before(function() {
    baseElement = $('<div/>').css({
      width: 200,
      height: 200,
      border: '5px solid red',
      top: 300,
      left: 600,
      position: 'absolute',
      zIndex: 900
    }).appendTo('body');
    document.body.style.height = '1300px';
    document.body.style.overflow = 'scroll';
  });

  it('topleft', function() {
    // topleft
    var overlay = new Overlay({
      baseXY: { x: 0, y: 0},
      selfXY: { x: 0, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
        left: left(),
        top: top()
      });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topcenter', function() {
    // topcenter
    var overlay = new Overlay({
      baseXY: { x: 0.5, y: 0},
      selfXY: { x: 0.5, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(),
      top: top()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topright', function() {
    // topright
    var overlay = new Overlay({
      baseXY: { x: 1, y: 0},
      selfXY: { x: 1, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(),
      top: top()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middleleft', function() {
    // middleleft
    var overlay = new Overlay({
      baseXY: { x: 0, y: 0.5},
      selfXY: { x: 0, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: left(),
      top: middle()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middlecenter', function() {
    // middlecenter
    var overlay = new Overlay({
      baseXY: { x: 0.5, y: 0.5},
      selfXY: { x: 0.5, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(),
      top: middle()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middleright', function() {
    // middleright
    var overlay = new Overlay({
      baseXY: { x: 1, y: 0.5},
      selfXY: { x: 1, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(),
      top: middle()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomleft', function() {
    // bottomleft
    var overlay = new Overlay({
      baseXY: { x: 0, y: 1},
      selfXY: { x: 0, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: left(),
      top: bottom()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomcenter', function() {
    // bottomcenter
    var overlay = new Overlay({
      baseXY: { x: 0.5, y: 1},
      selfXY: { x: 0.5, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(),
      top: bottom()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomright', function() {
    // bottomright
    var overlay = new Overlay({
      baseXY: { x: 1, y: 1},
      selfXY: { x: 1, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(),
      top: bottom()
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topleft', function() {
    // topleft
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0, y: 0},
      selfXY: { x: 0, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
        left: left(baseElement),
        top: top(baseElement)
      });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topcenter', function() {
    // topcenter
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0.5, y: 0},
      selfXY: { x: 0.5, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(baseElement),
      top: top(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topright', function() {
    // topright
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 1, y: 0},
      selfXY: { x: 1, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(baseElement),
      top: top(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middleleft', function() {
    // middleleft
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0, y: 0.5},
      selfXY: { x: 0, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: left(baseElement),
      top: middle(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middlecenter', function() {
    // middlecenter
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0.5, y: 0.5},
      selfXY: { x: 0.5, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(baseElement),
      top: middle(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middleright', function() {
    // middleright
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 1, y: 0.5},
      selfXY: { x: 1, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(baseElement),
      top: middle(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomleft', function() {
    // bottomleft
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0, y: 1},
      selfXY: { x: 0, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: left(baseElement),
      top: bottom(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomcenter', function() {
    // bottomcenter
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0.5, y: 1},
      selfXY: { x: 0.5, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(baseElement),
      top: bottom(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomright', function() {
    // bottomright
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 1, y: 1},
      selfXY: { x: 1, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(baseElement),
      top: bottom(baseElement)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topleft bottomright', function() {
    // topleft
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0, y: 0},
      selfXY: { x: 1, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
        left: left(baseElement, true),
        top: top(baseElement, true)
      });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topcenter bottomcenter', function() {
    // topcenter
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0.5, y: 0},
      selfXY: { x: 0.5, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(baseElement, true),
      top: top(baseElement, true)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('topright bottomleft', function() {
    // topright
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 1, y: 0},
      selfXY: { x: 0, y: 1},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(baseElement, true),
      top: top(baseElement, true)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middleleft middleright', function() {
    // middleleft
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0, y: 0.5},
      selfXY: { x: 1, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: left(baseElement, true),
      top: middle(baseElement, true)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('middleright middleleft', function() {
    // middleright
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 1, y: 0.5},
      selfXY: { x: 0, y: 0.5},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(baseElement, true),
      top: middle(baseElement, true)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomleft topright', function() {
    // bottomleft
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0, y: 1},
      selfXY: { x: 1, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: left(baseElement, true),
      top: bottom(baseElement, true)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomcenter topcenter', function() {
    // bottomcenter
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 0.5, y: 1},
      selfXY: { x: 0.5, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: center(baseElement, true),
      top: bottom(baseElement, true)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('bottomright topleft', function() {
    // bottomright
    var overlay = new Overlay({
      baseElement: baseElement,
      baseXY: { x: 1, y: 1},
      selfXY: { x: 0, y: 0},
      css: {
        background: 'rgba(0, 255, 0, 0.8)',
        width: 100,
        height: 100
      }
    });

    expect( overlay.$().offset()).to.eql({
      left: right(baseElement, true),
      top: bottom(baseElement, true)
    });

    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('show/hide/effect/none', function() {
    var overlay = new Overlay({
        css: {
          background: 'rgba(0, 255, 0, 0.8)',
          width: 1,
          height: 1
        },
        effect: 'none'
      });
    overlay.hide();
    expect(overlay.is(':hidden')).to.be.ok();
    overlay.show();
    expect(overlay.is(':visible')).to.be.ok();
    setTimeout(function () {
      overlay.destroy();
    }, 1000);
  });

  it('show/hide', function() {
    var overlay = new Overlay({
        css: {
          background: 'rgba(0, 255, 0, 0.8)',
          width: 1,
          height: 1
        }
      });
    overlay.hide();
    setTimeout(function () {
      expect(overlay.is(':hidden')).to.be.ok();
      overlay.show();
      setTimeout(function () {
        expect(overlay.is(':visible')).to.be.ok();
        setTimeout(function () {
          overlay.destroy();
        }, 1000);
        baseElement.remove();
        start();
      }, 1000);
    }, 1000);
  });


});
