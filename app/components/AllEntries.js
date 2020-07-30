import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class AllEntries extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadEntries();
  }

  render() {
    return <div>all entries</div>;
  }
}

const mapState = (state) => {
  return { entries: state.entries };
};
const mapDispatch = (dispatch) => {
  return { loadEntries: dispatch(fetchEntries()) };
};

export default connect(mapState, mapDispatch)(AllEntries);
