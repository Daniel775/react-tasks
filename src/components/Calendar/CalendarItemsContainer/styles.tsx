import styled from 'styled-components';

export const StyledCalendarItemsContainer = styled.section<{
	$columnsNumber: number;
}>`
	display: grid;
	grid-template-columns: repeat(${(props) => props.$columnsNumber}, auto);
	justify-content: space-between;
`;
