import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

const MoviesList = ({ movies }) => (
  <div className="results-container text-center mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-screen">
    {movies && movies.length > 0 ? (
      movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))
    ) : (
      <div className="text-textColor col-span-full">
        <p className="text-center">No results found</p>
      </div>
    )}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;


