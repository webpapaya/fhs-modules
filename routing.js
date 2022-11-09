export function setUpLinks() {
  Array.from(document.querySelectorAll("a")).forEach(() => {
    document.addEventListener("click", (evt) => {
      const pathname = new URL(window.location).pathname;
      evt.preventDefault();
      history.pushState({ id: 1 }, null, evt.target.href);
      onRouteChange();
    });
  });
}

export function onRouteChange() {
  const pathname = new URL(window.location).pathname;
  const domElement = document.querySelector("#content");
  const link = document.createElement("a");
  const lineBreak = document.createElement("br");

  if (pathname === "/") {
    link.setAttribute("href", "/quiz");
    link.innerHTML += "Quiz";
    domElement.innerHTML = "Start Quiz";
  } else if (pathname === "/quiz") {
    link.setAttribute("href", "/result");
    link.innerHTML += "Result";
    domElement.innerHTML = "Quiz question";
  } else if (pathname === "/result") {
    link.setAttribute("href", "/");
    link.innerHTML += "Back to Homescreen";
    domElement.innerHTML = "Quiz Result";
  } else {
    link.setAttribute("href", "/");
    link.innerHTML += "Back to Homescreen";
    domElement.innerHTML = "404 - Nothing found";
  }
  domElement.appendChild(lineBreak);
  domElement.appendChild(link);
}
