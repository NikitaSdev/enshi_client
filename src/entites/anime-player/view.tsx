"use client";

import { FC, useEffect } from "react";
import { IAnimePlayer } from "./types";
import { useSession } from "next-auth/react";
import { addScreenTime, addToViewed } from "./model";

export const AnimePlayer: FC<IAnimePlayer> = ({ anime }) => {
  const { data } = useSession();
  const user = data?.user as { id: number };

  useEffect(() => {
    const handleIframeMessage = (event: any) => {
      if (event.data.key == "kodik_player_current_episode") {
        if (user && event.data.value.episode === anime.last_episode) {
          addToViewed({ anime_id: anime.anime_id, user_id: user?.id });
        }
      }
      if (event.data.key == "kodik_player_time_update") {
        if (user && event.data.value % 60 === 0) {
          addScreenTime({ user_id: user?.id });
        }
      }
    };
    window.addEventListener("message", handleIframeMessage);
    return () => window.removeEventListener("message", handleIframeMessage);
  }, [anime.anime_id, anime.last_episode, user]);

  return (
    <iframe
      allowFullScreen
      allow={"fullscreen; autoplay"}
      src={`https:${anime.link}`}
      style={{
        width: "100%",
        height: "30rem",
        borderRadius: "1rem",
      }}
    />
  );
};
