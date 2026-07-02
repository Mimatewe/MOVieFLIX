import { useEffect, useState } from "react";
import NetflixBannerLogo from "../../../assets/image/logo.png";
import style from "./Banner.module.css";
import { Play, Info } from "lucide-react";
import { movieInstance } from "../../../Utility/MovieInstance";
import requests from "../../../Utility/requestUrls";

const BANNER_BASE= "https://image.tmdb.org/t/p/original/"
function Banner() {

  const [bannerImage, setBannerImage] = useState ({})
  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals)
      setBannerImage (
        request.data.results [Math.floor(Math.random()*request.data.results.length)]
      )
    }
    fetchBannerImage()
  },[])

  function truncate(str,n) {
    return str?.length>n ? str.substr(0,n-1)+"..." : str
  }
  return (
    <div className={style.banner}
      style= {
        {
          backgroundSize : "cover",
          backgroundImage : `url(${BANNER_BASE}${bannerImage.backdrop_path})`
        }
      }>
      <div className={style.content}>
        {/* Netflix logo */}
        <img className={style.logoImg} src={NetflixBannerLogo} alt="Netflix Logo" />

        {/* Title */}
        <h1 className={style.title}>
          {bannerImage?.title || bannerImage?.name || bannerImage?.original_name}
        </h1>

        {/* Description */}
        <h1 className={style.description}>
         {truncate(bannerImage?.overview,120)}
        </h1>

        {/* Buttons */}
        <div className={style.buttonContainer}>
          <button className={style.button}>
            <Play size={20} />
            Play
          </button>

          <button className={`${style.button} ${style.buttonOutline}`}>
            <Info size={20} />
            More Info
          </button>
        </div>
      </div>

      {/* Fade bottom */}
      <div className={style.fadeBottom}></div>
    </div>
  );
}

export default Banner;