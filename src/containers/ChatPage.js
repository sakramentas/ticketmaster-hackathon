import React from 'react';
var Template = require("html-loader!../chat.html");


const ChatPage = (props) => {

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: Template }}/>
    </div>
  );
};

export default ChatPage;
