import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import vd1 from "../assets/video_hero.webm";

function Hero() {
  const [play, setPlay] = useState(true);
  const [playClass, setPlayClass] = useState("fa-circle-pause");
  const video = useRef(null);
  const handlePlay = () => {
    if (play) {
      video.current.pause();
      setPlay(false);
      setPlayClass("fa-circle-play");
    } else {
      video.current.play();
      setPlay(true);
      setPlayClass("fa-circle-pause");
    }
  };
  return (
    <section className="relative">
      <video
        type="video/webm"
        muted
        autoPlay
        loop
        className="h-175 w-full md:w-full md:h-auto object-cover"
        ref={video}
      >
        <source src={vd1} />
      </video>
      <button
        className="absolute bottom-1 right-1 text-slate-50 cursor-pointer text-2xl"
        onClick={handlePlay}
      >
        <i className={`fa-solid ${playClass}`}></i>
      </button>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-10 text-center text-white">
        <h2 className="text-3xl font-bold lg:text-5xl">The joy of summer</h2>
        <p className="my-7">Outfit for the moments we can't wait for</p>
        <Link to="/products">
          <button className="bg-slate-300 hover:bg-slate-600 hover:text-white transition-bg ease-in duration-200 rounded-md px-8 py-3 cursor-pointer text-black">
            New Products
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
