import { useEffect, useState } from "react";

import { supabase } from "../utils/supabaseClient";

import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";
import { videoService } from "../services/videoService";
import Menu from "../components/Menu";

export default function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    const getVideos = () =>
      service.getAllVideos().then((dados) => {
        const novasPlaylists = {};

        dados.data.forEach((video) => {
          if (!novasPlaylists[video.playlist])
            novasPlaylists[video.playlist] = [];
          novasPlaylists[video.playlist] = [
            video,
            ...novasPlaylists[video.playlist],
          ];
        });

        setPlaylists(novasPlaylists);
      });
    getVideos();

    const subscription = supabase
      .channel("videos")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "videos",
        },
        (payload) => {
          getVideos();
          // const playlistRealtime = { ...playlists };

          // if (!playlistRealtime[payload.new.playlist]) {
          //   playlistRealtime[payload.new.playlist] = [];
          // }
          // playlistRealtime[payload.new.playlist] = [
          //   payload.new,
          //   ...playlistRealtime[payload.new.playlist],
          // ];

          // setPlaylists(playlistRealtime);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header />
      <Timeline searchValue={valorDoFiltro} playlists={playlists}>
        Conteúdo
      </Timeline>
    </div>
  );
}
