// TODO: add Header(Nav nested) and Footer comp
// TODO: page layout
// h1 - About Me
// dev photo/avatar below
// <p></p> short para abt dev

// import Header from "../components/Header";

export default function AboutMe() {
  return (
    <div className="container">
      {/* <div><Header /></div> */}
      <h1>About Me</h1>
      <img src="./src/assets/avatar.png" alt="My picture" class="img-thumbnail"></img>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
