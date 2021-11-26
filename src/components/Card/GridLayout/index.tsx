import React, { FC } from "react";
import { Card } from "..";
import { Report } from "../../Report";
import {
  GridContainerAuto,
  GridContainerManual,
  MainContainer,
  Layout,
  MainContainerGrid,
} from "./styles";

import { ThemeProvider } from "styled-components";

import { theme } from "../../../Theme";

export const GridLayout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <MainContainer>
          <Report reportFor="Report for" username="Roberto Carrasquel" />
          <GridContainerManual>
            <Card
              type="work"
              title="Work"
              hrs="32hrs"
              lastHrs="Last Week - 38hrs"
            />
            <Card
              type="play"
              title="Play"
              hrs="10hrs"
              lastHrs="Last Week - 8hrs"
            />
            <Card
              type="study"
              title="Study"
              hrs="4hrs"
              lastHrs="Last Week - 7hrs"
            />
            <Card
              type="exercise"
              title="Exercise"
              hrs="4hrs"
              lastHrs="Last Week - 5hrs"
            />
            <Card
              type="social"
              title="Social"
              hrs="5hrs"
              lastHrs="Last Week - 10hrs"
            />
            <Card
              type="self-care"
              title="Self Care"
              hrs="2hrs"
              lastHrs="Last Week - 2hrs"
            />
          </GridContainerManual>
        </MainContainer>
      </Layout>
    </ThemeProvider>
  );
};
