import React from 'react';
import '../App.scss';
import Reactplayer from './Reactplayer';
import Song from './Song';
import {SongContext, SongsProvider} from './SongContext';
import {VideoContext, VideoProvider} from './VideoContext';
import {ChakraProvider, Box, Button} from '@chakra-ui/react';
import Playlists from './Playlists';
// import logo from './spotify.svg';
function App() {
  // const [data, setData] = React.useState(null);

  // // React.useEffect(() => {
  // //   fetch('/api')
  // //     .then((res) => {
  // //       console.log(res)
  // //       return res.json()
  // //     })
  // //     .then((data) => setData(data.message));
  // // }, []);

  // React.useEffect(async () => {
  //   const response1 = await fetch('/api');
  //   const response2 = await response1.json();
  //   const data = await response2;
  //   console.log(data.message);
  //   setData(data.message);
  // }, []);

  return (
    <ChakraProvider>
      <SongsProvider>
        <div className="wrapper">
          <div className="grid">
            <div className="header">
              <h1>Video Request Live</h1>
            </div>

            <div className="playlists">
              <Playlists />
            </div>

            <VideoProvider>
              <Reactplayer />
              <div className="searchbar"></div>
              <div className="songs">
                <Song />
              </div>
            </VideoProvider>

            <div className="footer"></div>
          </div>
        </div>
      </SongsProvider>
    </ChakraProvider>
  );
}

export default App;
