let html = prompt("Are you aware of HTML(Yes/No)").toLowerCase() === "yes";
let css = prompt("Are you aware of CSS(Yes/No)").toLowerCase() === "yes";
let bootstrap =
  prompt("Are you aware of BOOTSTRAP(Yes/No)").toLowerCase() === "yes";
let js = prompt("Are you aware of JS(Yes/No)").toLowerCase() === "yes";
let react = prompt("Are you aware of REACT(Yes/No)").toLowerCase() === "yes";
let node = prompt("Are you aware of NODE(Yes/No)").toLowerCase() === "yes";
result =
  html && css && bootstrap && !js && !react && !node
    ? "you can became UI,UX Designer"
    : html && css && bootstrap && js && react && !node
    ? "You can become a FrontEnd Developer"
    : html && css && bootstrap && js && !react && node
    ? "You can become a Backend Developer"
    : html && css && bootstrap && js && react && node
    ? "You can become a Fullstack Developer"
    : "You Want To Learn This Skills, Join 10000Coders";
alert(result);