import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    transition-duration: 300ms;
    color: ${({ theme }) => theme.textColorBase || "rgba(24, 24, 27, 1)"};
  }
  img {
    aspect-ratio: 16/9;
    border-radius: 10px;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow-x: auto;
    padding: 8px 4px;
    div {
      animation: init-page;
      animation-duration: 2.5s;
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 12px;
      padding-bottom: 12px;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(220px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      a {
        min-height: 210px;
        scroll-snap-align: start;
        text-decoration: none;
        outline: none;
        border: 2px solid transparent;
        border-radius: 12px;
        &:hover,
        &:focus {
          opacity: 0.6;
          border-color: ${({ theme }) => theme.colorMain || "#1d90f5"};
        }
        span {
          padding: 10px 6px 8px 4px;
          display: block;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
