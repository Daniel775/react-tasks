import {
	createContext,
	useState,
	useContext,
	PropsWithChildren,
	useMemo
} from 'react';
import { CalendarContext, CalendarLabelsIndex } from '../types';

const calendarContext = createContext<CalendarContext>({} as CalendarContext);

export const CalendarProvider = ({ children }: PropsWithChildren) => {
	const [dates, setDates] = useState<Date[]>([]);
	const [columns, setColumns] = useState<CalendarLabelsIndex[]>([]);
	const [columnsNumber, setColumnsNumber] = useState<number>(0);
	const [selectedItem, setSelectedItem] = useState<number | null>(null);

	const contextValue = useMemo(
		() => ({
			columnsNumber,
			setColumnsNumber,
			selectedItem,
			setSelectedItem,
			dates,
			setDates,
			columns,
			setColumns
		}),
		[columnsNumber, selectedItem, dates, columns]
	);

	return (
		<calendarContext.Provider value={contextValue}>
			{children}
		</calendarContext.Provider>
	);
};

export function useCalendar() {
	return useContext(calendarContext);
}
