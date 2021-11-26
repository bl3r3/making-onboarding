import React, { FC } from "react";

import {
  Container,
  ReportFor,
  Menu,
  UserAvatar,
  ReportTitle,
  UserName,
  UserInfo,
} from "./styles";

import Avatar from "../../assets/image-jeremy.png";

export interface ReportProps {
  reportFor: string;
  username: string;
}

export const Report: FC<ReportProps> = ({
  reportFor,
  username,
}: ReportProps) => {
  return (
    <Container>
      <ReportFor>
        <UserAvatar src={Avatar} />
        <UserInfo>
          <ReportTitle>{reportFor}</ReportTitle>
          <UserName>{username}</UserName>
        </UserInfo>
      </ReportFor>
      <Menu>
        <a href="/">Daily</a>
        <a href="/">Weekly</a>
        <a href="/">Mothly</a>
      </Menu>
    </Container>
  );
};
