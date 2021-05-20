import React, { useState } from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import './RemoveTrackModal.css';

function RemoveTrackModal({ playlist, track, show, onClose, onRemove }) {

    function removeTrackFromPlaylist() {
        onRemove(playlist.id , track.id);
        onClose();
    }

    return (
        <Modal className="m-remove-track" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Remove this track from playlist ?</Modal.Title>
                {/* {playlist.title ? {playlistName} : null} */}
            </Modal.Header>
            <Modal.Body>
                  {/* {trackName}  */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={removeTrackFromPlaylist}>Remove</Button>
      <Button variant="secondary" onClick={onClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RemoveTrackModal;