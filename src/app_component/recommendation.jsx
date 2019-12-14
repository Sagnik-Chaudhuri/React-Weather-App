import React, { Component } from "react";
import { Typography } from "@material-ui/core";
class Recommendation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Typography variant={"h5"} gutterBottom style={{ color: "#F5F5F5" }}>
        {this.props.value}
      </Typography>
    );
  }
}

export default Recommendation;
