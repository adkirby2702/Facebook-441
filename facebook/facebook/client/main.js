import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Post_Access} from './../imports/api/user_posts.js';
import {Reply_Access} from './../imports/api/user_replies.js';
import App from './../imports/ui/App.js';
Meteor.startup(() =>  {
  Tracker.autorun(() => {
    let allStatusInDB = Post_Access.find({},{sort: {date:-1}}).fetch();
    let title = 'FaceBook';
    ReactDOM.render(<App
        passedTitle={title}
        passedAllStatus={allStatusInDB}
      />, document.getElementById('content'));
  });

});
