import styled from "styled-components";

export const StyledHeader = styled.div`
  a {
    border: none;
    outline: none;
    text-decoration: none;
    color: ${({ theme }) => theme.textColorBase || "rgba(24, 24, 27, 1)"};
    &:hover,
    &:focus-visible {
      text-decoration: underline;
      opacity: 0.7;
    }
  }
  .perfil-link {
    border-radius: 100%;
    width: 80px;
    height: 80px;
    transition: 0.3s;
    &:focus {
      box-shadow: 0 0 0 0.18rem ${({ theme }) => theme.colorMain || "#1d90f5"};
    }
  }
  a > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }

  p {
    transition-duration: 300ms;
    color: ${({ theme }) => theme.textColorBase || "rgba(24, 24, 27, 1)"};
  }
`;
export const StyledBanner = styled.div`
  background-color: rgba(24, 24, 27, 1);
  background-image: url(${({ bg }) => bg});
  height: 230px;
`;
