import { useEffect } from 'react';
import { useCalendar } from '../../../contexts/CalendarContext';
import { StyledCalendarColumn } from './styles';
import {
	CalendarColumnProps,
	CalendarLabels,
	CalendarLabelsIndex
} from '../../../types';

export function CalendarColumn({
	weekDay,
	renderText = renderDefaultLabel
}: CalendarColumnProps): React.FunctionComponentElement<CalendarColumnProps> {
	const calendar = useCalendar();

	useEffect(() => {
		calendar.setColumns((columns) => {
			const newValues = new Set([...columns, weekDay]);
			return [...newValues].sort();
		});
	}, [weekDay]);

	return <StyledCalendarColumn>{renderText(weekDay)}</StyledCalendarColumn>;
}

const defaultLabels: CalendarLabels = getDefaultLabels();

function renderDefaultLabel(weekDay: CalendarLabelsIndex): string {
	return defaultLabels[weekDay] as string;
}

function getDefaultLabels(): CalendarLabels {
	const baseDay = 22;
	const labels: { [key: string]: string } = {};

	for (let i = 0; i < 7; i++) {
		const baseDate = new Date(2023, 9, baseDay + i);
		const dateString = baseDate.toLocaleTimeString(navigator.language, {
			weekday: 'long'
		});
		labels[i] = dateString.substring(0, 3) + '.';
	}

	return labels;
}
