import React, { FC } from 'react';

import {
	Card as Cardsito,
	CardHeader,
	CardContent,
	CardTitle,
	CardInfo,
	CardHeaderImage,
	CardInfoOptions,
} from './styles';

import WorkSvg from '../../assets/icon-work.svg';
import PlaySvg from '../../assets/icon-play.svg';
import StudySvg from '../../assets/icon-study.svg';
import ExerciseSvg from '../../assets/icon-exercise.svg';
import SocialSvg from '../../assets/icon-social.svg';
import SelfCareSvg from '../../assets/icon-self-care.svg';

import Options from '../../assets/icon-ellipsis.svg';

export interface CardProps {
	title: string;
	hrs: string;
	lastHrs: string;
	type: string;
}

const setType = (type: string) => {
	switch (type) {
		case 'work':
			if (type === 'work') {
				return WorkSvg;
			}
			break;
		case 'play':
			if (type === 'play') {
				return PlaySvg;
			}
			break;
		case 'study':
			if (type === 'study') {
				return StudySvg;
			}
			break;
		case 'exercise':
			if (type === 'exercise') {
				return ExerciseSvg;
			}
			break;
		case 'social':
			if (type === 'social') {
				return SocialSvg;
			}
			break;
		case 'self-care':
			if (type === 'self-care') {
				return SelfCareSvg;
			}
			break;
		default:
			return WorkSvg;
	}
};

export const Card: FC<CardProps> = ({
	title,
	hrs,
	lastHrs,
	type,
}: CardProps) => {
	return (
		<Cardsito>
			<CardHeader typeColor={type}>
				<CardHeaderImage src={setType(type)} />
			</CardHeader>
			<CardContent>
				<CardTitle>
					<h3>{title}</h3>
					<CardInfoOptions src={Options} />
				</CardTitle>
				<CardInfo>
					<h2>{hrs}</h2>
					<span>{lastHrs}</span>
				</CardInfo>
			</CardContent>
		</Cardsito>
	);
};
