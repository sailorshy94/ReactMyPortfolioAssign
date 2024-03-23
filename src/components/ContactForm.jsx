 {/* TODO:
          {/* if name, email or msg left blank and user moves cursor away = notification at bottom below that says "this field is req" */}
          {/* if email not valid, notif = "entered invalid email address" */}


function Form() {
    // const handleBlur = (event) => {
    //     if (event.target === ) {
    //         console.log('event!!')
    //     }
    //   };
    //  onBlur={handleBlur}
    return (
        <form style={{fontSize: '23px'}}>
            <div class="form-group">
                <label for="nameInput">Name:</label>
                <input type="name" class="form-control" placeholder="Your Name" />
            </div>
            <div class="form-group">
                <label for="emailInput">Email:</label>
                <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group">
                <label for="msgInput">Message:</label>
                <textarea class="form-control" rows="3" placeholder="Thoughts, questions, ideas? Contact Me :)" ></textarea>
            </div>
            {/* using empty p tag as a way to create space btw button and textbox */}
            <p></p> 
            <button type="submit" className="btn btn-info">Submit</button>
        </form>
    );
}

export default Form;
