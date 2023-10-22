import { PropsWithChildren } from 'react';
import { CalendarProvider } from '../../../contexts/CalendarContext';
import { StyledCalendarContainer } from './styles';

export function CalendarContainer({
	children
}: PropsWithChildren): React.FunctionComponentElement<PropsWithChildren> {
	return (
		<CalendarProvider>
			<StyledCalendarContainer>{children}</StyledCalendarContainer>
		</CalendarProvider>
	);
}
