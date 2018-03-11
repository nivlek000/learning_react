import React from "react";
  var loading = true;

const Image = (props) => {
  if (loading && props.loading) {
    return <h2>Loading...</h2>
  } else {
    return <span>
      <img width='200px' height='200px' src={props.imageUrl} alt='' />
    </span>
  }
};

export default Image;
