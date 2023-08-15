import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {
	AiFillAccountBook,
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineMail,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';

// Calculate the pixel value equivalent of 3rem based on the root font size
const remToPixels = (rem) => rem * 16;

const Header = () => (
	<Container>
		<Div1>
			<Link href='/' legacyBehavior>
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginBottom: '20px',
					}}
					legacyBehavior>
					<Image
						src='/images/Kachorro92_Logo.png'
						alt='Logo'
						width={remToPixels(3)}
						height={remToPixels(3)}
						style={{
							margin: '6px',
						}}
					/>
					{/* <DiCssdeck size='3rem' /> */}
					<Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href='#about' legacyBehavior>
					<NavLink>About</NavLink>
				</Link>
			</li>{' '}
			<li>
				<Link href='#tech' legacyBehavior>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>{' '}
			<li>
				<Link href='#experience' legacyBehavior>
					<NavLink>Experience</NavLink>
				</Link>
			</li>{' '}
			<li>
				<Link href='#projects' legacyBehavior>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#achievements' legacyBehavior>
					<NavLink>Achievements</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href='http://github.com/abimael92'>
				<AiFillGithub size='3rem' />
			</SocialIcons>
			<SocialIcons href='h7ps://www.linkedin.com/in/abimael-garcia-00580314a/'>
				<AiFillLinkedin size='3rem' />
			</SocialIcons>
			<SocialIcons href='mailto:abimael199g@gmail.com'>
				<AiOutlineMail size='3rem' />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
