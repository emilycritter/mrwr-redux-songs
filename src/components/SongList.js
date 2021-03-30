import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {

    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// This is called anytime the state is updated
const mapStateToProps = (state) => { // This function name is a convention, but it can be called anything
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);
