import styled from 'styled-components';
import { SectionTitle, SectionText } from '../../styles/GlobalComponents'; // Import styles from GlobalComponents.js

export const BulletPoint = styled.span`
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #fff;
	border-radius: 50%;
	margin-right: 8px;
`;

export const PersonalInfo = styled.div`
	padding: 15px;
`;
export const PersonalInfoGrid = styled(PersonalInfo)`
	display: grid; /* Use grid display for the container */
	grid-template-columns: repeat(3, 1fr); /* Three equal columns */
	gap: 12px; /* Add gap between grid items */
	padding: 12px;
	box-sizing: border-box;
	min-width: 0;
`;

export const InfoItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 12px; /* Space between items */
`;

export const InfoTitle = styled.h4`
	font-weight: bold;
	margin: 0;
	display: flex;
	align-items: center;
	font-size: 18px;
	margin-right: 8px; /* Add margin to separate from InfoDetail */
`;

export const InfoDetail = styled.span`
	font-weight: normal;
	font-size: 16px;
	padding-left: 8px;
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: -12px; /* Negative margin to compensate for padding */
`;

export const StyledSectionTitle = styled(SectionTitle)`
	font-weight: bold; /* Make the title bold */
`;
