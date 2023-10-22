import styled, { css } from 'styled-components';

const statusStyles = css<{ $status: string }>`
	border-width: 3px;
	border-style: solid;
	border-color: ${(porps) => {
		switch (porps.$status) {
			case 'done':
				return '#07bc0c';
			case 'pending':
				return '#f1c40f';
			case 'alert':
				return '#e74c3c';
			default:
				return '#ffffff';
		}
	}};
`;

export const StyledCalendarItem = styled.p<{
	$status: string;
	$disabled: boolean;
	$selected: boolean;
}>`
	display: flex;
	position: relative;
	opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
	visibility: ${(props) =>
		props.$status === 'hidden' ? 'hidden' : 'initial'};
	justify-content: center;
	align-items: center;
	font-family: sans-serif;
	font-size: 1rem;
	font-weight: 500;
	color: ${(props) => (props.$selected ? '#ffffff' : '#3b5361')};
	background-color: ${(props) => (props.$selected ? '#25343D' : '#ffffff')};
	width: 38px;
	height: 38px;
	border-radius: 50%;
	cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
	user-select: none;
	${statusStyles}
`;
