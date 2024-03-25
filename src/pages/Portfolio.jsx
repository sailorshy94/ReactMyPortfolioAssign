// TODO: this page will have a Project component that will be used 6 times to create the sections in Portfolio page

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
          <h1 style={{ paddingTop: '45px' }}>My Portfolio</h1>
        </div>
        <Footer />
      </section>
    </>
  );
}
