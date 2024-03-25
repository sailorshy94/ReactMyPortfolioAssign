// each proj one section w/:
// one image
// Project Title - highlights when hover, and changes color once clicked - takes user to the Deployed App
// if they click Repo then takes them to GH repo
// Language used - MERN stack, JS, etc.
// layout should be three on one side next to three others, or three across above three across

import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <>
      <section style={{
        padding: '20px'
      }}>
        <Header />
        <div className="container-fluid">
          <h1 style={{ paddingTop: '45px' }}>My Portfolio</h1>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <Project />
          </div>
          <div class="col-lg-6">
            <Project />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <Project />
          </div>
          <div class="col-lg-6">
            <Project />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <Project />
          </div>
          <div class="col-lg-6">
            <Project />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
