import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const Movie = ({ id, poster, title, year }) => (
  <Link href={`/detail/[id]`} as={`/detail/${id}`}>
    <div className="card">
      <div className="card-image">
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
            <p>No poster available</p>
          )}
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{year}</p>
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
