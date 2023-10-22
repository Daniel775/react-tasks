import React, { PropsWithChildren } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Calendar from './index';

const meta: Meta<typeof Calendar.CalendarContainer> = {
	component: Calendar.CalendarContainer,
	title: 'ReactTasks/Calendar',
	argTypes: {}
};
export default meta;

type Story = StoryObj<typeof Calendar.CalendarContainer>;

export const Primary: Story = (args: PropsWithChildren) => (
	<Calendar.CalendarContainer {...args} />
);

Primary.args = {
	children: (
		<>
			<Calendar.CalendarHeader />
			<Calendar.CalendarColumnsContainer>
				<Calendar.CalendarColumn weekDay="1" />
				<Calendar.CalendarColumn weekDay="2" />
				<Calendar.CalendarColumn weekDay="3" />
				<Calendar.CalendarColumn weekDay="4" />
				<Calendar.CalendarColumn weekDay="5" />
			</Calendar.CalendarColumnsContainer>
			<Calendar.CalendarItemsContainer
				startDate={new Date('2023-09-21')}
				endDate={new Date('2023-10-11')}
				fillEmptySlots={true}
			/>
		</>
	)
};
