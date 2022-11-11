import { useState } from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

const StyledHeader = styled.div`
  /* background-color: ${({ theme }) => theme.backgroundLevel1}; */

  a > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 0 0.18rem rgba(255, 0, 8, 1);
    }
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  a {
    border: none;
    color: ${({ theme }) => theme.textColorBase || "rgba(24, 24, 27, 1)"};
    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }
`;
const StyledBanner = styled.div`
  background-color: rgba(24, 24, 27, 1);
  background-image: url(${({ bg }) => bg});
  /* background-image: url(${config.bg}); */
  height: 230px;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <a target="_blank" href={`https://github.com/${config.github}`}>
          <img src={`https://github.com/${config.github}.png`} />
        </a>
        <div>
          <h2>
            <a target="_blank" href={`https://github.com/${config.github}`}>
              {config.name}
            </a>
          </h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...propriedades }) {
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
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
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
}
