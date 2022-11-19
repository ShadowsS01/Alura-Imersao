import styled from "styled-components";

export const StyledVideo = styled.div`
  * {
    transition-duration: 300ms;
    color: ${({ theme }) => theme.textColorBase || "rgba(24, 24, 27, 1)"};
  }

  display: flex;
  justify-content: center;

  margin-top: 16px;
  margin-bottom: 32px;
  padding: 0px 10px;

  @media (max-width: 400px) {
    margin-top: 32px;
  }

  & > div {
    height: 100%;
    width: 100%;
    max-width: 1100px;
    max-height: 80vh;
    aspect-ratio: 16 / 9;

    & > .back {
      border: 0;
      outline: none;
      text-decoration: none;
      max-width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px;
      background-color: ${({ theme }) => theme.colorMain};
      transition: 0.3s;
      &,
      * {
        color: #f0f0f0;
      }
      border-radius: 6px;
      font-size: 16px;
      margin-bottom: 6px;

      cursor: pointer;
      &:hover,
      &:focus-visible {
        opacity: 0.8;
        gap: 6px;
      }

      &:focus-visible {
        box-shadow: 0 0 0 0.18rem
          ${({ theme }) => theme.textColorBase || "#1d90f5"};
        text-decoration: underline;
      }
    }

    & > iframe {
      border-radius: 12px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1);
    }
  }
`;
