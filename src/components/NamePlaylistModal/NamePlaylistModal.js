import React, { useState } from 'react';
import { Row, Col, Form, Modal, Button } from 'react-bootstrap';
import './NamePlaylistModal.css';

function NamePlaylistModal({ playlist , show, onClose ,onEdit }) {
    const [playlistName , setPlaylistName] = useState("");

     function editPlaylist () {
        setPlaylistName("");
        onEdit(playlist.id , playlistName);
        onClose();
    }

    return (
        <Modal className="m-name-playlist" show={show} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Rename playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row} controlId="formPlaylistTitle">
                    <Form.Label column sm={3}>
                        Playlist name
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" value={playlistName} onChange={e => setPlaylistName(e.target.value)}/>
                    </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={editPlaylist}>
                Save
      </Button>

        </Modal.Footer>
    </Modal>
    );
}

export default NamePlaylistModal;