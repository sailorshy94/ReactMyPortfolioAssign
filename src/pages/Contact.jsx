import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <section style={{
        padding: '20px'
      }}>
        <Header />
        <div className="container-fluid">
          <h1 style={{ paddingTop: '45px' }}>Contact Page</h1>
          <Form />
        </div>
        <Footer />
      </section>
    </>
  );
}
