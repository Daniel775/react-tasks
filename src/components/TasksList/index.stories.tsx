import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleInfo,
	faSquareArrowUpRight,
	faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react';
import Task, { TasksContainer } from './index';

const meta: Meta<typeof TasksContainer> = {
	component: TasksContainer,
	title: 'ReactTasks/TasksList',
	argTypes: {}
};
export default meta;

type Story = StoryObj<typeof TasksContainer>;

export const Primary: Story = (args: PropsWithChildren) => (
	<TasksContainer {...args} />
);

Primary.args = {
	children: (
		<>
			<Task.Container
				icon={() => (
					<FontAwesomeIcon
						icon={faCircleInfo}
						color="#ffffff"
						style={{ fontSize: '2.5rem' }}
					/>
				)}
			>
				<Task.Content>
					<Task.Title>Task header</Task.Title>
					<Task.Message>Task content</Task.Message>
				</Task.Content>
				<Task.Actions>
					<Task.Action
						icon={() => (
							<FontAwesomeIcon
								icon={faPenSquare}
								color="#ffffff"
								style={{ fontSize: '2rem' }}
							/>
						)}
						title="edit"
						onClick={() => alert('edit task')}
					/>
					<Task.Action
						icon={() => (
							<FontAwesomeIcon
								icon={faSquareArrowUpRight}
								color="#ffffff"
								style={{ fontSize: '2rem' }}
							/>
						)}
						title="Open"
						onClick={() => alert('open task')}
					/>
				</Task.Actions>
			</Task.Container>
			<Task.Container>
				<Task.Content>
					<Task.Title>Task header</Task.Title>
					<Task.Message>Task content</Task.Message>
				</Task.Content>
				<Task.Actions>
					<Task.Action
						icon={() => (
							<FontAwesomeIcon
								icon={faSquareArrowUpRight}
								color="#ffffff"
								style={{ fontSize: '2rem' }}
							/>
						)}
						title="Open"
						onClick={() => alert('open task')}
					/>
				</Task.Actions>
			</Task.Container>
		</>
	)
};
