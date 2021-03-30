import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    // this.props === { songs: state.songs }
    return (
      <div>
        SongList
      </div>
    );
  }
}

const mapStateToProps = (state) => { // This function name is a convention, but it can be called anything
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
