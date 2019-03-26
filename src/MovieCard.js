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
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <ReactModal
                    closeTimeoutMS={1000}
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    style={{
                      overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                      },
                      content: {
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        right: '40px',
                        bottom: '40px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'hidden',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0',
                        backgroundColor: 'black'
                      }
                    }}
                  >
                    <YouTube
                      video={
                        this.state.TrailerResult[0]
                          ? this.state.TrailerResult[0].key
                          : "h6hZkvrFIj0"
                      }
                      autoplay
                      width="100%"
                      height="100%"
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
