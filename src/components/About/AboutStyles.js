import styled from 'styled-components';
import {
	SectionTitle,
	SectionText as GlobalSectionText,
} from '../../styles/GlobalComponents';

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

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const AboutSectionText = styled(GlobalSectionText)`
	max-width: 800px;
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	padding-bottom: 1.6rem;
	margin-right: 2.6rem;
	color: rgba(255, 255, 255, 0.5);

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 32px;
		padding-bottom: 1.2rem;
		margin-right: 2.2rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
		padding-bottom: 0.8rem;
		margin-right: 1.8rem;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
	margin-left: 3rem;
	border: 4px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: 0;
		margin-top: 1rem;
		max-width: 50%;
	}
`;
