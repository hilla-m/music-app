import React, { useState } from 'react';
import { ListGroup, Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegHeart } from 'react-icons/fa';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import NewPlaylistModal from '../../components/NewPlaylistModal/NewPlaylistModal';
import PlaylistPage from '../PlaylistPage/PlaylistPage';
import './AllPlaylistsPage.css';

function AllPlaylistsPage({ activeUser, playlists, onAddPlaylist }) {
    const [showNewPlaylistModal , setShowNewPlaylistModal] = useState(false);

    if (!activeUser) {
        return <Redirect to="/" />
    }

    const userPlaylists = playlists.filter(playlist => playlist.userId === activeUser.id);

    //playlist num
    let i = 1;

    return (
        <div className="p-all-playlists">
            {/* <div className="row"> */}
                <FaPlusCircle className="plus-icon" onClick={() => setShowNewPlaylistModal(true)}/>
                <h1>My Playlists</h1>
            {/* </div> */}
            {userPlaylists.length > 0 ?
                <div className="playlists-tbl">
                    <Table striped bordered hover size="sm" variant="dark">
                        <tbody>
                            {userPlaylists.map(playlist =>
                                <tr>
                                    <td>{i++}</td>
                                    <td><Link to={"/playlist/" + playlist.id} className="playlist-link">{playlist.title}</Link></td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
                : null}
                <NewPlaylistModal show={showNewPlaylistModal} onClose={() => setShowNewPlaylistModal(false)} onCreate={onAddPlaylist} />
        </div>
    );
}

export default AllPlaylistsPage;