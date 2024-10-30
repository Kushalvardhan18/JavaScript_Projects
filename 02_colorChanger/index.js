const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


const title = document.querySelector('h1');
const heading = document.querySelector('h2');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // if(e.target.id === 'grey'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'white'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'blue'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'yellow'){
    //     body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        title.style.color = "white";
        heading.style.color = "white";
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        title.style.color = "black";
        heading.style.color = "black";
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        title.style.color = "white";
        heading.style.color = "white";
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        title.style.color = "black";
        heading.style.color = "black";
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
        title.style.color = "white";
        heading.style.color = "white";
        break;

      default:
        break;
    }
  });
});
