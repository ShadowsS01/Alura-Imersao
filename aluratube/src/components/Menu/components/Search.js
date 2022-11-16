import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 425px;
  width: 50%;
  border-radius: 40px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundBase};
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);

  input {
    width: 80%;
    padding: 4px 6px 4px 16px;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border: 2px solid ${({ theme }) => theme.borderBase};
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
    &:focus {
      border-color: ${({ theme }) => theme.colorMain || "#1d90f5"};
    }
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-top: 2px solid ${({ theme }) => theme.borderBase};
    border-bottom: 2px solid ${({ theme }) => theme.borderBase};
    border-right: 2px solid ${({ theme }) => theme.borderBase};
    border-left: 2px solid transparent;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    width: 40px;
    height: 40px;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
    &:focus-visible {
      border: 2px solid ${({ theme }) => theme.colorMain || "#1d90f5"};
    }
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;

  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setValorDaBusca(e.target.value)}
        value={valorDaBusca}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
