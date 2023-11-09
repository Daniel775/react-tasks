import { StyledCalendarItem } from './styles';
import { CalendarItemProps } from '../../../types';
import { useCalendar } from '../../../contexts/CalendarContext';

export function CalendarItem({
	itemDate,
	status,
	disabled,
	renderText
}: CalendarItemProps): React.FunctionComponentElement<CalendarItemProps> {
	const calendar = useCalendar();
	const itemTime = itemDate.getTime();

	function handleSelection() {
		if (disabled) {
			return;
		}

		calendar.setSelectedItem(itemTime);
	}

	return (
		<StyledCalendarItem
			$status={status}
			$disabled={disabled}
			$selected={calendar.selectedItem === itemTime}
			onClick={handleSelection}
		>
			{!!itemDate && renderText(itemDate)}
		</StyledCalendarItem>
	);
}
