import React from "react";
import { connect } from "react-redux";
import { fetchSingleEntry } from "../redux/singleEntry";

class SingleEntry extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    try {
      this.props.loadEntry(this.props.match.params.id);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const entry = this.props.entry;
    if (!entry.id) {
      return <div>Not found!</div>;
    }
    return <div>{entry.title}</div>;
  }
}

const mapState = (state) => {
  return { entry: state.entry };
};

const mapDispatch = (dispatch) => {
  return { loadEntry: (id) => dispatch(fetchSingleEntry(id)) };
};
export default connect(mapState, mapDispatch)(SingleEntry);
