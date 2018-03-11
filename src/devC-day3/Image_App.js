import React, { Component } from "react";
import Image from "./Image";
import axios from "axios";

class ImageApp extends Component {
  constructor() {
    super();

    this.state = {
      image: null,
      imageArr: [],
      loading: false,
      loadingArr: false,
    }

    this.getImage = this.getImage.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    this.setState({
      loading: true
    });

    axios.get("http://www.splashbase.co/api/v1/images/random")
      .then((response) => {
        // set image data to state
        this.setState({
          image: response.data.url,
          loading: false
        });
      });
  }

  addImage() {
    this.setState({
      loadingArr: true
    });

    axios.get("http://www.splashbase.co/api/v1/images/random")
      .then((response) => {
        // set image data to state
        this.setState({
          imageArr: [...this.state.imageArr, response.data.url],
          loadingArr: false
        });
      });
  }

  render() {
    return (
      <div>
        <div><button onClick={this.getImage}>Change Image!</button></div>
        <Image imageUrl={this.state.image} loading={this.state.loading} />
        <div><button onClick={this.addImage}>Add Image!</button></div>
        <div>{this.state.imageArr.map((url) => {return (<Image imageUrl={url} loading={this.state.loadingArr} />)})}</div>
      </div>
    );
  }
}

export default ImageApp;
