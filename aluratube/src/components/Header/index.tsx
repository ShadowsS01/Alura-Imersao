import Image from "next/image";
import { StyledBanner, StyledHeader } from "./styles";
import config from "../../../config.json";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <a
          className="perfil-link"
          title={`Ir para perfil de ${config.github}`}
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${config.github}`}
        >
          <Image
            width={100}
            height={100}
            priority
            alt={`Foto de perfil de ${config.github}`}
            src={`https://github.com/${config.github}.png`}
          />
        </a>
        <div>
          <h2>
            <a
              title={`Ir para perfil de ${config.github}`}
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/${config.github}`}
            >
              {config.name}
            </a>
          </h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
};
