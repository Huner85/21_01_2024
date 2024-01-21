import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=''/>
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

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a`
    gap: 20px;

`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`