"use client"; 

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import Image from "next/image";

const MovieDetailPage = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (!id) return;

      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMovie(null);
      }
    };

    fetchMovieDetail();
  }, [id, apiKey]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <p>ID: {movie.imdbID}</p>
      <p>Year: {movie.Year}</p>
      <div className="mt-4">
        {movie.Poster && movie.Poster !== "N/A" ? (
          <div className="relative w-50% h-80">
            <Image
              src={movie.Poster}
              alt={movie.Title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ) : (
          <p>No poster available</p>
        )}
      </div>
      <p className="mt-4">{movie.Plot}</p>
    </div>
  );
};

export default MovieDetailPage;
