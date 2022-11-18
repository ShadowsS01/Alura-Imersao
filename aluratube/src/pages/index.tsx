import { useEffect, useState } from "react";

import { supabase } from "../utils/supabaseClient";

import type { PlaylistProps } from "../utils/types";

import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";
import { videoService } from "../services/videoService";
import Menu from "../components/Menu";

export default function Home() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = useState<PlaylistProps>({
    playlists: {},
  });

  useEffect(() => {
    const getVideos = () =>
      service.getAllVideos().then(({ data }) => {
        const novasPlaylists: PlaylistProps = {
          playlists: {},
        };

        if (data) {
          data.forEach((video) => {
            if (!novasPlaylists.playlists[video.playlist])
              novasPlaylists.playlists[video.playlist] = [];
            novasPlaylists.playlists[video.playlist] = [
              video,
              ...novasPlaylists.playlists[video.playlist],
            ];
          });

          setPlaylists(novasPlaylists);
        }
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
      <Timeline searchValue={valorDoFiltro} propriedades={playlists}>
        Conteúdo
      </Timeline>
    </div>
  );
}
