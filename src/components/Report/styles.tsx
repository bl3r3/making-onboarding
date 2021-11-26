import styled from "styled-components";
import { theme } from "../../Theme";

export const Container = styled.div`
  min-width: 210px;
  min-height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  color: ${theme.colors.white};

  @media (max-width: 768px) {
    width: 100% !important;
    min-width: 100%;
    min-height: 15rem;
  }

  @media (max-width: 380px) {
    width: 100%;
    min-height: 12rem;
  }
`;

export const ReportFor = styled.div`
  width: 100%;
  height: 65%;
  background-color: ${theme.colors.desaturatedBlue};
  position: absolute;
  top: 0;
  z-index: 9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 650px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${theme.colors.darkBlue};
  position: absolute;
  bottom: 0;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    font-size: 1.3rem;
    align-items: center;
    justify-content: space-evenly;

    a {
      margin: 0 !important;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.colors.white};
    height: 30px;
    margin-left: 30px;
    margin-top: 10px;
  }
`;

export const UserAvatar = styled.img`
  width: 75px;
  height: 75px;
  border: 2px solid white;
  border-radius: 50%;
  margin: 0 25px;

  @media (max-width: 768px) {
    width: 85px;
    height: 85px;
    margin: 0 20px;
  }

  @media (max-width: 650px) {
    width: 70px;
    height: 70px;
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin: 0 15px;
  }
`;

export const ReportTitle = styled.span`
  width: 100%;
  font-size: 0.8rem;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const UserName = styled.h2`
  width: 100%;
  font-size: 2rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: 650px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 30px;

  @media (max-width: 480px) {
    margin: 10px;
  }
`;
