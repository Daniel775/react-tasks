import { CalendarHeaderProps } from '../../../types';
import { StyledCalendarHeader } from './styles';

export function CalendarHeader({
	text = getDefaultCalendarTitle()
}: CalendarHeaderProps): React.FunctionComponentElement<CalendarHeaderProps> {
	return <StyledCalendarHeader>{text}</StyledCalendarHeader>;
}

export function getDefaultCalendarTitle(): string {
	const today = new Date();

	return today.toLocaleDateString('pt-BR', {
		month: 'long',
		year: 'numeric'
	});
}
