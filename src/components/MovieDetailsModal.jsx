import { Modal, Button, Row, Col, Badge, Spinner, Stack } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../services/api';
import { Clock, Calendar, Star, Users, Globe } from 'lucide-react';

const MovieDetailsModal = ({ movie, loading, show, onHide }) => {
  const posterUrl = movie?.poster_path 
    ? `${IMAGE_BASE_URL}${movie.poster_path}` 
    : 'https://placehold.co/500x750?text=No+Poster';

  return (
    <Modal show={show} onHide={onHide} size="lg" centered contentClassName="modal-content">
      <Modal.Header closeButton closeVariant="white" className="border-secondary">
        <Modal.Title className="fw-bold text-warning">
            {movie?.title}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="py-4">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <>
            <Row>
              <Col md={5} className="mb-3 mb-md-0 text-center">
                <img 
                  src={posterUrl} 
                  alt={movie?.title} 
                  className="img-fluid rounded-3 shadow-lg border border-secondary"
                  style={{ maxHeight: '450px' }}
                />
              </Col>
              
              <Col md={7}>
                {movie?.tagline && <p className="text-warning fst-italic opacity-75 mb-3">"{movie.tagline}"</p>}
                
                <Stack direction="horizontal" gap={2} className="mb-3 flex-wrap">
                  {movie?.genres?.map(g => (
                    <Badge key={g.id} pill bg="secondary" className="fw-normal">{g.name}</Badge>
                  ))}
                </Stack>

                <div className="d-flex gap-4 mb-4 text-light opacity-75 small">
                  <span className="d-flex align-items-center gap-1"><Star size={16} className="text-warning" fill="currentColor"/> {movie?.vote_average?.toFixed(1)}</span>
                  <span className="d-flex align-items-center gap-1"><Clock size={16} /> {movie?.runtime} min</span>
                  <span className="d-flex align-items-center gap-1"><Calendar size={16} /> {movie?.release_date}</span>
                </div>

                <h6 className="text-uppercase fw-bold text-warning small mb-2">Overview</h6>
                <p className="text-light opacity-75">{movie?.overview}</p>

                <h6 className="text-uppercase fw-bold text-warning small mt-4 mb-2">Top Cast</h6>
                <div className="d-flex flex-wrap gap-2">
                  {movie?.credits?.cast?.slice(0, 6).map(person => (
                    <Badge key={person.id} bg="dark" className="border border-secondary p-2 fw-normal">
                      <Users size={12} className="me-1"/> {person.name}
                    </Badge>
                  ))}
                </div>
              </Col>
            </Row>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="border-secondary">
        {movie?.homepage && (
            <Button variant="outline-warning" size="sm" href={movie.homepage} target="_blank" className="me-auto">
                <Globe size={14} className="me-1"/> Website
            </Button>
        )}
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetailsModal;