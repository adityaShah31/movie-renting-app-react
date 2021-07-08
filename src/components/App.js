import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ListingPage from '../pages/ListingPage';

import videoContext from '../context/VideoContext';

import '../assets/css/App.css';
import videoDb from '../data/videoDb.json';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //Call from fake API(s)
    //   fetch('/data/db.json')
    //     //   fetch('http://localhost:3000/videos')
    //     .then((res) => res.json())
    //     .then((json) => setVideos(json))
    //     .catch((err) => console.log(err));

    setVideos(videoDb.videos);
  }, []);

  return (
    <Router>
      <Switch>
        <videoContext.Provider value={{ videos, setVideos }}>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/listing'>
            <ListingPage />
          </Route>
        </videoContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
