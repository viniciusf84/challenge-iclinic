import React, { ButtonHTMLAttributes } from 'react';

import { BorderlessButton } from './GoBack.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string;
	text: string;
}

const GoBack: React.FC<ButtonProps> = ({ children, icon, text, ...rest }) => (
	<BorderlessButton type="button" role="button" {...rest}>
		<img src={icon} alt="back" /> <span>{text}</span>
	</BorderlessButton>
);

export default GoBack;
