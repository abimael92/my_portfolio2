import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:614-510-5402'>(614)-510-5402</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:abimael1992g@gmail.com'>
						abimael1992g@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>
						My Portfolio
						<br />
						Abimael Garcia (Web Developer)
					</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='http://github.com/abimael92'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='h7ps://www.linkedin.com/in/abimael-garcia-00580314a/'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons href='mailto:abimael199g@gmail.com'>
						<AiOutlineMail size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
