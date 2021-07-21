import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChanged = (event) => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="feild">
            <label>video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChanged}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
