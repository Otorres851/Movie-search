import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const Movie = ({ id, poster, title, year }) => (
  <Link href={`/detail/[id]`} as={`/detail/${id}`}>
    <div className="card border border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="card-image flex items-center justify-center">
        <figure className="image">
          {poster && typeof poster === "string" && poster !== "N/A" ? (
            <div style={{ width: '300px', height: '450px', position: 'relative' }}>
              <Image
                src={poster}
                alt={`Poster of ${title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ) : (
            <p className="flex items-center justify-center h-full bg-gray-200 text-gray-500">No poster available</p>
          )}
        </figure>
      </div>
      <div className="card-content p-4">
        <div className="media">
          <div className="media-content">
            <p className="text-lg font-semibold mb-2 text-center">{title}</p>
            <p className="text-sm text-gray-600 text-center">{year}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Movie;
