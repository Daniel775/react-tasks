import styled from 'styled-components';

export const StyledCalendarItem = styled.p<{
	$status: string;
	$disabled: boolean;
}>`
	display: flex;
	opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
	visibility: ${(props) =>
		props.$status === 'hidden' ? 'hidden' : 'initial'};
	justify-content: center;
	align-items: center;
	font-family: sans-serif;
	font-size: 1rem;
	color: #3b5361;
	background-color: #ffffff;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
`;
