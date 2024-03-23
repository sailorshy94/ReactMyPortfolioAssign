import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <>
      <section style={{
        padding: '20px'
      }}>
        <div>
          <Header />
        </div>
        <div class="container-fluid">
          <img src="./src/assets/challenge20avatarimg.png" alt="My picture" class="img-thumbnail"></img>
          <h1>About Me</h1>
          <body>
            <p></p>
            <p style={{fontSize: '20px'}}>
              Hi I'm Shy!! I am based in the state of NC. I am an emerging full-stack developer currently finishing a Bootcamp program. I enjoy learning about new advancements in the tech and programming world, and playing video games. Learning how to code and interacting with my fellow web devs has been a great experience so far. I like to express my creativity and working with others to solve problems! Let's be friends!
            </p>
          </body>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
}
