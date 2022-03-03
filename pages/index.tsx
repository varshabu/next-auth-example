import type { NextPage } from 'next';
import styled from 'styled-components';
import Spacings from '../tokens/Spacings';
import homeImage from '/public/images/home-bg.jpeg';

const Home: NextPage = () => {
  return (
    <>
      <HeaderWrapper image={homeImage}>
        <div>
          <HeaderTitle>TechBlog</HeaderTitle>
          <StyledBreak />
          <h3>A Blog for Developers! Read and Share!</h3>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Home;

const HeaderWrapper = styled.div<{ image: StaticImageData }>`
  background-image: url(${(props) => props.image.src});
  width: 100vw;
  height: 55vh;
  text-align: center;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeaderTitle = styled.h1`
  font-size: ${Spacings.xxxxLarge};
  margin: 0;
`;

const StyledBreak = styled.hr`
  width: ${Spacings.xxxxxxLarge};
`;
