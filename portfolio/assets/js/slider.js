// const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
// const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

// class DragScroll {
//   constructor(obj) {
//     this.$el = document.querySelector(obj.el);
//     this.$wrap = this.$el.querySelector(obj.wrap);
//     this.$items = this.$el.querySelectorAll(obj.item);
//     this.init();
//   }

//   init() {
//     this.progress = 0;
//     this.speed = 0;
//     this.oldX = 0;
//     this.x = 0;
//     this.playrate = 0;
//     this.bindings();
//     this.events();
//     this.calculate();
//     this.raf();
//   }

//   bindings() {
//     [
//       "events",
//       "calculate",
//       "raf",
//       "move",
//       "raf",
//       "handleTouchStart",
//       "handleTouchMove",
//       "handleTouchEnd",
//     ].forEach((i) => {
//       this[i] = this[i].bind(this);
//     });
//   }

//   calculate() {
//     this.progress = 0;
//     this.wrapWidth = this.$items[0].clientWidth * this.$items.length;
//     this.$wrap.style.width = `${this.wrapWidth}px`;
//     this.maxScroll = this.wrapWidth - this.$el.clientWidth;
//   }

//   handleTouchStart(e) {
//     e.preventDefault();
//     this.dragging = true;
//     this.startX = e.clientX || e.touches[0].clientX;
//     this.$el.classList.add("dragging");
//   }

//   handleTouchMove(e) {
//     if (!this.dragging) return false;
//     const x = e.clientX || e.touches[0].clientX;
//     this.progress += (this.startX - x) * 2.5;
//     this.startX = x;
//     this.move();
//   }

//   handleTouchEnd() {
//     this.dragging = false;
//     this.$el.classList.remove("dragging");
//   }

//   move() {

//     if(matchMedia("screen and (min-width:1500px)").matches){
//       this.progress = clamp(this.progress, -700, this.maxScroll);
//       this.maxScroll = clamp(this.progress, +700, this.maxScroll);
//     } else {
//       this.progress = clamp(this.progress, -250, this.maxScroll);
//       this.maxScroll = clamp(this.progress, +250, this.maxScroll);
//     }
//   }

//   events() {
//     window.addEventListener("resize", this.calculate);

//     this.$el.addEventListener("touchstart", this.handleTouchStart);
//     window.addEventListener("touchmove", this.handleTouchMove);
//     window.addEventListener("touchend", this.handleTouchEnd);

//     window.addEventListener("mousedown", this.handleTouchStart);
//     window.addEventListener("mousemove", this.handleTouchMove);
//     window.addEventListener("mouseup", this.handleTouchEnd);
//     document.body.addEventListener("mouseleave", this.handleTouchEnd);
//   }

//   raf() {

//     this.x = lerp(this.x, this.progress, 0.1);
//     this.playrate = this.x / this.maxScroll;

//     this.$wrap.style.transform = `translateX(${-this.x}px)`;

//     this.speed = Math.min(100, this.oldX - this.x);
//     this.oldX = this.x;

//     this.scale = lerp(this.scale, this.speed, 0.1);
//     this.$items.forEach((i) => {
//       i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`;
//       i.querySelector("img").style.transform = `scaleX(${
//         1 + Math.abs(this.speed) * 0.004
//       })`;
//     });
//   }
// }

// const scroll = new DragScroll({
//   el: ".carousel",
//   wrap: ".carousel--wrap",
//   item: ".carousel--item",

// });

// const raf = () => {
//   requestAnimationFrame(raf);
//   scroll.raf();
// };
// raf();

function _getClosest(item, array, getDiff) {
  var closest, diff;

  if (!Array.isArray(array)) {
    throw new Error("Get closest expects an array as second argument");
  }

  array.forEach(function (comparedItem, comparedItemIndex) {
    var thisDiff = getDiff(comparedItem, item);

    if (thisDiff >= 0 && (typeof diff == "undefined" || thisDiff < diff)) {
      diff = thisDiff;
      closest = comparedItemIndex;
    }
  });

  return closest;
}

