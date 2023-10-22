import { PropsWithChildren, useEffect, Children } from 'react';
import { useCalendar } from '../../../contexts/CalendarContext';
import { StyledCalendarColumnsContainer } from './styles';

export function CalendarColumnsContainer({
	children
}: PropsWithChildren): React.FunctionComponentElement<PropsWithChildren> {
	const calendar = useCalendar();

	useEffect(() => {
		calendar.setColumnsNumber(Children.count(children));
	}, [calendar, children]);

	return (
		<StyledCalendarColumnsContainer>
			{children}
		</StyledCalendarColumnsContainer>
	);
}
