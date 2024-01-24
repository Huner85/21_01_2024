import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link, ListItem, Mask } from "../headerMenu/HeaderMenu";



export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuWrapper isOpen={true}>
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
            </MobileMenuWrapper>
                
            </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        /* display: block; */
    }
`
const MobileMenuWrapper = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: rgba(31, 31, 32, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        ` }

  ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999999;

    span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);
    ` }    

    &::before {
    content: "";
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    transform: translateY(-10px);

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
    ` } 
    }
    &::after {}
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    transform: translateY(10px);

    ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: rotate(45deg) translateY(0);
    width: 36px;
    ` } 
    }

`

