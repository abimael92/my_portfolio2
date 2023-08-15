// ExperienceStyles.js
import styled from 'styled-components';

export const CarouselContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	scroll-snap-type: x mandatory;
`;

export const CarouselButtons = styled.div`
	width: 100%; /* Full width */
	display: flex;
	justify-content: center; /* Center align the buttons */
	margin-bottom: 48px; /* Add some margin to the bottom */
`;

export const CarouselButton = styled.button`
	box-sizing: border-box;
	background: none;
	font-size: 800;
	padding: 4px;
	border-radius: 30px;
	border: none;
	cursor: pointer;
	margin: 0 4px;
	opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
	transform: ${(props) =>
		props.active === props.index ? `scale(1.6)` : `scale(1)`};
	color: white; /* Set button color to white */

	&:hover {
		box-shadow: 0 0 10px rgba(255, 255, 255, 1); /* White glow effect */
		border-radius: 30px;
	}

	&:focus {
		outline: none;
		border-radius: 30px;
	}
`;
export const ArrowButton = styled.button`
	box-sizing: border-box;
	background: none;
	padding: 4px;
	border: none;
	cursor: pointer;
	margin: 0 4px;

	font-size: 800;
	border-radius: 30px;
	color: white; /* Set button color to white */

	&:hover {
		box-shadow: 0 0 10px rgba(255, 255, 255, 1);
	}

	&:focus {
		outline: none;
	}
`;

export const CarouselButtonDot = styled.div`
	background-color: white;
	border-radius: 30px;
	margin: auto;
	width: 8px;
	height: 8px;

	box-shadow: ${(props) =>
		props.active === props.index
			? 'none' /* No shadow when active */
			: '0 0 10px rgba(255, 255, 255, 1)'};
`;
export const CarouselMobileScrollNode = styled.div`
	display: flex;
	min-width: 100%;
	scroll-snap-type: x mandatory;
	justify-content: space-between;
`;

export const CarouselItem = styled.div`
	min-width: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	opacity: ${(props) => (props.active === props.index ? 1 : 0.5)};
	transition: opacity 0.3s;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1rem;
	margin: 0.5rem;
	z-index: ${(props) => (props.active === props.index ? 2 : 1)};
`;

export const CarouselItemTitle = styled.h4`
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	color: #fff;
	text-align: center;
	margin: 10px auto 0;

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 20px;
	}
`;

export const CarouselTimeLine = styled.div`
	width: 100%;
	position: relative;
`;

export const CarouselItemDot = styled.div`
	background-color: ${(props) => (props.active ? '#007BFF' : 'transparent')};
	border-radius: 50%;
	width: 12px;
	height: 12px;
	margin: 0 auto;
	position: relative;
	z-index: 1;
`;

export const CarouselLine = styled.div`
	background-color: #007bff;
	height: 2px;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	width: 100%;
	z-index: 0;
	display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const CarouselItemText = styled.p`
	font-size: 14px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	padding-right: 16px;
	margin-top: 10px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
		padding-right: 0;
	}
`;

export const CarouselHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: bold;
	justify-content: space-between;
`;

export const CarouselHeaderRight = styled.div`
	margin-left: auto;
	align-items: center;
	display: inline-block;
`;

export const CarouselCompany = styled.span`
	margin-right: 4px;
`;

export const CarouselPosition = styled.span`
	margin-left: 4px;
`;

export const CalendarIcon = styled.span`
	font-size: 12px;
	margin-right: 4px;
`;

export const CarouselItemTextBold = styled.p`
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	padding-right: 16px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 14px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 12px;
		line-height: 16px;
		padding-right: 0;
	}
`;

export const AchievementList = styled.ul`
	padding-left: 20px; /* Add some padding to align bullet points */
	font-size: 14px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	padding-right: 16px;
	margin-top: 10px;

	li::before {
		content: '•';
		color: rgba(255, 255, 255, 0.75);
		margin-right: 8px;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
		padding-right: 0;
	}
`;
