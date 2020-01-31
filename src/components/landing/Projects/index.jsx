import React from 'react';
import { Container } from 'components/common';
import github from 'assets/icons/github.svg';
import earth from 'assets/icons/earth.svg';
import {
    Description,
    Grid,
    Header,
    Image,
    ProjectCard,
    Content,
    ProjectLink,
    Title,
    Wrapper,
    Year
} from './styles';
import { projects } from './projects';

projects.sort((a, b) => b.yearLaunched - a.yearLaunched);

export const Projects = () => {
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>

        <Grid>
            {projects.map((project) => (
                <ProjectCard>
                    <Header>
                        <Title>{project.title}</Title>
                        <Year><span>{project.yearLaunched}</span></Year>
                        { project.sourceLink &&
                        <ProjectLink><a href={project.sourceLink} target="_blank" rel="noopener noreferrer"><img src={github} alt="View Source Code" title="View Source Code"/></a></ProjectLink>
                        }
                        { project.viewLink &&
                        <ProjectLink><a href={project.viewLink} target="_blank" rel="noopener noreferrer"><img src={earth} alt="View Live Application" title="View Live Application"/></a></ProjectLink>
                        }
                    </Header>
                    <Content>
                        <Description>{project.description}</Description>
                        { project.logo &&
                        <Image><img src={project.logo} alt=""/></Image>
                        }
                    </Content>
                </ProjectCard>
            ))}
        </Grid>
</Wrapper>
  )
}
