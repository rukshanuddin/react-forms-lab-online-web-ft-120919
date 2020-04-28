import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charCount = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               onChange={this.handleChange}
               value={this.state.message} />
        <span> {charCount} characters left</span>
      </div>
    );
  }
}

export default TwitterMessage;
