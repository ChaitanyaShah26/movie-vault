import { Card, Badge } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../services/api';
import { Star } from 'lucide-react';

const MovieCard = ({ movie, onClick }) => {

  const posterUrl = movie.poster_path 
    ? `${IMAGE_BASE_URL}${movie.poster_path}` 
    : 'https://placehold.co/500x750/1e293b/white?text=No+Poster';

  return (
    <Card className="movie-card h-100" onClick={() => onClick(movie)}>
      <Card.Img variant="top" src={posterUrl} loading="lazy" />
      <Card.Body className="d-flex flex-column justify-content-between p-3">
        <Card.Title className="fs-6 fw-bold mb-2 text-truncate-2">{movie.title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-secondary">{movie.release_date?.split('-')[0] || 'N/A'}</small>
          <Badge bg="warning" text="dark" className="d-flex align-items-center gap-1">
            <Star size={12} fill="currentColor" /> {movie.vote_average?.toFixed(1) || '0.0'}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;