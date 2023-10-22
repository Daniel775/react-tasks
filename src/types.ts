import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface CalendarContext {
	dates: Date[];
	setDates: Dispatch<SetStateAction<Date[]>>;
	columns: CalendarLabelsIndice[];
	setColumns: Dispatch<SetStateAction<CalendarLabelsIndice[]>>;
	columnsNumber: number;
	setColumnsNumber: Dispatch<SetStateAction<number>>;
	selectedItem: number | null;
	setSelectedItem: Dispatch<SetStateAction<number | null>>;
}

export interface CalendarHeaderProps {
	text?: string;
}

export interface CalendarColumnProps {
	weekDay: CalendarLabelsIndice;
	renderText?: (weekDay: CalendarLabelsIndice) => string | ReactElement;
}

export interface CalendarItemsContainerProps {
	startDate: Date;
	endDate: Date;
	fillEmptySlots?: boolean;
	renderItem?: (
		itemData: CalendarItemProps,
		key: number | string
	) => ReactElement;
}

export interface CalendarItemProps {
	itemDate: Date | null;
	disabled: boolean;
	status: 'normal' | 'pending' | 'alert' | 'hidden';
	renderText: (date: Date) => string | ReactElement;
	onClick?: (date: Event) => void;
}

export interface CalendarLabels {
	'0'?: string;
	'1'?: string;
	'2'?: string;
	'3'?: string;
	'4'?: string;
	'5'?: string;
	'6'?: string;
}

export type CalendarLabelsIndice = '0' | '1' | '2' | '3' | '4' | '5' | '6';
