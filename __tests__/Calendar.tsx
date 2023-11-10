import {
	render,
	renderHook,
	act,
	screen,
	fireEvent
} from '@testing-library/react';
import { ReactNode } from 'react';
import Calendar from '../src/components/Calendar';
import { getDefaultCalendarTitle } from '../src/components/Calendar/CalendarHeader';
import { CalendarLabelsIndex } from '../src/types';
import { useCalendar } from '../src/contexts/CalendarContext';

describe('Calendar.Container', () => {
	it('should call the callback function when the "selectedDate" change passing the new value', (done) => {
		const today = new Date();

		function callback(value: Date | null) {
			if (!value) {
				return;
			}

			expect(value).toEqual(today);
			done();
		}

		const wrapper = ({ children }: { children: JSX.Element }) => (
			<Calendar.Container onSelectionChanged={callback}>
				<Calendar.ColumnsContainer>
					{children}
				</Calendar.ColumnsContainer>
			</Calendar.Container>
		);

		const { result } = renderHook(useCalendar, { wrapper });
		act(() => {
			result.current.setSelectedItem(today.getTime());
		});
	});
});

describe('Calendar.Header', () => {
	it('should render the text passed as a prop as the content', () => {
		const { getByText } = render(<Calendar.Header text="teste" />);

		expect(getByText('teste')).toBeTruthy();
	});

	it('should render the default text when no text prop is passed', () => {
		const { getByText } = render(<Calendar.Header />);
		const defaultText = getDefaultCalendarTitle();

		expect(getByText(defaultText)).toBeTruthy();
	});
});

describe('Calendar.ColumnsContainer', () => {
	it('should update the number of column on the CalendarContext', () => {
		const colsNumber = Math.ceil(Math.random() * 5);
		const wrapper = ({ children }: { children: JSX.Element }) => (
			<Calendar.Container>
				<Calendar.ColumnsContainer>
					{children}
					{generateRandomColumns(colsNumber)}
				</Calendar.ColumnsContainer>
			</Calendar.Container>
		);

		const { result } = renderHook(useCalendar, { wrapper });

		// it's necessary to add 1 because of the children injected by testing library
		expect(result.current.columnsNumber).toBe(colsNumber + 1);
	});
});

describe('Calendar.Column', () => {
	it('should render the default label when no "renderText" prop is set', () => {
		const today = new Date();
		const defaultText = today.toLocaleTimeString(navigator.language, {
			weekday: 'long'
		});
		const { container } = render(
			<Calendar.Container>
				<Calendar.Column
					weekDay={today.getDay() as unknown as CalendarLabelsIndex}
				/>
			</Calendar.Container>
		);

		expect(container.textContent).toBe(defaultText.substring(0, 3) + '.');
	});

	it('should render the return of the "renderText" prop when it is set', () => {
		const label = Math.ceil(Math.random() * 6);
		const { container } = render(
			<Calendar.Container>
				<Calendar.Column
					weekDay={label as unknown as CalendarLabelsIndex}
					renderText={() => 'Test'}
				/>
			</Calendar.Container>
		);

		expect(container.textContent).toBe('Test');
	});
});

describe('Calendar.CalendarItemsContainer', () => {
	const startDate = new Date(2023, 10, 6);
	const endDate = new Date(2023, 10, 10);

	it('should display the empty slots when "fillEmptySlots" is not set to false', () => {
		const { getAllByRole } = render(
			<Calendar.Container>
				<Calendar.ColumnsContainer>
					<Calendar.Column weekDay="0" />
					<Calendar.Column weekDay="1" />
					<Calendar.Column weekDay="2" />
					<Calendar.Column weekDay="3" />
					<Calendar.Column weekDay="4" />
					<Calendar.Column weekDay="5" />
					<Calendar.Column weekDay="6" />
				</Calendar.ColumnsContainer>
				<Calendar.ItemsContainer
					startDate={startDate}
					endDate={endDate}
				/>
			</Calendar.Container>
		);

		expect(getAllByRole('button')).toHaveLength(7);
	});

	it('should hide the empty slots when "fillEmptySlots" is set to false', () => {
		const { getAllByRole } = render(
			<Calendar.Container>
				<Calendar.ColumnsContainer>
					<Calendar.Column weekDay="0" />
					<Calendar.Column weekDay="1" />
					<Calendar.Column weekDay="2" />
					<Calendar.Column weekDay="3" />
					<Calendar.Column weekDay="4" />
					<Calendar.Column weekDay="5" />
					<Calendar.Column weekDay="6" />
				</Calendar.ColumnsContainer>
				<Calendar.ItemsContainer
					fillEmptySlots={false}
					startDate={startDate}
					endDate={endDate}
				/>
			</Calendar.Container>
		);

		expect(getAllByRole('button')).toHaveLength(5);
	});

	it('should render a custom component when "renderItem" is set', () => {
		const { getAllByText } = render(
			<Calendar.Container>
				<Calendar.ColumnsContainer>
					<Calendar.Column weekDay="3" />
				</Calendar.ColumnsContainer>
				<Calendar.ItemsContainer
					fillEmptySlots={false}
					startDate={startDate}
					endDate={endDate}
					renderItem={(_, key) => <span key={key}>test element</span>}
				/>
			</Calendar.Container>
		);

		expect(getAllByText('test element')).toBeTruthy();
	});
});

