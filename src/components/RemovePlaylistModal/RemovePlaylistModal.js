import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './RemovePlaylistModal.css';

function RemovePlaylistModal({ playlist, show, onClose, onRemove }) {

    function removePlaylist() {
        onRemove(playlist.id);
        onClose();
    }

    return (
        <Modal className="m-remove-playlist" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete this playlist?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {playlist.title}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={removePlaylist}>Remove</Button>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RemovePlaylistModal;