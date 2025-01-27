let html = prompt("are you aware of html(yes/no)") . toLowercase() === "yes";
let css = prompt("are you aware of css(yes/no)") . toLowercase() === "yes";
let boothcamp = prompt("are you aware of boothcamp(yes/no)") . tolowercase() === "yes";
let js = prompt("are you aware of js(yes/no)") . toLowercase() === "yes";
let react = prompt("are you aware of react(yes/no)") . toLowercase() === "yes";
let node = prompt("are you aware of node(yes/no)") . toLowercase() === "yes";
result=
         html && css && boothcamp && !js && !node && !react 
         ? "you can became UI,UX Designer"
        :  html && css && boothcamp && !js && !node && !react 
        ? "you can became Frontend Developer"
        :  html && css && boothcamp && !js && !node && !react
        ? "you can become Backend developer"
        :  html && css && boothcamp && !js && !node && !react
        ? "you can become Full Stack Developer"
        : "You Want To Learn This Skills, Join 10000Coders";
        alert(result)