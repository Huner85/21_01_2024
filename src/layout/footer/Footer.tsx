import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../componenets/icon/Icon'
import { FlexWrapper } from '../../componenets/FlexWrapper'
import { theme } from '../../styles/Theme'

export const Footer = () => {
    return (
        <StyledFooter>
           <FlexWrapper direction={'column'} align={'center'}>
           <Name>Dzmitry</Name>
            <SocialList>
                    <SocialItem>
                        <SocialLink>
                                 <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                                 <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                                 <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                                 <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
            </SocialList>
                <Copyright>© 2024 Dzmitry Shuiko, All Rights Reserved.</Copyright>
            </FlexWrapper> 
           
        </StyledFooter>
    )
}
const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-size: 22px;

    @media ${theme.media.mobile}
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialLink = styled.a`
border-radius: 50%;
background: rgba(255, 255, 255, 0.10);
width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;

color: ${theme.colors.accent};

&:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
}


    
`
const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;

`
const SocialItem = styled.li`
    
`
