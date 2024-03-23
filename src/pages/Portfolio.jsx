// TODO: this page will have a Project component that will be used 6 times to create the sections in Portfolio page

// each proj one section w/:
// one image
// Project Title - highlights when hover, and changes color once clicked - takes user to the Deployed App
// if they click Repo then takes them to GH repo
// Language used - MERN stack, JS, etc.
// layout should be three on one side next to three others, or three across above three across

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <>
      <section style={{
        padding: '20px'
      }}>
        <Header />
        <div className="container-fluid">
          <h1 style={{paddingTop: '45px'}}>Portfolio Page</h1>
        </div>
        <Footer />
      </section>
    </>
  );
}
