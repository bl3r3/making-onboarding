import styled from "styled-components";
import { theme } from "../../Theme";

interface backgroundColorProps {
  readonly typeColor: string;
}

let color: string;

const setColorHeader = (type: string) => {
  switch (type) {
    case "work":
      if (type === "work") {
        color = theme.colors.lightOrange;
        return color;
      }
      break;
    case "play":
      if (type === "play") {
        return (color = theme.colors.softBlue);
      }
      break;
    case "study":
      if (type === "study") {
        return (color = theme.colors.lightRed);
      }
      break;
    case "exercise":
      if (type === "exercise") {
        return (color = theme.colors.limeGreen);
      }
      break;
    case "social":
      if (type === "social") {
        return (color = theme.colors.violet);
      }
      break;
    case "self-care":
      if (type === "self-care") {
        return (color = theme.colors.softOrange);
      }
      break;
    default:
      return "hsl(15, 100%, 70%)";
  }
};

export const MainCard = styled.div`
  height: 220px;
  min-width: 210px;
  max-width: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;

  @media (max-width: 1000px) {
    min-width: 170px;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    height: 180px;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 30px;
  display: inherit;
  align-items: center;
  justify-content: space-around;

  h3 {
    width: 50%;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    margin-left: 20px;
    font-size: 3rem;
    font-weight: 300;
    margin-top: -20px;
    margin-bottom: 0;
  }

  span {
    width: 100%;
    font-size: 0.8rem;
    margin-left: 20px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    h2 {
      margin-left: 25px;
      margin-top: 0;
      font-size: 2.3rem;
    }

    span {
      margin-left: 0px;
      font-size: 1rem;
    }
  }

  @media (max-width: 710px) {
    flex-wrap: wrap;

    h2,
    span {
      margin-left: 35px;
    }
  }

  @media (max-width: 380px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    h2 {
      margin-left: 25px;
      margin-top: 0;
    }
  }
`;

export const CardHeader = styled.div<backgroundColorProps>`
  width: 100%;
  height: 30%;
  background-color: ${(props) => setColorHeader(props.typeColor)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: absolute;
  border-radius: 20px 20px 0px 0px;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: hsl(235, 46%, 20%);
  border-radius: 20px;
  position: absolute;
  z-index: 9;
  top: 40px;
`;

export const CardHeaderImage = styled.img`
  width: 65px;
  padding-right: 15px;
  margin-top: -10px;
`;

export const CardInfoOptions = styled.img`
  cursor: pointer;

  svg:hover {
    transform: scale(0.8);
  }
`;
