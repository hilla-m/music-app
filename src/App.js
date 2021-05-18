import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import AllPlaylistsPage from './pages/AllPlaylistsPage/AllPlaylistsPage';
import ArtistPage from './pages/ArtistPage/ArtistPage';
import FavoriteAlbumsPage from './pages/FavoriteAlbumsPage/FavoriteAlbumsPage';
import FavoriteArtistsPage from './pages/FavoriteArtistsPage/FavoriteArtistsPage';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';
import SearchingPage from './pages/SearchingPage/SearchingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyMusicNavbar from './components/MyMusicNavbar/MyMusicNavbar';
import { useState } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import './App.css';
import usersJSON from './data/users.json';
import albumsJSON from './data/albums.json';
import artistsJSON from './data/artists.json';
import tracksJSON from './data/tracks.json';
import playlistsJSON from './data/playlists.json';
import UserModel from './model/UserModel';
import AlbumModel from './model/AlbumModel';
import ArtistModel from './model/ArtistModel';
import TrackModel from './model/TrackModel';
import PlaylistModel from './model/PlaylistModel';
import { useEffect } from 'react';


function App() {
  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState(users[0]);

  const[albums, setAlbums] = useState(albumsJSON.map(plainAlbum => new AlbumModel(plainAlbum)));
  const[artists, setArtists] = useState(artistsJSON.map(plainArtist => new ArtistModel(plainArtist)));
  const[tracks, setTracks] = useState(tracksJSON.map(plainTrack => new TrackModel(plainTrack)));
  const[playlists, setPlaylists] = useState(playlistsJSON.map(plainPlaylist => new PlaylistModel (plainPlaylist)));


  function addUser(name, email, password){
    const newUser = new UserModel ({id: users[users.length-1].id+1, name, email, password});
    setUsers(users.concat(newUser));
    setActiveUser(newUser);
  }

  function handlePlayTrack(id, value) {
    const tempTracks = [...tracks];
    tempTracks.map(track => { if (track.id === id) { track.play = value } else {track.play = false}});
    setTracks(tempTracks);
  }

  function addPlaylist(playlistName) {
    const newPlaylist = new PlaylistModel({
      id: playlists[playlists.length-1].id +1,
      title: playlistName,
      userId: activeUser.id
    });

    setPlaylists(playlists.concat(newPlaylist));
  }
  return (
    <>
    <MyMusicNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><LandingPage/></Route>
          <Route exact path="/home"><HomePage activeUser={activeUser} albums={albums} artists={artists}/></Route>
          <Route exact path="/login"><LoginPage users={users} onLogin={user => setActiveUser(user)} activeUser={activeUser}/></Route>
          <Route exact path="/signup"><SignupPage addUser={addUser} activeUser={activeUser}/></Route>
          <Route exact path="/album/:index"><AlbumPage activeUser={activeUser} albums={albums} tracks={tracks} artists={artists} handlePlayTrack={handlePlayTrack}/></Route>
          <Route exact path="/search"><SearchingPage activeUser={activeUser}/></Route>
          <Route exact path="/artist/:index"><ArtistPage activeUser={activeUser} albums={albums} artists={artists}/></Route>
          <Route exact path="/all-playlists"><AllPlaylistsPage activeUser={activeUser} playlists={playlists} onAddPlaylist={addPlaylist}/></Route>
          <Route exact path="/playlist/:index"><PlaylistPage activeUser={activeUser}  playlists={playlists} tracks={tracks} handlePlayTrack={handlePlayTrack}/></Route>
          <Route exact path="/artists"><FavoriteArtistsPage activeUser={activeUser}/></Route>
          <Route exact path="/albums"><FavoriteAlbumsPage activeUser={activeUser}/></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
