import React, { useState, useRef, useEffect } from 'react';
import {
	AchievementList,
	ArrowButton,
	CarouselContainer,
	CarouselMobileScrollNode,
	CarouselHeader,
	CarouselHeaderRight,
	CalendarIcon,
	CarouselCompany,
	CarouselItemTextBold,
	CarouselPosition,
	CarouselItem,
	CarouselItemTitle,
	CarouselItemDot,
	CarouselItemText,
	CarouselButtons,
	CarouselButton,
	CarouselButtonDot,
	CarouselLine,
	CarouselTimeLine,
} from './ExperienceStyles'; // Your style definitions

import {
	Section,
	SectionDivider,
	SectionTitle,
	SectionSmallText,
} from '../../styles/GlobalComponents'; // Your other components

import { Calendar } from '@styled-icons/boxicons-regular';

import { TimeLineData } from '../../constants/constants'; // Your data

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Experience = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: 'smooth' });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * (i / TOTAL_CAROUSEL_COUNT)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					carouselRef.current.scrollWidth) *
					TOTAL_CAROUSEL_COUNT
			);

			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const extractYear = (dateString) => {
		const parts = dateString.split('/');
		if (parts.length >= 3) {
			const yearPart = parts[2];
			if (yearPart.length >= 4) {
				return yearPart.substring(0, 4);
			}
		}
		return '';
	};

	const handleBack = () => {
		if (activeItem > 0) {
			setActiveItem(activeItem - 1);
			scroll(
				carouselRef.current,
				(activeItem - 1) * carouselRef.current.offsetWidth
			);
		}
	};

	const handleForward = () => {
		if (activeItem < TOTAL_CAROUSEL_COUNT - 1) {
			setActiveItem(activeItem + 1);
			scroll(
				carouselRef.current,
				(activeItem + 1) * carouselRef.current.offsetWidth
			);
		}
	};

	return (
		<Section id='experience'>
			<SectionTitle>Experience</SectionTitle>
			<SectionDivider />
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<CarouselMobileScrollNode>
					{TimeLineData.map((item, index) => (
						<CarouselItem
							key={index}
							index={index}
							active={activeItem}
							onClick={(e) => handleClick(e, index)}>
							<CarouselItemTitle>
								{extractYear(item.date)}
							</CarouselItemTitle>
							<CarouselTimeLine>
								<CarouselLine active={activeItem === index} />
								<CarouselItemDot
									active={activeItem === index}
								/>
							</CarouselTimeLine>
							<CarouselHeaderRight>
								<CarouselItemTitle>
									<CalendarIcon>
										<Calendar size='20' />
									</CalendarIcon>
									{item.date}
								</CarouselItemTitle>
							</CarouselHeaderRight>
							<CarouselHeader>
								<CarouselCompany>
									{item.company}
								</CarouselCompany>
								<span>|</span>
								<CarouselPosition>
									{item.position}
								</CarouselPosition>
							</CarouselHeader>
							<br />
							<CarouselItemTextBold>
								Description:
							</CarouselItemTextBold>
							<SectionSmallText>
								{item.description}
							</SectionSmallText>
							<br />
							<CarouselItemTextBold>
								Achievements:
							</CarouselItemTextBold>
							<AchievementList>
								{item.achievements.map((achievement, i) => (
									<li key={i}>{achievement}</li>
								))}
							</AchievementList>
						</CarouselItem>
					))}
				</CarouselMobileScrollNode>
			</CarouselContainer>
			<CarouselButtons>
				<ArrowButton onClick={handleBack}>&lt;</ArrowButton>
				{TimeLineData.map((item, index) => {
					return (
						<CarouselButton
							key={index}
							index={index}
							active={activeItem}
							onClick={(e) => handleClick(e, index)}
							type='button'>
							<CarouselButtonDot active={activeItem} />
						</CarouselButton>
					);
				})}
				<ArrowButton onClick={handleForward}>&gt;</ArrowButton>
			</CarouselButtons>
		</Section>
	);
};

export default Experience;
