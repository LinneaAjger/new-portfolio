import NavBar from 'components/navbar';
import { NextPage } from 'next';
import { Wrapper } from 'components/sharedstyles';


const IndexPage: NextPage<{}> = ({}) => {
  return (
    <Wrapper>
      <NavBar/>
<h2>bla bla bla hej bild här</h2>
    </Wrapper>
  );
};

export default IndexPage;
