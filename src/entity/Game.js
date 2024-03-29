class Game {
  constructor(canvas, elements) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.elements = elements;
  }

  update() {
    this.elements.forEach(i => {
      i.update();
    });
  }

  render() {
    this.elements.forEach(i => {
      i.render(this.ctx);
    });
  }

  runLoop() {
    this.update();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.render();
    requestAnimationFrame(this.runLoop.bind(this));
  }
}