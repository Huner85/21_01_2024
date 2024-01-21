import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../componenets/SectionTitle'
import { Icon } from '../../../componenets/icon/Icon'
import { Slider } from '../../../componenets/slider/Slider'
import { FlexWrapper } from '../../../componenets/FlexWrapper'
import { IconWrapper } from '../skills/skill/Skill'
import { Container } from '../../../componenets/Container'


export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
            <IconWrapper>
                <Icon iconId={"thestimony"}/> 
            </IconWrapper>
            <Slider/>
            </FlexWrapper>
        </Container>
        </StyledTestimony>
        
    )
}

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #aeb9ff;

${IconWrapper }
    margin: 40px 0 72px;

`