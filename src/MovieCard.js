import React, { Component } from "react";
import ReactModal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

import YouTube from "@u-wave/react-youtube";

export default class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TrailerResult: [],
      showModal: false,
      VideoId: ""
      // VideoKey:[]
    };
  }

  getMoviesSpecs = async () => {
    const API_KEY = "b2c1160c5fb292502b2d762fc2485fd3";
    const URL = `https://api.themoviedb.org/3/movie/${
      this.props.id
    }/videos?api_key=${API_KEY}&language=en-US`;

    let response = await fetch(URL);
    let data = await response.json();
    let result = data.results;

    this.setState({
      // VideoID: result.id,
      TrailerResult: result
    });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
    this.getMoviesSpecs();
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    // if (this.state.TrailerResult) {
    //   let videoKey = this.state.TrailerResult.map(item =>
    //     item.key
    //   );
    // }
    console.log(this.props.id);
    console.log(this.state.TrailerResult);

    const BASE_URL = "https://image.tmdb.org/t/p/w500";

    return (
      <div className="col-md-3 mb-5 movie-card">
        <div className="card">
          <img
            className="card-img-top"
            src={BASE_URL + this.props.posterUrl}
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <span className="d-flex justify-content-between">
              <span>
                <p>
                  <small>Year</small>
                </p>
                <p>
                  <strong>{this.props.year.substring(0, 4)}</strong>
                </p>
              </span>
              <span>
                <p>
                  <small>Rating</small>
                </p>
                <p>
                  <strong>{this.props.rating}</strong>
                </p>
              </span>
            </span>
          </div>
          <div className="card-footer text-center">
            <button onClick={this.handleShowModal}> TRAILER </button>
            <div
              class="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <ReactModal
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                  >
                    <h1>Helloo</h1>
                    <YouTube
                      video={
                        this.state.TrailerResult[0]
                          ? this.state.TrailerResult[0].key
                          : "h6hZkvrFIj0"
                      }
                      autoplay
                    />
                  </ReactModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
