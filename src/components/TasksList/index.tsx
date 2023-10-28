import { PropsWithChildren } from 'react';
import {
	TasksArea,
	TaskContainer,
	TaskTextArea,
	TaskHeader,
	TaskMessage,
	TaskButtonsContainer,
	TaskButton
} from './styles';
import { TaskComponentProps, TaskActionProps } from '../../types';

export function TasksContainer({ children }: PropsWithChildren) {
	return <TasksArea>{children}</TasksArea>;
}

function TaskComponent({ children, icon: Icon }: TaskComponentProps) {
	return (
		<TaskContainer>
			{!!Icon && <Icon />}
			{children}
		</TaskContainer>
	);
}

function TaskContent({ children }: PropsWithChildren) {
	return <TaskTextArea>{children}</TaskTextArea>;
}

function TaskTitle({ children }: PropsWithChildren) {
	return <TaskHeader>{children}</TaskHeader>;
}

function TaskText({ children }: PropsWithChildren) {
	return <TaskMessage>{children}</TaskMessage>;
}

function TaskActions({ children }: PropsWithChildren) {
	return <TaskButtonsContainer>{children}</TaskButtonsContainer>;
}

function TaskAction({ icon: Icon, ...props }: TaskActionProps) {
	return (
		<TaskButton {...props}>
			<Icon />
		</TaskButton>
	);
}

const Tasks = {
	Container: TaskComponent,
	Content: TaskContent,
	Title: TaskTitle,
	Message: TaskText,
	Actions: TaskActions,
	Action: TaskAction
};

export default Tasks;
