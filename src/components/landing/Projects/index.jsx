import React from 'react';
import {Container} from 'components/common';
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

export const Projects = () => {
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>

        <Grid>
            <ProjectCard>
                <Header>
                    <Title>Test Project</Title>
                    <Year><span>2019</span></Year>
                    <ProjectLink><img src="/icons/github.svg" alt="Source Code" title="View Source"/></ProjectLink>
                    <ProjectLink><img src="/icons/stackoverflow.svg" alt="View Live Application" title="View Live Application"/></ProjectLink>
                </Header>
                <Content>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut cum enim eum ipsum, iure officia perferendis quasi ratione recusandae!</Description>
                    <Image><img src="/icons/telegram.svg" alt=""/></Image>
                </Content>
            </ProjectCard>
            <ProjectCard>
                <Header>
                    <Title>Test Project</Title>
                    <Year><span>2019</span></Year>
                    <ProjectLink><img src="/icons/github.svg" alt="Source Code"/></ProjectLink>
                    <ProjectLink><img src="/icons/stackoverflow.svg" alt="View Live Application"/></ProjectLink>
                </Header>
                <Content>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut cum enim eum ipsum, iure officia perferendis quasi ratione recusandae!</Description>
                    <Image><img src="/icons/telegram.svg" alt=""/></Image>
                </Content>
            </ProjectCard>
            <ProjectCard>
                <Header>
                    <Title>Test Project</Title>
                    <Year><span>2019</span></Year>
                    <ProjectLink><img src="/icons/github.svg" alt="Source Code"/></ProjectLink>
                    <ProjectLink><img src="/icons/stackoverflow.svg" alt="View Live Application"/></ProjectLink>
                </Header>
                <Content>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut cum enim eum ipsum, iure officia perferendis quasi ratione recusandae!</Description>
                    <Image><img src="/icons/telegram.svg" alt=""/></Image>
                </Content>
            </ProjectCard>
            <ProjectCard>
                <Header>
                    <Title>Test Project</Title>
                    <Year><span>2019</span></Year>
                    <ProjectLink><img src="/icons/github.svg" alt="Source Code" title="View Source"/></ProjectLink>
                    <ProjectLink><img src="/icons/stackoverflow.svg" alt="View Live Application" title="View Live Application"/></ProjectLink>
                </Header>
                <Content>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut cum enim eum ipsum, iure officia perferendis quasi ratione recusandae!</Description>
                    <Image><img src="/icons/telegram.svg" alt=""/></Image>
                </Content>
            </ProjectCard>
            <ProjectCard>
                <Header>
                    <Title>Test Project</Title>
                    <Year><span>2019</span></Year>
                    <ProjectLink><img src="/icons/github.svg" alt="Source Code"/></ProjectLink>
                    <ProjectLink><img src="/icons/stackoverflow.svg" alt="View Live Application"/></ProjectLink>
                </Header>
                <Content>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut cum enim eum ipsum, iure officia perferendis quasi ratione recusandae!</Description>
                    <Image><img src="/icons/telegram.svg" alt=""/></Image>
                </Content>
            </ProjectCard>
            <ProjectCard>
                <Header>
                    <Title>Test Project</Title>
                    <Year><span>2019</span></Year>
                    <ProjectLink><img src="/icons/github.svg" alt="Source Code"/></ProjectLink>
                    <ProjectLink><img src="/icons/stackoverflow.svg" alt="View Live Application"/></ProjectLink>
                </Header>
                <Content>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut cum enim eum ipsum, iure officia perferendis quasi ratione recusandae!</Description>
                    <Image><img src="/icons/telegram.svg" alt=""/></Image>
                </Content>
            </ProjectCard>
        </Grid>

</Wrapper>
  )
}
