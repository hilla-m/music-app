import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import './NewPlaylistModal.css';

function NewPlaylistModal({ show, onClose, onCreate }) {
    const [playlistName , setPlaylistName] = useState("");

    function createPlaylist () {
        setPlaylistName("");
        onCreate(playlistName);
        onClose();
    }

    return (
        <Modal className="m-new-playlist" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add a new playlist</Modal.Title>
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
                <Button variant="secondary" onClick={createPlaylist}>
                    Add
          </Button>

            </Modal.Footer>
        </Modal>
    );
}

export default NewPlaylistModal;