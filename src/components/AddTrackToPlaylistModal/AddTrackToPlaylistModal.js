import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './AddTrackToPlaylistModal.css';

function AddTrackToPlaylistModal({ playlists, trackAdd, show, onClose, onAddTrack }) {
    const [currPlaylist, setCurrPlaylist] = useState(null);

    function AddTrackToPlaylist() {
        if (currPlaylist) {
            onAddTrack(currPlaylist.id, trackAdd);
        }
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
                        <Form.Control as="select" custom value={currPlaylist} onChange={e => setCurrPlaylist(e.target.value)}>
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