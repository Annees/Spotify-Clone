import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  // const[token, setToken] = useState(null); // rather then using like this now we are using it through dataLayer
  const [{ user, token }, dispatch] = useDataLayerValue();


  //Run code based on the given condition
  useEffect(() => {
    const hash= getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {
      
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })
      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        // console.log("User ME Anees", user);

        dispatch({
          type:"SET_USER",
          user: user,
        })
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcW9RnshvQSrH").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

    }
    console.log("I HAVE A TOKEN>>>", token);
  }, []);

  console.log("MY User-->>", user);
  console.log("My token would be ", token);
  // console.log("My Playlist ", playlists);

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
