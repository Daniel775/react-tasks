import { StyledCalendarItem } from './styles';
import { CalendarItemProps } from '../../../types';

export function CalendarItem({
	itemDate,
	status,
	disabled,
	renderText
}: CalendarItemProps): React.FunctionComponentElement<CalendarItemProps> {
	return (
		<StyledCalendarItem $status={status} $disabled={disabled}>
			{!!itemDate && renderText(itemDate)}
		</StyledCalendarItem>
	);
}
