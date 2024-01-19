import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/Foto.jpg'
import { FlexWrapper } from "../../../componenets/FlexWrapper";
import { Container } from "../../../componenets/Container";
import { theme } from "../../../styles/Theme";



export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-between">
                    <div>
                        <span>Hi There</span>
                        <Name>I am Dzmitry Shuiko</Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>

                    <Photo src={photo} alt="" />
                </FlexWrapper>
            </Container>
            
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    color: white;
`

const Photo = styled.img`
    width: 300px;
    height: 420px;
    object-fit: cover;
    gap: 20px;
`

const MainTitle = styled.h1`
    gap: 20px;
    
`
const Name = styled.h2`
    
`