/**
 * Generate an randomly Paul `<img/>` on your web page.
 *
 * By default the function create an click event on the document element, if you want generate an img on click on a diferent element you should define the first argument, the DOM Element musy be inside the `<body>` tag.
 *
 * If friend argument is not specified we'll use the picture of my friend Paul :) but if want add some friends you can add an array of img path as second argument.
 *
 * @param {HTMLElement} [DOMElement] The DOM Element where you want attach the click event.
 * @param {Array} [friend] An array of `<img/>` path.
 */
function Paul(DOMElement = document, friend = []) {
  if (DOMElement !== document) {
    if (!(DOMElement instanceof HTMLElement)) {
      throw new Error(
        `The first argument must be an HTML Element, you've enter this ${typeof DOMElement}`
      );
    }
  }

  if (!Array.isArray(friend)) {
    throw new Error(`The second argument must be an Array !`);
  } else {
    friend.forEach((item, index) => {
      if (typeof item !== "string")
        throw new Error(
          `Your friend array should only include string, at ${index} you've enter an ${typeof item}`
        );
    });
  }

  const paulImg =
    friend.length !== 0
      ? friend
      : [
          "./umd/static/paul-plaisir.png",
          "./umd/static/paul-with-beer.jpg",
          "./umd/static/paul-capuche.png",
          "./umd/static/paul-happy.png",
          "./umd/static/paul-knacky.png",
          "./umd/static/paul-masque.png",
          "./umd/static/paul-nounours.png",
          "./umd/static/paul-zoom.png"
        ];

  DOMElement.addEventListener("click", () => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const imgRandom = Math.round(Math.random() * (paulImg.length - 1));

    div.classList.add("Paul");
    div.style = `top: ${Math.round(Math.random() * 100)}%; left: ${Math.round(
      Math.random() * 100
    )}%;`;

    img.src = paulImg[imgRandom];
    img.style = `transform: rotate(${Math.round(Math.random() * 100)}deg);`;

    div.appendChild(img);
    document.querySelector("body").appendChild(div);
  });
}
