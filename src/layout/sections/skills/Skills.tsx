import styled from "styled-components";
import { FlexWrapper } from "../../../componenets/FlexWrapper";
import { SectionTitle } from "../../../componenets/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../componenets/Container";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
           <Skill iconId={"code"} title={"html5"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
           <Skill iconId={"css"} title={"css3"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
           <Skill iconId={"react"} title={"react"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
           <Skill iconId={"ts"} title={"ts"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
           <Skill iconId={"vector"} title={"Styled Components"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            <Skill iconId={"webDesign"} title={"Web Desighn"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

            </FlexWrapper>
            </Container>
        </StyledSkills>

    );
};

const StyledSkills = styled.section`
  background-color: #ffe5e4;
  min-height: 100vh;
  
`