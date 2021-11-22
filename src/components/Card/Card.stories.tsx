import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Card, CardProps } from './Card';

export default {
	component: Card,
	title: 'Components/Card',
	argTypes: {
		type: {
			options: ['work', 'play', 'study', 'exercise', 'social', 'self-care'],
			control: { type: 'select' },
		},
	},
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	title: 'Work',
	hrs: '32hrs',
	lastHrs: 'Last Week - 5hrs',
	type: 'work',
};
