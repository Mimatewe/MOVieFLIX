import styles from "./DisplayRow.module.css"
import SlideShow from '../SlideShow/SlideShow'
import { movieInstance } from "../../../Utility/MovieInstance";
import requests from "../../../Utility/requestUrls" 
import { useState, useEffect } from "react";

function DisplayRow() {
  const [movieData, setMovieData] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        documentariesRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries)
      ]);
      setMovieData({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: documentariesRes.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);
return (
  <div className={styles.mainWrapper}>
      <SlideShow title="Movie Suggestions" movies={movieData.trending} />
      <SlideShow title="Popular on Netflix" movies={movieData.netflixOriginals} />
      <SlideShow title="Trending Now" movies={movieData.topRated} />
      <SlideShow title="New Releases" movies={movieData.action} />
      <SlideShow title="Action Movies" movies={movieData.comedy} />
      <SlideShow title="Comedy Movies" movies={movieData.horror} />
      <SlideShow title="Horror Movies" movies={movieData.romance} />
      <SlideShow title="Romance Movies" movies={movieData.documentaries} />
  </div>
)
}
   
export default DisplayRow
