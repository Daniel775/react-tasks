import {
	ButtonHTMLAttributes,
	Dispatch,
	ElementType,
	ReactElement,
	ReactNode,
	SetStateAction
} from 'react';

export interface CalendarContext {
	dates: Date[];
	setDates: Dispatch<SetStateAction<Date[]>>;
	columns: CalendarLabelsIndex[];
	setColumns: Dispatch<SetStateAction<CalendarLabelsIndex[]>>;
	columnsNumber: number;
	setColumnsNumber: Dispatch<SetStateAction<number>>;
	selectedItem: number | null;
	setSelectedItem: Dispatch<SetStateAction<number | null>>;
}

export interface CalendarContainerProps {
	/** A node of components to be rendered inside the calendar */
	children: ReactNode;
	/**
	 * A callback to be called every time the selected date changes
	 * @param selectedDate the new date selected
	 * @returns void
	 */
	onSelectionChanged?: (selectedDate: Date | null) => void;
}

export interface CalendarHeaderProps {
	/** A string to be rendered on the header */
	text?: string;
}

export interface CalendarColumnProps {
	/**
	 * The index of the week day the column corresponds.
	 * Start at '0' for sunday and ends at '6' for sunday
	 */
	weekDay: CalendarLabelsIndex;
	/**
	 * A function that renders the label of a column
	 * @param weekDay The index corresponding to the column
	 * @returns A string or an element to be rendered
	 */
	renderText?: (weekDay: CalendarLabelsIndex) => string | ReactElement;
}

export interface CalendarItemsContainerProps {
	/** The start of the range of dates to be displayed */
	startDate: Date;
	/** The end of the range of dates to be displayed */
	endDate: Date;
	/** Defines if the calendar will render dates outside of the defined
	 * range to fill all empty slots on the rows */
	fillEmptySlots?: boolean;
	/**
	 * A function responsible for rendering the items within the calendar
	 * @param itemData The props of the calendar item element
	 * @param key A unique key for the element
	 * @returns The react element to be displayed on the calendar
	 */
	renderItem?: (
		itemData: CalendarItemProps,
		key: number | string
	) => ReactElement;
}

export interface CalendarItemProps {
	/** The date of the item */
	itemDate: Date;
	/** Defines if the user can interact with the item */
	disabled: boolean;
	/** The status of the item. This change the style according the status */
	status: 'normal' | 'pending' | 'alert' | 'done' | 'hidden';
	/**
	 * A function responsible for rendering the item text
	 * @param date The date of the item
	 * @returns A string or Element to be rendered on the item
	 */
	renderText: (date: Date) => string | ReactElement;
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

export type CalendarLabelsIndex = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export interface TaskComponentProps {
	/** A node of components to be rendered inside the task component */
	children: ReactNode;
	/** A icon element to be rendered on the left corner of the task */
	icon?: ElementType;
}

export interface TaskActionProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** A icon to bee rendered inside the action button */
	icon: ElementType;
}
