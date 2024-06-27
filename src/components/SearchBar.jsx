"use client";

import React, { useState } from "react";
import MoviesList from "./MoviesList";

const SearchBar = () => {
  const [inputMovie, setInputMovie] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setInputMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="search-container p-4">
      <form className="flex items-center justify-center space-x-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-64 text-center bg-secondary px-4 py-2 outline-none placeholder:text-textColor rounded-l-md"
          onChange={handleChange}
          placeholder="Search for a movie..."
        />
        <button className="bg-secondary text-textColor py-2 px-4 rounded-r-md hover:bg-textColor hover:text-white">
          Search
        </button>
      </form>
      <MoviesList movies={results} />
    </div>
  );
};

export default SearchBar;
