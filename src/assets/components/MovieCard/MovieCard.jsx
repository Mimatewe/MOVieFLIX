import styles from "./MovieCard.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; 

function MovieCard({ movie }) {
  const genres = movie?.genres ?? [];
  const title = movie?.title || movie?.name || movie?.original_title || movie?.original_name;
  const posterPath = movie?.poster_path || movie?.backdrop_path;

  return (
    <div className={styles.cardWrapper}>
      {posterPath ? (
        <img
          className={styles.poster}
          src={`${IMAGE_BASE_URL}${posterPath}`}
          alt={title ?? "poster image"}
        />
      ) : (
        <div className={styles.posterPlaceholder}>
          <span>{title}</span>
        </div>
      )}

      <div className={styles.hoverCard}>
        {posterPath ? (
          <img
            className={styles.hoverImage}
            src={`${IMAGE_BASE_URL}${posterPath}`}
            alt={title ?? "poster image"}
          />
        ) : (
          <div className={styles.hoverImagePlaceholder}>
            <span>{title}</span>
          </div>
        )}
        {movie?.badge && <div className={styles.badge}>{movie.badge}</div>}

        <div className={styles.bottomRow}>
          <FaPlayCircle className={styles.circleButton} color="white" size={30} />
          <BsPlusCircle className={styles.circleButton} color="white" size={30} />
          <GoCheckCircleFill className={styles.circleButton} color="white" size={30} />
          <IoIosArrowDropdownCircle className={styles.circleButtonSmall} color="white" size={30} />
        </div>

        <div className={styles.metadataRow}>
          {movie?.matureRating && <span className={styles.tag}>{movie.matureRating}</span>}
          <span className={styles.tag}>{movie?.vote_average ? `${movie.vote_average.toFixed(1)} Rating` : (movie?.category || "Movie")}</span>
          <span className={styles.tag}>{movie?.quality || "HD"}</span>
        </div>

        <div className={styles.genre}>
          {genres.length > 0 ? (
            genres.map((g, index) => (
              <span key={index}>
                {g}
                {index < genres.length - 1 && <span className={styles.dot}> . </span>}
              </span>
            ))
          ) : (
            <span>{movie?.release_date?.split("-")[0] || movie?.first_air_date?.split("-")[0]}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
