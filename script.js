const container = document.querySelector("#attention-container");

class  Notify {

constructor (content, type) {
    this.lifeTime = 5000;
    this.content = content;
    this.type = type;
    this.render();
}

createStart (){
    this.start = document.createElement("button");
    this.start.classList.add("button-start");
    this.start.innerHTML = "Start";
    this.start.addEventListener("click", this.hideNotify);
    return this.start;
}

createLine (){
  this.line = document.createElement("div");
  this.line.classList.add("line");
  return this.line;

}

hideNotify () {

}

render (){
    this.notify = document.createElement("div");
this.notify.classList.add("notify");
this.notify.innerHTML = this.content;
// this.notify.classList.add("");
container.append(this.notify);
this.notify.append(this.createStart());
this.notify.append(this.createLine());

    }

}

new Notify("Test");
new Notify("Test 2");

