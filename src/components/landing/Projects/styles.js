import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  height: 100%;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  position: relative;
  top: 0;
  transition: all 0.25s ease 0s;
  
  &:hover {
    top: -10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export const Title = styled.div`
  font-weight: bold;
  padding-top: 0.5rem;
`;

export const Year = styled.div`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  
  span {
    background-color: rgba(85, 176, 255, 0.1);
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    clip-path: polygon(0px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);
  }
`;

export const ProjectLink = styled.div`
  img {
    width: 30px;
    height: 30px;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
`;

export const Description = styled.div`
  width: calc(100% - 150px);
  font-size: 0.9rem;
`;

export const Image = styled.div`
  padding 0 2rem;
  
  img {
    margin-bottom: 0;
    max-width: 150px;
  }
`;
