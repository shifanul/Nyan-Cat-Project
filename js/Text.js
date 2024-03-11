// This class is not used in the project yet.
class Text {
  // The constructor has three parameters. Here is an example of how you would create
  // an instance of this class
  constructor(root, xPos, yPos) {
    // We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
    // set the \`domElement\` property of the instance to the newly created DOM element so we can update it later
    const scoreDiv = document.createElement("div");
    const score = document.createElement("span");

    scoreDiv.style.position = "absolute";
    scoreDiv.style.left = xPos;
    scoreDiv.style.top = yPos;
    scoreDiv.style.color = "yellow";
    scoreDiv.style.font = "bold 30px Impact";
    scoreDiv.style.zIndex = 2000;

    scoreDiv.innerText = "Score : ";

    scoreDiv.appendChild(score);
    root.appendChild(scoreDiv);

    this.spanElement = score;
    this.count = -3;
  }

  // This method is used to update the text displayed in the DOM element
  update() {
    console.log("updated");
    this.count++;
    this.spanElement.innerText = `${this.count}`;
  }
}
