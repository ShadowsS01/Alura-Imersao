import Image from "next/image";
import { ReactNode } from "react";
import { PlaylistProps } from "../../utils/types";
import { StyledTimeline } from "./styles";

interface TimelineProps {
  children: ReactNode;
  searchValue: string;
  propriedades: PlaylistProps;
}

export const Timeline = ({ searchValue, propriedades }: TimelineProps) => {
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.id} href={video.url}>
                      <Image
                        width={200}
                        height={121}
                        alt={`Thumbnail do video ${video.title}`}
                        src={video.thumb}
                      />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
};
