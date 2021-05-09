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
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useState } from 'react';


function App() {
  // const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  // const [recipes, setRecipes] = useState(recipesJSON.map(plainRecipe => new RecipeModel(plainRecipe)));
  const [activeUser, setActiveUser] = useState(null);   //(users[0]);
 
  return (
    <>
    <MyMusicNavbar activeUser={activeUser}/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><LandingPage/></Route>
          <Route exact path="/home"><HomePage/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/signup"><Signup/></Route>
          <Route exact path="/album"><AlbumPage/></Route>
          <Route exact path="/search"><SearchingPage/></Route>
          <Route exact path="/artist"><ArtistPage/></Route>
          <Route exact path="/all-playlists"><AllPlaylistsPage/></Route>
          <Route exact path="/playlist"><PlaylistPage/></Route>
          <Route exact path="/artists"><FavoriteArtistsPage/></Route>
          <Route exact path="/albums"><FavoriteAlbumsPage/></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
