import React from "react";
import styled from "styled-components";
import { Logo } from "../../componenets/Logo";
import { Container } from "../../componenets/Container";
import { FlexWrapper } from "../../componenets/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";

const items = ["Home","Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
            <Logo/> 
            <HeaderMenu menuItems={items}/>
            </FlexWrapper>
            </Container>  
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    backgraund: rgba(31, 31, 32, 8.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

`