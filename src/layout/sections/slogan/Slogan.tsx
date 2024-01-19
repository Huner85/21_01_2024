import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../componenets/SectionTitle'
import { Button } from '../../../componenets/Button'
import { Container } from '../../../componenets/Container'
import { FlexWrapper } from '../../../componenets/FlexWrapper'

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
            </FlexWrapper>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
        min-height: 30vh;
    background-color: #c2bcbc;
    `
