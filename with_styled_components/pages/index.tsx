import NavBar from 'components/navbar';
import { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  color: #f7d494;
  background-color: #205455;
`;

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <Wrapper>
      <h1>Portfolio</h1>
      <NavBar/>
      <section id="projects">
        <h1>projects</h1>
      </section>
      <section id="about-me">
        <h1>about me</h1>
      </section>
      <section id="contact">
        <h1>projects</h1>
      </section>
    </Wrapper>
  );
};

export default IndexPage;
