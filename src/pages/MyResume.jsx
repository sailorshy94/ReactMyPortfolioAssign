// TODO: import Header(Nav nested) and Footer components

export default function MyResume() {
  return (
    <div className="container">
      <h1>My Resume</h1>
      {/* the word "resume" should be highlighted and change colors when hover/click, link to LinkedIn */}
      <p><em>Click to download my <mark>resume</mark>.</em></p>
      <body>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
          <li>HTML</li>
        </ul>
      </body>
    </div>
  );
}
