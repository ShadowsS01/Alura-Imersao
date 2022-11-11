import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    background-color: rgba(255, 0, 8, 0.7);
    opacity: 1;
    border-radius: 50%;
    z-index: 9999;
    cursor: pointer;
    backdrop-filter: blur(16px);
    &:hover,
    &:focus-visible {
      background-color: rgba(255, 0, 8, 0.4);
      box-shadow: 0 0 0 0.18rem rgba(255, 0, 8, 1);
    }
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      background-color: #222222;
    }
  }
  button[type="submit"] {
    background-color: rgba(255, 0, 8, 0.8);
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: inherit;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
  }
  input,
  select {
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 10px 10px;
    margin-bottom: 10px;
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
  .select-div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;
