import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
	<ButtonStyled type="button" role="button" {...rest}>
		{children}
	</ButtonStyled>
);

export default Button;