function number(item, array) {
  return _getClosest(item, array, function (comparedItem, item) {
    return Math.abs(comparedItem - item);
  });
}

function lerp(a, b, n) {return (1 - n) * a + n * b;}

class Slider {
  constructor(options = {}) {
    this.bind();

    this.opts = {
      el: options.el || ".js-slider",
      ease: options.ease || 0.1,
      speed: options.speed || 1.5,
      velocity: 25,
      scroll: options.scroll || false,
    };

    this.slider = document.querySelector(".js-slider");
    this.sliderInner = this.slider.querySelector(".js-slider__inner");
    this.slides = [...this.slider.querySelectorAll(".js-slide")];
    this.slidesNumb = this.slides.length;

    this.rAF = undefined;

    this.sliderWidth = 0;

    this.onX = 0;
    this.offX = 0;

    this.currentX = 0;
    this.lastX = 0;

    this.min = 1000;
    this.max = 0;

    this.centerX = window.innerWidth / 2;
  }

  bind() {
    ["setPos", "run", "on", "off", "resize"].forEach(
      (fn) => (this[fn] = this[fn].bind(this))
    );
  }

  setBounds() {
    const bounds = this.slides[0].getBoundingClientRect();
    const slideWidth = bounds.width - 1;

    this.sliderWidth = this.slidesNumb * slideWidth;
    this.max = -(this.sliderWidth + window.innerWidth);

    this.slides.forEach((slide, index) => {
      slide.style.left = `${-600 +  index * slideWidth}px`;
    });
  
  }

  setPos(e) {
    if (!this.isDragging) return;
    this.currentX = this.offX + (e.clientX - this.onX) * this.opts.speed;
    this.clamp();
  }

  clamp() {
    this.currentX = Math.max(Math.min(this.currentX, this.min), this.max);
  }

  run() {
    this.lastX = lerp(this.lastX, this.currentX, this.opts.ease);
    this.lastX = Math.floor(this.lastX * 100) / 100;

    const sd = this.currentX - this.lastX;
    const acc = sd / window.innerWidth;
    let velo = +acc;

    this.sliderInner.style.transform = `translate3d(${
      this.lastX
    }px, 0, 0) skewX(${velo * this.opts.velocity}deg)`;

    this.requestAnimationFrame();
  }

  on(e) {
    this.isDragging = true;
    this.onX = e.clientX;
    this.slider.classList.add("is-grabbing");
  }

  off(e) {
    this.snap();
    this.isDragging = false;
    this.offX = this.currentX;
    this.slider.classList.remove("is-grabbing");
  }

  closest() {
    const numbers = [];
    this.slides.forEach((slide, index) => {
      const bounds = slide.getBoundingClientRect();
      const diff = this.currentX - this.lastX;
      const center = bounds.x + diff + bounds.width / 2;
      const fromCenter = this.centerX - center;
      numbers.push(fromCenter);
    });

    let closest = number(0, numbers);
    closest = numbers[closest];

    return {
      closest,
    };
  }

  snap() {
    const { closest } = this.closest();

    this.currentX = this.currentX + closest;
    this.clamp();
  }

  requestAnimationFrame() {
    this.rAF = requestAnimationFrame(this.run);
  }

  cancelAnimationFrame() {
    cancelAnimationFrame(this.rAF);
  }

  addEvents() {
    this.run();

    this.slider.addEventListener("mousemove", this.setPos, {
      passive: true,
    });
    this.slider.addEventListener("mousedown", this.on, false);
    this.slider.addEventListener("mouseup", this.off, false);

    window.addEventListener("resize", this.resize, false);
  }

  removeEvents() {
    this.cancelAnimationFrame(this.rAF);

    this.slider.removeEventListener("mousemove", this.setPos, {
      passive: true,
    });
    this.slider.removeEventListener("mousedown", this.on, false);
    this.slider.removeEventListener("mouseup", this.off, false);
  }

  resize() {
    this.setBounds();
  }

  destroy() {
    this.removeEvents();

    this.opts = {};
  }

  init() {
    this.setBounds();
    this.addEvents();
  }
}

const slider = new Slider();
slider.init();
