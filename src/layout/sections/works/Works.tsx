import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../componenets/SectionTitle'
import { Menu } from '../../menu/Menu'
import { FlexWrapper } from '../../../componenets/FlexWrapper'
import { Work } from './Work'
import socialImg from "../../../assets/images/Rectangle14.jpg"
import timerImg from "../../../assets/images/Rectangle16.jpg"
import { Container } from '../../../componenets/Container'

const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify='space-around' align='flex-start' wrap="wrap">
            <Work title={'Social Network'}
            src={socialImg}
             text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'/>

            <Work title={'Timer'} 
            src={timerImg}
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'/>

            
            </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`