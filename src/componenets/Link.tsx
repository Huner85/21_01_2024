import styled from "styled-components";
import { theme } from "../styles/Theme";

export const LinkComponent = styled.a`
    
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    white-space: nowrap;

    &:hover {
        &::before {
            height: 10px;
        }
    };

    &::before {
        content: "";
        display: inline-block;
        /* height: 10px; */
        background-color: ${theme.colors.accent};

        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        z-index: -1;
    }
`
