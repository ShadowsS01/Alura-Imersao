import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  * {
    transition-duration: 300ms;
    color: ${({ theme }) => theme.textColorBase || "rgba(24, 24, 27, 1)"};
  }

  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    position: fixed;
    bottom: 16px;
    right: 16px;
    background-color: rgba(255, 0, 8, 0.7);
    opacity: 1;
    border-radius: 50%;
    z-index: 9999;
    cursor: pointer;
    backdrop-filter: blur(16px);
    border: none;
    outline: none;
    &:hover,
    &:focus-visible {
      background-color: rgba(255, 0, 8, 0.4);
      box-shadow: 0 0 0 0.18rem rgba(255, 0, 8, 1);
      transform: rotate(180deg);
    }
  }
  .close-modal-div {
    display: flex;
    align-items: center;
    position: absolute;
    top: 8px;
    right: 16px;
    margin-top: 4px;
    border-radius: 50%;
    padding: 4px;
    &:hover,
    &:focus-within {
      background-color: rgba(255, 0, 8, 0.2);
      transform: rotate(180deg);
    }

    & > * {
      cursor: pointer;
      color: ${({ theme }) =>
        theme.textColorBase || "rgba(24, 24, 27, 1)"} !important;
    }
    .close-modal-btn {
      width: 25px;
      height: 25px;
      color: inherit;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
  button[type="submit"] {
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 0, 8, 1);
    padding: 12px 0px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    outline: none;
    margin-top: 10px;

    &:hover,
    &:focus-visible {
      background-color: rgba(255, 0, 8, 0.7);
      box-shadow: 0 0 0 0.18rem rgba(0, 0, 0, 0.5);
    }
    &:disabled {
      opacity: 0.5;
      box-shadow: none;
      cursor: not-allowed;
    }

    & > .icon-load {
      animation: spin 1s linear infinite;
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  form {
    animation: init-page;
    animation-duration: 1s;
    width: 100%;
    padding: 2%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    & > .form-container {
      overflow-y: auto;
      flex: 1;
      border-radius: 8px;
      max-width: 400px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 20px;
      padding-top: 26px;

      & > .title-form {
        margin-bottom: 12px;
      }
    }

    @media (max-width: 400px) {
      padding: 0;
    }
  }

  .input-div,
  .select-div {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    gap: 4px;

    & > span {
      color: rgba(255, 0, 8, 1);
      font-weight: 600;
      animation: none;
    }
    & > span::selection {
      background-color: rgba(255, 0, 8, 0.2);
    }
  }

  input,
  select {
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 10px 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
    transition: 0.3s;
    :hover {
      border-color: black;
    }
    &:focus-visible {
      border-color: transparent;
      box-shadow: 0 0 0 0.15rem rgba(255, 0, 8, 0.7);
    }
  }

  .view-thumbnail {
    display: flex;
    margin-top: 16px;

    & > img {
      width: 100%;
      height: 80%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;
