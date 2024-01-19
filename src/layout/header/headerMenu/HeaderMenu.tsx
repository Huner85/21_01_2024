import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";



export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
                <ul>

                {props.menuItems.map((item :string, index: number)=>{
                return <ListItem key={index}>
                    <Link href="">
                        {item}
                        <Mask>
                            <span>{item}</span>
                        </Mask>
                         <Mask>
                            <span>{item}</span>
                        </Mask>
                    </Link>
                </ListItem>

                })}
                </ul>
            </StyledHeaderMenu>
    );
};

export const StyledHeaderMenu = styled.nav`
ul {
        display: flex;
        gap: 30px;
    justify-content: center;
}
`
export const ListItem = styled.li`
position: relative;

&:hover {
    /* &{Mask} {
        transform: skewX(12deg); translateX(5px);
    } */
}
`

export const Link = styled.a`
font-family: sans-serif;
font-weight: 400;
font-size: 30px;
text-align: center;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    /* outline: 1px solid red; */
    color: ${theme.colors.accent};
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

