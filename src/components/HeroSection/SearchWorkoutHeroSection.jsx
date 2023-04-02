import React from "react";
import Video from "../../videos/sport2.mp4";

import {
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

function SearchWorkoutHeroSection() {
  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG autoPlay loop muted playsInline src={Video} type="video/mp4" />
      </HeroBG>
      <HeroContent>
        <HeroH1>Nothing is given. Everything is earned.</HeroH1>
        <HeroP>- LeBron James</HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default SearchWorkoutHeroSection;
