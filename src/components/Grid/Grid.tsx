import React, { FC } from 'react';
import { Card } from '../Card/Card';
import { Report } from '../Report/Report';
import { Theme } from '../../theme';
import {
	GridContainerAuto,
	GridContainerManual,
	MainContainer,
	Layout,
	MainContainerGrid,
} from './styles';

export const Grid: FC = () => {
	return (
		<Layout>
			<MainContainer>
				<Report reportFor='Report for' username='Roberto Carrasquel' />
				<GridContainerAuto>
					<Card
						type='work'
						title='Work'
						hrs='32hrs'
						lastHrs='Last Week - 5hrs'
					/>
					<Card
						type='work'
						title='Work'
						hrs='32hrs'
						lastHrs='Last Week - 5hrs'
					/>
					<Card
						type='work'
						title='Work'
						hrs='32hrs'
						lastHrs='Last Week - 5hrs'
					/>
					<Card
						type='work'
						title='Work'
						hrs='32hrs'
						lastHrs='Last Week - 5hrs'
					/>
					<Card
						type='work'
						title='Work'
						hrs='32hrs'
						lastHrs='Last Week - 5hrs'
					/>
					<Card
						type='work'
						title='Work'
						hrs='32hrs'
						lastHrs='Last Week - 5hrs'
					/>
				</GridContainerAuto>
			</MainContainer>
		</Layout>
	);
};
