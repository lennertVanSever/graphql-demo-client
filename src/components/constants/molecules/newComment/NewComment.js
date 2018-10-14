import React, { Component } from 'react';

class NewComment extends Component {
  render() {
    return (
      <form className="newComment">
        <input 
            type="text"
            placeholder="What do you think?" 
            name="new comment" 
        />
        <input type="submit" value="comment" />
      </form>
    );
  }
}

export default NewComment;
