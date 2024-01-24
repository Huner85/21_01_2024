import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/Foto.jpg'
import { FlexWrapper } from "../../../componenets/FlexWrapper";
import { Container } from "../../../componenets/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";




export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap="wrap">
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Dzmitry Shuiko</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>

                    <PhotoWrapper>
                    <Photo src={photo} alt="" />
                    </PhotoWrapper>
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
const PhotoWrapper =  styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        z-index: -1;

        @media ${theme.media.mobile}{
            width: 314px;
            height: 414px;
        }
        

    }
`

const Photo = styled.img`
    width: 300px;
    height: 420px;
    object-fit: cover;
    gap: 20px;
    margin-right: 20px;

@media  ${theme.media.mobile} {
        width: 310px;
        height: 380px;
        top: -17px;
        left: 20px;

    }
    
`
const SmallText = styled.span`
    ${font( {weight: 700, Fmax: 27, Fmin: 20})}
`

const MainTitle = styled.h1`
    ${font( {weight: 700, Fmax: 27, Fmin: 20})}
`
const Name = styled.h2`
    ${font( {family: "sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    /* font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 50px; */
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

@media ${theme.media.mobile} {
    margin: 15px 0 22px;
}
`
