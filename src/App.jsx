import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Form, InputGroup, Spinner } from 'react-bootstrap';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { fetchTrendingMovies, searchMovies, fetchFullMovieDetails } from './services/api';
import MovieCard from './components/MovieCard';
import MovieDetailsModal from './components/MovieDetailsModal';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadTrending();
  }, []);

  const loadTrending = async () => {
    try {
      setLoading(true);
      const { data } = await fetchTrendingMovies();
      setMovies(data.results);
    } catch (error) {
      console.error("Error loading trending movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query.trim().length > 2) {
      try {
        const { data } = await searchMovies(query);
        setMovies(data.results);
      } catch (err) { console.error(err); }
    } else if (query.trim().length === 0) {
      loadTrending();
    }
  };

  const openDetails = async (movieSummary) => {
    setShowModal(true);
    setModalLoading(true);
    // Show partial data while loading full details
    setSelectedMovie(movieSummary); 
    try {
      const { data } = await fetchFullMovieDetails(movieSummary.id);
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching full details:", error);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3 sticky-top border-bottom border-secondary shadow-lg">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center gap-2 fw-bold text-warning fs-3">
            <span>MOVIE <span className="text-white opacity-75">VAULT</span></span>
          </Navbar.Brand>
          
          <Form className="ms-auto w-50" onSubmit={(e) => e.preventDefault()}>
            <InputGroup>
              <InputGroup.Text className="search-bar border-end-0">
                <Search size={18} className="text-warning" />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Find a masterpiece..."
                className="search-bar border-start-0 py-2"
                value={searchTerm}
                onChange={handleSearch}
              />
            </InputGroup>
          </Form>
        </Container>
      </Navbar>

      <Container className="my-5 min-vh-100">
        <h2 className="mb-4 fw-bold">
          {searchTerm ? `Results for "${searchTerm}"` : "Trending Movies"}
        </h2>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {movies.map(movie => (
              <Col key={movie.id}>
                <MovieCard movie={movie} onClick={openDetails} />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <MovieDetailsModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        movie={selectedMovie} 
        loading={modalLoading}
      />
    </>
  );
}

export default App;