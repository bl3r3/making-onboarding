import React from 'react';

import { Report, ReportProps } from './Report';

import { Meta, Story } from '@storybook/react';

export default {
	component: Report,
	title: 'Components/Report',
} as Meta;

const Template: Story<ReportProps> = args => <Report {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	reportFor: 'Report for',
	username: 'Jeremy Robson',
};
