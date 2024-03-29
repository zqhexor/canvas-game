const init = () => {
  const canvas = document.getElementById("id-canvas");
  if (!canvas.getContext) {
    console.log('浏览器不支持canvas')
  }

  const bird = new Bird(0, 0, 50, 50, 1);
  const game = new Game(canvas, [bird]);
  game.runLoop();
}

init();
