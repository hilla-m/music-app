import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './AddTrackToPlaylistModal.css';

function AddTrackToPlaylistModal({ playlists, trackAdd, show, onClose, onAddTrack }) {
    const [currPlaylistName, setCurrPlaylistName] = useState(playlists[0]);

    function AddTrackToPlaylist() {
            const currPlaylist = playlists.find(pl => pl.title === currPlaylistName);
            onAddTrack(currPlaylist.id, trackAdd);
        onClose();
    }

    return (
        <Modal className="m-add-track" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add track to your playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Choose playlist</Form.Label>
                        <Form.Control as="select" custom value={currPlaylistName} onChange={e => setCurrPlaylistName(e.target.value)}>
                            {playlists.map(playlist => <option key={playlist.id} >{playlist.title}</option>)}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={AddTrackToPlaylist}>
                    Add
      </Button>

            </Modal.Footer>
        </Modal>
    );
}

export default AddTrackToPlaylistModal;