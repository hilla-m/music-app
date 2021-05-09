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
import UserModel from './model/UserModel';


function App() {
  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));

  const [activeUser, setActiveUser] = useState(users[0]);
 
  return (
    <>
    <MyMusicNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><LandingPage activeUser={activeUser}/></Route>
          <Route exact path="/home"><HomePage activeUser={activeUser}/></Route>
          <Route exact path="/login"><LoginPage users={users}/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
          <Route exact path="/album"><AlbumPage activeUser={activeUser}/></Route>
          <Route exact path="/search"><SearchingPage activeUser={activeUser}/></Route>
          <Route exact path="/artist"><ArtistPage activeUser={activeUser}/></Route>
          <Route exact path="/all-playlists"><AllPlaylistsPage activeUser={activeUser}/></Route>
          <Route exact path="/playlist"><PlaylistPage activeUser={activeUser}/></Route>
          <Route exact path="/artists"><FavoriteArtistsPage activeUser={activeUser}/></Route>
          <Route exact path="/albums"><FavoriteAlbumsPage activeUser={activeUser}/></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
