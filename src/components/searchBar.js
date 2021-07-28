import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChanged = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmitted = (Event) => {
    Event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmitted} className="ui form">
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
