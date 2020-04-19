

let $h1 = document.querySelector('h1').innerHTML = "Blöö";
$h1.innerHTML = "Blah";

for (let i = 0; i < 10; i++) {
  // Create new element 
  let $myP = document.createElement('p');
  $myP.innerHTML = "Hello";
  //append sist, prepend först
  document.querySelector('body').append($myP);
}
function addPlease(appendTo = document.body) {
  let $h3 = document.createElement('h3').innerHTML = "Please hellö ";
  appendTo.append($h3);
}
addPlease();
addPlease();

new Game();