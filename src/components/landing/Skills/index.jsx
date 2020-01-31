import React from 'react';
import { Container, Button } from 'components/common';
import profile from 'assets/illustrations/profile.svg';
import resume from 'assets/pdf/Resume - Justin Fortunato.pdf';
import {Wrapper, SkillsWrapper, Details, Thumbnail, ButtonLink} from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={profile} alt="I’m Justin and I’m a Full Stack Web Developer!" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
          I'm a full stack developer with experience working in many areas of a web project including frontend development, backend development, DevOps & server administration.
        </p>
        <ButtonLink>
          <a href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
        </ButtonLink>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
