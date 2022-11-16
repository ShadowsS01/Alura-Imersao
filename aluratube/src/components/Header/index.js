import { StyledBanner, StyledHeader } from "./styles";
import config from "../../../config.json";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <a
          className="perfil-link"
          target="_blank"
          href={`https://github.com/${config.github}`}
        >
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
};
