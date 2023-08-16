import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import {
	PaletteIconWrapper,
	PaletteIcon,
	ColorPalettePopup,
	ColorButtonGrid,
	ColorOption,
	ColorButton,
	Switch,
	SwitchInput,
	SwitchSlider,
	ModeSwitchWrapper,
	Title,
	SwitchContent,
	Icon,
} from './PaletteChangerStyles';

const PaletteChanger = ({ showPaletteMenu, setShowPaletteMenu }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<PaletteIconWrapper>
			<PaletteIcon onClick={() => setShowPaletteMenu(!showPaletteMenu)} />
			{showPaletteMenu && (
				<ColorPalettePopup>
					<ColorOption>
						<Title>Mode:</Title>
						<ModeSwitchWrapper>
							<SwitchContent>
								<Icon
									className={`icon ${
										isDarkMode ? 'inactive' : ''
									}`}>
									<FaSun />
								</Icon>
								<Switch>
									<SwitchInput
										type='checkbox'
										checked={isDarkMode}
										onChange={toggleDarkMode}
									/>
									<SwitchSlider />
								</Switch>
								<Icon
									className={`icon ${
										isDarkMode ? '' : 'inactive'
									}`}>
									<FaMoon />
								</Icon>
							</SwitchContent>
						</ModeSwitchWrapper>
					</ColorOption>

					<ColorOption>
						<Title>Presets:</Title>
						<ModeSwitchWrapper>
							<ColorButtonGrid>
								<ColorButton color='#ff0000' />
								<ColorButton color='#00ff00' />
								<ColorButton color='#0000ff' />
								<ColorButton color='#ff9900' />
								<ColorButton color='#9900cc' />
								<ColorButton color='#66ccff' />
							</ColorButtonGrid>
						</ModeSwitchWrapper>
					</ColorOption>
				</ColorPalettePopup>
			)}
		</PaletteIconWrapper>
	);
};

export default PaletteChanger;
