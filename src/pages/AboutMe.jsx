// TODO: add Header(Nav nested)
// <p></p> short para abt dev

// import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <><div className="container">
      {/* <div><Header /></div> */}
      <h1>About Me</h1>
      <img src="./src/assets/challenge20avatarimg.png" alt="My picture" class="img-thumbnail"></img>
      <p>
        Hi I'm Shy!! I am an emerging full-stack developer currently finishing a Bootcamp program. I enjoy... 
      </p>
    </div><div><Footer /></div></>
  );
}
