import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_details';

const API_KEY = 'AIzaSyDNGg40XaHxDSEm7f7ItegaJdkSKp8oao8';


export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        videos: [],
        selectedVideo : null
    };
    this.videoSearch('friends');

  }

  videoSearch(term){
      YTsearch({ key: API_KEY, term: term }, (videos) => {
          this.setState({
              videos:videos,
              selectedVideo: videos[0]
          });

      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange = { term => this.videoSearch(term) }/>
        <VideoDetail video = { this.state.selectedVideo }/>
        <VideoList
            onVideoSelect  = { selectedVideo => this.setState({ selectedVideo })}
            videos = { this.state.videos}
        />
      </div>
    );
  }
}
