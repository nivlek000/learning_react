import React, { Component } from "react";
import Gallery from "./Gallery";
import Details from "./Details";
import { getAllData, getData, objectDefaults } from './utils';



class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      album: null,
      viewDetails: null,
      showLargeImage: false,
      showInputFields: false,
      likes: objectDefaults(1, 12)
    }
  }

  componentDidMount() {
    getAllData().then(album => this.setState(() => ({ album })))
  }

  handleLikeClick = (id) => {
    this.setState((prevState) => ({
      likes: {...prevState.likes, [id]: prevState.likes[id] + 1 }
    }));
  }

  handleCommentClick = () => {
    this.setState((prevState) => ({ showInputFields: !prevState.showInputFields }));
  }

  handleViewClick = (id) => {
    getData(id).then(details => this.setState(() => ({
      viewDetails: details,
      showLargeImage: true,
    })));
  }

  handleBackClick = () => {
    this.setState(() => ({ showLargeImage: false, showInputFields: false }));
  }

  render() {
    return (
      <div>
        <Gallery
          handleViewClick={this.handleViewClick}
          handleLikeClick={this.handleLikeClick}
          likes={this.state.likes}
          album={this.state.album} />
        {this.state.showLargeImage &&
          <Details
            likes={this.state.likes}
            imageDetails={this.state.viewDetails}
            handleBackClick={this.handleBackClick}
            handleLikeClick={this.handleLikeClick}
            handleCommentClick={this.handleCommentClick}
            showInputFields={this.state.showInputFields} />}
      </div>
    );
  }
}

export default PhotoGallery;
