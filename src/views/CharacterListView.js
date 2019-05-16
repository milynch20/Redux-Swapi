import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetchCharacters} from "../actions";

class CharacterListView extends React.Component {


  componentDidMount() {
      // call our action
      this.props.dispatch(fetchCharacters())
  }


  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
        return <div>Loading Now...</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
      characters: state.charsReducer.characters,
      fetching: state.charsReducer.fetching,
      error: state.charsReducer.error
  }
}

export default connect(
    mapStateToProps
)(CharacterListView);