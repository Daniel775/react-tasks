import { useEffect } from 'react';
import { useCalendar } from '../../../contexts/CalendarContext';
import { StyledCalendarColumn } from './styles';
import {
	CalendarColumnProps,
	CalendarLabels,
	CalendarLabelsIndice
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

const defaultLabels: CalendarLabels = {
	'0': 'dom.',
	'1': 'seg.',
	'2': 'ter.',
	'3': 'qua.',
	'4': 'qui.',
	'5': 'sex.',
	'6': 'sáb'
};

function renderDefaultLabel(weekDay: CalendarLabelsIndice): string {
	return defaultLabels[weekDay] as string;
}
