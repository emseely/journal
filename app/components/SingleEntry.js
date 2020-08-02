import React from "react";
import { connect } from "react-redux";

class SingleEntry extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>hi</div>;
  }
}

export default connect(null, null)(SingleEntry);
