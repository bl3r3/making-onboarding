import React, { FC } from 'react';

import {
	Container,
	ReportFor,
	Menu,
	UserAvatar,
	ReportTitle,
	UserName,
	UserInfo,
} from './styles';

import Avatar from '../../assets/image-jeremy.png';

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
				<ul>
					<li>
						<span>Daily</span>
					</li>
					<li>
						<span>Weekly</span>
					</li>
					<li>
						<span>Mothly</span>
					</li>
				</ul>
			</Menu>
		</Container>
	);
};
