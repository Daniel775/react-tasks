import { fireEvent, render } from '@testing-library/react';
import Task, { TasksContainer } from '../src/components/TasksList';
import { act } from 'react-dom/test-utils';

describe('TasksContainer', () => {
	it('should render the content received as a children', () => {
		const { getByText } = render(
			<TasksContainer>
				<span>test</span>
			</TasksContainer>
		);

		expect(getByText('test')).toBeTruthy();
	});
});

describe('Task.Container', () => {
	it('should render the content received as a children', () => {
		const { getByText } = render(
			<Task.Container>
				<span>test</span>
			</Task.Container>
		);

		expect(getByText('test')).toBeTruthy();
	});

	it('should render a icon on the left corner when the prop "icon" is set', () => {
		const { getByTestId } = render(
			<Task.Container icon={() => <i data-testid="dummy-icon" />}>
				{null}
			</Task.Container>
		);

		expect(getByTestId('dummy-icon')).toBeTruthy();
	});
});

describe('Task.Content', () => {
	it('should render the content received as a children', () => {
		const { getByText } = render(
			<Task.Content>
				<span>test</span>
			</Task.Content>
		);

		expect(getByText('test')).toBeTruthy();
	});
});

describe('Task.Title', () => {
	it('should render the content received as a children', () => {
		const { getByText } = render(
			<Task.Title>
				<span>test</span>
			</Task.Title>
		);

		expect(getByText('test')).toBeTruthy();
	});
});

describe('Task.Message', () => {
	it('should render the content received as a children', () => {
		const { getByText } = render(
			<Task.Message>
				<span>test</span>
			</Task.Message>
		);

		expect(getByText('test')).toBeTruthy();
	});
});

describe('Task.Actions', () => {
	it('should render the content received as a children', () => {
		const { getByText } = render(
			<Task.Actions>
				<span>test</span>
			</Task.Actions>
		);

		expect(getByText('test')).toBeTruthy();
	});
});

describe('Task.Action', () => {
	it('should call a action when clicked', (done) => {
		const { getByRole } = render(
			<Task.Action onClick={callback} icon={() => <i />} />
		);

		act(() => {
			fireEvent.click(getByRole('button'));
		});

		function callback(evt: React.MouseEvent<HTMLButtonElement>) {
			expect(evt).toBeTruthy();
			done();
		}
	});
});
