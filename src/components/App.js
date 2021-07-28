import React from "react";
import SearchBar from "./searchBar";
import youTube from "../apis/youTube";
class App extends React.Component {
  state = { videos: [] };
  onSearchBarTermSubmit = async (term) => {
    const responce = await youTube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: responce.data.items });
    console.log(responce.data.items);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchBarTermSubmit} />i have
        {this.state.videos.length} videos
      </div>
    );
  }
}
export default App;
