import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   this.setState({ message: 'Thank you!' });
  //   setTimeout(() => {
  //     this.setState({ message: '' });
  //   }, 3000);
  // }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="post" action="https://sendmail.w3layouts.com/SubmitContactForm">
          <input type="text" placeholder="Name" name="w3lName" id="w3lName"/>
          <input type="text" placeholder="Subject" name="w3lSubject" id="w3lSubject"/>
          <input type="text" placeholder="Message" name="w3lMessage" id="w3lMessage"/>
        <input
          type="email"
          name="w3lSender"
          id="w3lSender"
          placeholder="Email Address"
        />
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
