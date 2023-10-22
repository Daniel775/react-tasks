import { useEffect } from 'react';
import {
	useCalendar,
	CalendarProvider
} from '../../../contexts/CalendarContext';
import { StyledCalendarContainer } from './styles';
import { CalendarContainerProps } from '../../../types';

function Container({
	children,
	onSelectionChanged
}: CalendarContainerProps): React.FunctionComponentElement<CalendarContainerProps> {
	const calendar = useCalendar();

	useEffect(() => {
		if (!onSelectionChanged) {
			return;
		}
		onSelectionChanged(
			!calendar.selectedItem ? null : new Date(calendar.selectedItem)
		);
	}, [calendar.selectedItem]);

	return <StyledCalendarContainer>{children}</StyledCalendarContainer>;
}

export const CalendarContainer = (props: CalendarContainerProps) => (
	<CalendarProvider>
		<Container {...props} />
	</CalendarProvider>
);
