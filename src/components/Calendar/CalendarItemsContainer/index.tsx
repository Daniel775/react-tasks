import { useEffect, ReactNode } from 'react';
import { useCalendar } from '../../../contexts/CalendarContext';
import { CalendarItem } from '../CalendarItem';
import { StyledCalendarItemsContainer } from './styles';
import {
	CalendarItemsContainerProps,
	CalendarItemProps,
	CalendarLabelsIndice
} from '../../../types';

export function CalendarItemsContainer({
	startDate,
	endDate,
	fillEmptySlots = true,
	renderItem = (props, key) => <CalendarItem key={key} {...props} />
}: CalendarItemsContainerProps): React.FunctionComponentElement<CalendarItemsContainerProps> {
	const calendar = useCalendar();

	useEffect(() => {
		const range = getDatesRange(startDate, endDate);
		calendar.setDates(
			filterDates(range, calendar.columns as CalendarLabelsIndice[])
		);
	}, [calendar.columns]);

	function _renderItems(): ReactNode | null {
		if (!calendar.dates.length) {
			return null;
		}

		const firsItemIndex = calendar.columns.indexOf(
			calendar.dates[0].getDay().toString() as CalendarLabelsIndice
		);

		const initialEmptyItems = getInitinalEmptyCalendarItems(
			firsItemIndex,
			calendar.columns,
			calendar.dates[0]
		);

		const finalEmptyItems = getFinalEmptyCalendarItems(
			initialEmptyItems.length + calendar.dates.length,
			calendar.columns.length,
			calendar.dates[calendar.dates.length - 1]
		);

		setCalendarItemsStatus(initialEmptyItems, fillEmptySlots);
		setCalendarItemsStatus(finalEmptyItems, fillEmptySlots);

		const items = calendar.dates.map((date): CalendarItemProps => {
			return {
				disabled: false,
				status: 'normal',
				itemDate: date,
				renderText: (date: Date) => date.getDate().toString()
			};
		});

		return [...initialEmptyItems, ...items, ...finalEmptyItems].map(
			(props, index) => renderItem(props, index)
		);
	}

	return (
		<StyledCalendarItemsContainer $columnsNumber={calendar.columnsNumber}>
			{_renderItems()}
		</StyledCalendarItemsContainer>
	);
}

function getInitinalEmptyCalendarItems(
	firstValidItemIndex: number,
	columns: CalendarLabelsIndice[],
	baseDate: Date
): CalendarItemProps[] {
	const items: CalendarItemProps[] = [];

	for (const index of columns.keys()) {
		if (index === firstValidItemIndex) {
			break;
		}

		const itemDate = new Date(baseDate.getTime());
		itemDate.setDate(itemDate.getDate() - index - 1);

		items.push({
			disabled: true,
			status: 'normal',
			itemDate: itemDate,
			renderText: (date: Date) => date.getDate().toString()
		});
	}

	return items.reverse();
}

function getFinalEmptyCalendarItems(
	itemsNumber: number,
	columnsNumber: number,
	baseDate: Date
): CalendarItemProps[] {
	const items: CalendarItemProps[] = [];

	const numberOfItems = Array(
		columnsNumber - (itemsNumber % columnsNumber)
	).keys();

	for (const index of numberOfItems) {
		const itemDate = new Date(baseDate.getTime());
		itemDate.setDate(itemDate.getDate() + index + 1);

		items.push({
			disabled: true,
			status: 'normal',
			itemDate: itemDate,
			renderText: (date: Date) => date.getDate().toString()
		});
	}

	return items;
}

function getDatesRange(startDate: Date, endDate: Date): Date[] {
	const date = new Date(startDate.getTime());
	const rangeDates = [];

	while (date <= endDate) {
		rangeDates.push(new Date(date));
		date.setDate(date.getDate() + 1);
	}

	return rangeDates;
}

function filterDates(range: Date[], weekDays: CalendarLabelsIndice[]) {
	return range.filter((date) => {
		return weekDays.includes(
			date.getDay().toString() as CalendarLabelsIndice
		);
	});
}

function setCalendarItemsStatus(
	data: CalendarItemProps[],
	fillEmptySlots: boolean
) {
	data.forEach((data) => {
		if (!data.itemDate && !fillEmptySlots) {
			data.status = 'hidden';
		}
	});
}
