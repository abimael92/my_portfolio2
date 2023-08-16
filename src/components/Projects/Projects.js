import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionTitle main>Projects</SectionTitle>
		<SectionDivider />

		<GridContainer>
			{projects.map((p, i) => {
				// Edit projectgs
				return (
					<BlogCard key={i}>
						<Img src={p.image} />
						<TitleContent>
							<HeaderThree title>{p.title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo className='card-info'>
							{p.description}
						</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{p.tags.map((t, i) => {
									return <Tag key={i}>{t}</Tag>;
								})}
							</TagList>
						</div>
						<UtilityList>
							{p.source && (
								<ExternalLinks
									href={p.source}
									target='_blank'
									rel='noopener noreferrer'>
									Code
								</ExternalLinks>
							)}
							{p.visit && (
								<ExternalLinks
									href={p.visit}
									target='_blank'
									rel='noopener noreferrer'>
									Visit
								</ExternalLinks>
							)}
						</UtilityList>
					</BlogCard>
				);
			})}
		</GridContainer>
	</Section>
);

export default Projects;
