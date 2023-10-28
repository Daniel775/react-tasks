import styled from 'styled-components';

export const TasksArea = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const TaskContainer = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 25px;
	padding: 10px 25px;
	background-color: #3b5361;
	border-radius: 20px;
	min-height: 90px;
`;

export const TaskTextArea = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 10px;
`;

export const TaskHeader = styled.h2`
	font-size: 1.25rem;
	font-family: sans-serif;
	color: #ffffff;
	margin: 0px;
`;

export const TaskMessage = styled.p`
	font-size: 1rem;
	font-family: sans-serif;
	color: #ffffff;
	margin: 0px;
`;

export const TaskButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

export const TaskButton = styled.button`
	background: transparent;
	border: none;
`;
