import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { grey } from '@mui/material/colors';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${grey[50]};

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default StyledLink