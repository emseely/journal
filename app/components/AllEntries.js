import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export class AllEntries extends React.Component{
  constructor(){
    super()

  }
  componentDidMount()

  render(){
    return(
      <div >

      </div>
    )
  }

}

const mapState =(state)=>{}
const mapDispatch = (dispatch) => {}

export default connect(mapState, mapDispatch)(AllEntries);
