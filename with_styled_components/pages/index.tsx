import { NextPage } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>Linnéa Ajger</title>
      </Head>
      <h1>Portfolio</h1>
      <p>
        hejhejhej
      </p>
    </Wrapper>
  );
};

export default IndexPage;
