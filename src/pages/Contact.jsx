export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Page</h1>
      {/* TODO: page layout = contact form with fields: name, email, and message  */}
      {/* if name, email or msg left blank and user moves cursor away = notification at bottom below that says "this field is req" */}
      {/* if email not valid, notif = "entered invalid email address" */}
      <form>
        <div class="form-group">
          <label for="nameInput">Name:</label>
          <input type="name" class="form-control" id="nameInput" placeholder="Your Name" />
        </div>
        <div class="form-group">
          <label for="emailInput">Email:</label>
          <input type="email" class="form-control" id="emailInput" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="msgInput">Message:</label>
          <textarea class="form-control" rows="3" id="textarea" placeholder="Thoughts, questions, ideas? Contact Me :)"></textarea>
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
      </form>
    </div>
  );
}
