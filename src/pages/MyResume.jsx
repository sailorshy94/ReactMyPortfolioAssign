import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyResume() {
  return (
    <>
      <section style={{
        padding: '20px'
      }}>
        <Header />
        <div className="container-fluid">
          <h1 style={{ paddingTop: '40px' }}>My Resume</h1>
          {/* the word "resume" should be highlighted and change colors when hover/click, link to LinkedIn */}
          <p style={{ fontSize: '20px' }}><em>Click to download my <a href='https://www.linkedin.com/in/shyla-butler-851bb5143' target='blank'><mark>resume</mark></a>.</em></p>
          <body>
            <h3>Front-end Proficiencies</h3>
            <ul style={{ fontSize: '20px' }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul style={{ fontSize: '20px' }}>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
            </ul>
          </body>
        </div>
      </section>
      <Footer />
    </>
  );
}
