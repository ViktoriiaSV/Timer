const container = document.querySelector("#container");

class Timer {

    constructor(content, type) {
        this.lifeTime = 10000;
        this.content = content;
        this.render();
    }

    createStart() {
        this.start = document.createElement("button");
        this.start.classList.add("button-start");
        this.start.innerHTML = "Start";
        this.start.addEventListener("click", this.hideNotify);
        return this.start;
    }

    createLine() {
        this.line = document.createElement("div");
        this.line.classList.add("line");
        return this.line;
    }

    pauseInterval () {
clearInterval(this.interval);
    }

    continueInterval () {
this.lifeInterval();
    }

    lifeInterval() {
        this.interval = setInterval(() => {
            const currentWidth = this.line.offsetWidth;
            const percent = (this.width / 100);
            if (currentWidth - percent < 0) {
              this.hideLine();
return;
            }
            this.line.style.width = `${currentWidth - percent}px`;
        }, 100);
    }

    hideLine() {
        setTimeout( () => {
            this.line.remove();
        },300)
    }

    render() {
        this.timer = document.createElement("div");
        this.timer.classList.add("timer");
        this.timer.innerHTML = this.content;
        container.append(this.timer);
        this.timer.append(this.createStart());
        this.timer.append(this.createLine());
        container.append(this.timer);
        this.timer.addEventListener("mouseenter", this.pauseInterval.bind(this));
        this.timer.addEventListener("mouseleave", this.continueInterval.bind(this));
        this.width = this.line.offsetWidth;
        this.lifeInterval();

    }

}

new Timer("Test");
new Timer("Test 2");

