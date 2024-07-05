import React from "react";

import MovieCarousel from "@/components/Movie/MovieCarousel/MovieCarousel";
import {useRoom} from "@/contexts/RoomProvider";

interface RoomProps {}

const Room: React.FC<RoomProps> = () => {

  return (
      <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
      }}>
           <MovieCarousel/>
      </div>
  );
};

export default Room;