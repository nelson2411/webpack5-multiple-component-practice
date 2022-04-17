import "./heading.scss";
class Heading {
  render(pageName) {
    const heading = document.createElement("h1");
    const body = document.querySelector("body");
    heading.innerHTML = "Webpack is awesome! This is " + pageName + " page";
    body.appendChild(heading);
  }
}
export default Heading;
