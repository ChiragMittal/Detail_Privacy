import React from 'react';
import { Glyphicon } from 'react-bootstrap'
// import * as userAPI from '../../../APIs/user'
import SinglePost from './post'

// Flux product view
class MultiPost extends React.Component {

  // Render product View
  render() {
    //var fav ={this.props.post.destination_categories}
    var multipost = this.props.posts;

    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-multi-post">
        <ul>
          {multipost.map(function (value, index) {
            return (<SinglePost post={value} />)
          })}
        </ul>
      </div>
    );
  }


};

module.exports = MultiPost;