import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Calendar from './index';
import { CalendarContainerProps } from '../../types';

const meta: Meta<typeof Calendar.Container> = {
	component: Calendar.Container,
	title: 'ReactTasks/Calendar',
	argTypes: {}
};
export default meta;

type Story = StoryObj<typeof Calendar.Container>;

export const Primary: Story = (args: CalendarContainerProps) => (
	<Calendar.Container {...args} />
);

Primary.args = {
	onSelectionChanged: (date) => console.log(date),
	children: (
		<>
			<Calendar.Header />
			<Calendar.ColumnsContainer>
				<Calendar.Column weekDay="1" />
				<Calendar.Column weekDay="2" />
				<Calendar.Column weekDay="3" />
				<Calendar.Column weekDay="4" />
				<Calendar.Column weekDay="5" />
			</Calendar.ColumnsContainer>
			<Calendar.ItemsContainer
				startDate={new Date('2023-09-21')}
				endDate={new Date('2023-10-11')}
				fillEmptySlots={true}
			/>
		</>
	)
};
