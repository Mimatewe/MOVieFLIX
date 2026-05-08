import styles from "./MovieCard.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; 

function MovieCard({ movie }) {
  const genres = movie?.genres ?? [];

  return (
    <div className={styles.cardWrapper}>
      <img
        className={styles.poster}
        src= {`${IMAGE_BASE_URL}${movie?.poster_path}`}
        alt={movie?.title ?? "poster image"}
      />

      <div className={styles.hoverCard}>
        <img
          className={styles.hoverImage}
          src={ `${IMAGE_BASE_URL}${movie?.poster_path}` }
          alt={movie?.title ?? "poster image"}
        />
        <div className={styles.badge}>{movie?.badge}</div>

        <div className={styles.bottomRow}>
          <FaPlayCircle className={styles.circleButton} color="white" size={30} />
          <BsPlusCircle className={styles.circleButton} color="white" size={30} />
          <GoCheckCircleFill className={styles.circleButton} color="white" size={30} />
          <IoIosArrowDropdownCircle className={styles.circleButtonSmall} color="white" size={30} />
        </div>

        <div className={styles.metadataRow}>
          <span className={styles.tag}>{movie?.matureRating}</span>
          <span className={styles.tag}>{movie?.category}</span>
          <span className={styles.tag}>{movie?.quality}</span>
        </div>

        <div className={styles.genre}>
          {genres.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && <span className={styles.dot}> . </span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
