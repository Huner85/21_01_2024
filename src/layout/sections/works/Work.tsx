import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Button } from '../../../componenets/Button'

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=''/>
                <Button>view project</Button>
            </ImageWrapper>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
            
        </StyledWork>
    )
}
const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 330px;
    flex-grow: 1;  
    
@media ${theme.media.desktop} {
    max-width: 540px;
}

`
const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        ${Button} {
            opacity: 1;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }

    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const ListItem = styled.li`
    position: relative;
`
const Link = styled.a`
    gap: 20px;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;

    &:hover {
        &::before {
        content: "";
        display: inline-block;
        height: 10px;

        position: absolute;
        bottom: 0;
        left: -10px;
        right: -10px;
        background-color: ${theme.colors.accent};

    }

    
    `


const Title = styled.h3`
    
`

const Text = styled.p`
    
`