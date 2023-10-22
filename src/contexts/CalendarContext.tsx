import { createContext, useState, useContext, PropsWithChildren } from 'react';
import { CalendarContext, CalendarLabelsIndice } from '../types';

const calendarContext = createContext<CalendarContext>({} as CalendarContext);

export const CalendarProvider = ({ children }: PropsWithChildren) => {
	const [dates, setDates] = useState<Date[]>([]);
	const [columns, setColumns] = useState<CalendarLabelsIndice[]>([]);
	const [columnsNumber, setColumnsNumber] = useState<number>(0);
	const [selectedItem, setSelectedItem] = useState<number | null>(null);

	return (
		<calendarContext.Provider
			value={{
				columnsNumber,
				setColumnsNumber,
				selectedItem,
				setSelectedItem,
				dates,
				setDates,
				columns,
				setColumns
			}}
		>
			{children}
		</calendarContext.Provider>
	);
};

export function useCalendar() {
	return useContext(calendarContext);
}
