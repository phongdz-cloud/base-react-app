import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // desctructuring array/object
    const { age, name } = this.props;
    // props => viết tắt property
    return (
      <div>
        <div>My name's {age}</div>
        <div>My age's {name}</div>
      </div>
    );
  }
}

export default DisplayInfo;
