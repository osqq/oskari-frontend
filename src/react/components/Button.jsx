import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { ThemeConsumer } from 'oskari-ui/util';
import { getNavigationTheme } from 'oskari-ui/theme';

export const Button = ({ children, className = '', loading = false, ...other }) => {
    const modifiedClass = className.includes('t_button') ? className : `t_button ${className}`;
    return (<AntButton className={modifiedClass} loading={loading} {...other}>{children}</AntButton>);
};

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    loading: PropTypes.bool
};

const StyledButton = styled(Button)`
    background: ${props => props.theme.getAccent()};
    border: none;
    color: inherit;
    fill: currentColor;

    &:focus,
    &:active,
    &&&:hover {
        background: ${props => props.theme.getAccentHover()};
        color: inherit;
        border: none;
    }
`;

export const ThemedButton = ThemeConsumer(({ theme, children, ...other }) => {
    return <StyledButton theme={getNavigationTheme(theme)} {...other}>{children}</StyledButton>;
});

ThemedButton.propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.any
};
