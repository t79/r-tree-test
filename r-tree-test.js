document.addEventListener('readystatechange', function () {
    if (document.readyState === 'interactive') {
        GAMEr.setup();
    }
});

class GAMEr {

    static gameCanvasElm;
    static gameContext;

    static setup() {
        this.gameCanvasElm = document.getElementById("game-canvas");
        this.gameContext = this.gameCanvasElm.getContext("2d");
        const box = this.gameCanvasElm.getBoundingClientRect();
        this.gameContext.canvas.width = box.width;
        this.gameContext.canvas.height = box.height;

        //this.gameCanvasElm.addEventListener("", resizeCanvas);

        window.onresize = this.resizeCanvas;

        this.Draw();

    }

    static Draw() {
        const width = this.gameContext.canvas.width;
        this.gameContext.font = "10px Arial";
        this.gameContext.fillText("Game Score: " + width, 5, 15);
    }

    static resizeCanvas(e) {
        const box = GAMEr.gameCanvasElm.getBoundingClientRect();
        GAMEr.gameContext.canvas.width = box.width;
        GAMEr.gameContext.canvas.height = box.height;
        GAMEr.Draw();
    }
}

class RPoint {
    constructor(x, y) {
        this.x = x; // float
        this.y = y; // float
    }
}

class RRect {
    constructor(lowLeft, highRight) {
        this.lowLeft = lowLeft; // RPoint
        this.highRight = highRight; // RPoint
    }
}

class RNode {
    constructor(level) {
        this.level = level // "int" leaf = 0 else branch
        this.entries = [] // <RRect, RNode bransh or leaf>
    }
    set entry({rect, node}) {
        this.entries.push({rect, node});
    }
}