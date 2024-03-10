import React from 'react';
import './App.css';
import video from './video/rocketNew.mp4'
import MenuBar from './component/MenuBar';
import MyBot from './component/MyBot';

// Video component
const Video = () => (
  <div className="video-container">
     <div className="overlay">
      <h1 className="video-heading1">SciAstra</h1>
      <h1 className="video-heading2">For the love of science</h1>
    </div>
  
    <video autoPlay loop muted className="fullscreen-video">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);




// App component
const App = () => {
  return (
    <div className='App'>
    <MenuBar />
      <Video />
      <MyBot />
    </div>
  );
};

export default App;