describe('Calendar.CalendarItem', () => {
	it('should render the result of "renderText"', () => {
		const today = new Date();
		const { container } = render(
			<Calendar.Item
				itemDate={today}
				disabled={false}
				status="normal"
				renderText={(date) => `test-${date.getUTCDate()}`}
			/>
		);

		expect(container.textContent).toBe(`test-${today.getUTCDate()}`);
	});

	it('should update the selectedDate when clicked and "disabled" is set to false', async () => {
		const today = new Date();
		const wrapper = ({ children }: { children: ReactNode }) => (
			<Calendar.Container>
				{children}
				<Calendar.Item
					itemDate={today}
					disabled={false}
					status="normal"
					renderText={(date) => date.getDate().toString()}
				/>
			</Calendar.Container>
		);

		const { result } = renderHook(useCalendar, { wrapper });
		const button = screen.getByText(today.getDate().toString());

		await act(async () => fireEvent.click(button));

		expect(result.current.selectedItem).toBe(today.getTime());
	});

	it('should not update the selectedDate when clicked and "disabled" is set to true', async () => {
		const today = new Date();
		const wrapper = ({ children }: { children: ReactNode }) => (
			<Calendar.Container>
				{children}
				<Calendar.Item
					itemDate={today}
					disabled={true}
					status="normal"
					renderText={(date) => date.getDate().toString()}
				/>
			</Calendar.Container>
		);

		const { result } = renderHook(useCalendar, { wrapper });
		const button = screen.getByText(today.getDate().toString());

		await act(async () => fireEvent.click(button));

		expect(result.current.selectedItem).toBeNull();
	});

	it('should display a white border when status is set as "normal"', () => {
		const { getByRole } = render(
			<Calendar.Item
				itemDate={new Date()}
				disabled={true}
				status="normal"
				renderText={(date) => date.getDate().toString()}
			/>
		);
		const styles = getComputedStyle(getByRole('button'));

		expect(styles.borderColor).toBe('#ffffff');
	});

	it('should display a red border when status is set as "alert"', () => {
		const { getByRole } = render(
			<Calendar.Item
				itemDate={new Date()}
				disabled={true}
				status="alert"
				renderText={(date) => date.getDate().toString()}
			/>
		);
		const styles = getComputedStyle(getByRole('button'));

		expect(styles.borderColor).toBe('#e74c3c');
	});

	it('should display a green border when status is set as "done"', () => {
		const { getByRole } = render(
			<Calendar.Item
				itemDate={new Date()}
				disabled={true}
				status="done"
				renderText={(date) => date.getDate().toString()}
			/>
		);
		const styles = getComputedStyle(getByRole('button'));

		expect(styles.borderColor).toBe('#07bc0c');
	});

	it('should display a yellow border when status is set as "pending"', () => {
		const { getByRole } = render(
			<Calendar.Item
				itemDate={new Date()}
				disabled={true}
				status="pending"
				renderText={(date) => date.getDate().toString()}
			/>
		);
		const styles = getComputedStyle(getByRole('button'));

		expect(styles.borderColor).toBe('#f1c40f');
	});

	it('should be hidden when status is set as "hidden"', () => {
		const { getByRole } = render(
			<Calendar.Item
				itemDate={new Date()}
				disabled={true}
				status="hidden"
				renderText={(date) => date.getDate().toString()}
			/>
		);

		expect(getByRole('button', { hidden: true })).not.toBeVisible();
	});
});

function generateRandomColumns(columnsNumber: number): ReactNode {
	return Array.from({ length: columnsNumber }).map((_, index: number) => (
		<Calendar.Column
			key={index}
			weekDay={index.toString() as unknown as CalendarLabelsIndex}
		/>
	));
}
