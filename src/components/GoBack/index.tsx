import React, { ButtonHTMLAttributes } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { BorderlessButton } from './GoBack.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

const GoBack: React.FC<ButtonProps> = ({ children, text, ...rest }) => (
	<BorderlessButton type="button" role="button" {...rest}>
		<FiArrowLeft /> {text}
	</BorderlessButton>
);

export default GoBack;
