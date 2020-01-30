import React from 'react';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import resume from 'assets/pdf/Resume - Justin Fortunato.pdf';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Justin and I’m a Full Stack Web Developer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I'm a full stack developer with experience working in many areas of a web project including frontend development, backend development, devops & server administration.
        </p>
        <Button>
          <a href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
