import React from "react";
import SearchBar from "./searchBar";
import youTube from "../apis/youTube";
import VideoList from "./videoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchBarTermSubmit = async (term) => {
    const responce = await youTube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: responce.data.items });
    console.log(responce.data.items);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchBarTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
