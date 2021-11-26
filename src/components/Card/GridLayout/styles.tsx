import styled from "styled-components";

export const Layout = styled.div`
  width: 70vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 380px) {
    width: 80vw;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const MainContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 210px repeat(auto-fit, minmax(210px, 1fr));
`;

export const GridContainerManual = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const GridContainerAuto = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
`;
