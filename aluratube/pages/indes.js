import Head from "next/head";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>AluraTube</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <CSSReset />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>Conteúdo</Timeline>
      </div>
    </>
  );
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
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
    color: ${({ theme }) => theme.borderBase || "rgba(24, 24, 27, 1)"};
    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
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

function Timeline(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url} key={video.url}>
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
