import React from 'react';
import styled from 'styled-components';

import { Row, Column } from '../common/styles';
import colors from '../common/colors';
import Hero from './Hero';
import FeatureBubble from './FeatureBubble';
import heart from '../assets/heart.svg';
import book from '../assets/book.svg';
import wrench from '../assets/wrench.svg';
import loudspeaker from '../assets/loudspeaker.svg';
import { Button } from '../components/ButtonLink';

const CallToAction = styled(Column)`
  background-color: ${colors.purple};
  border-radius: 0 10rem 0 10rem;
  color: ${colors.white};
  height: 23vw;
  justify-content: space-evenly;
  width: 65vw;
`;

const StyledH2 = styled.h2`
  font-family: "Atami-bold";
  font-size: 11vw;
  margin: 0;
  text-align: center;
  text-shadow: .75rem .75rem 0 ${colors.vDarkPurple};
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  padding: 0 4vw 0 1vw;
`;

function Home() {
  return (
    <Column>
      <Hero />
      <Row justifyContent="space-between" padding="0 7vw">
        <FeatureBubble marginTop={-3} />
        <FeatureBubble
          icon={heart}
          heading="Support"
          caption="Help new alumni as they begin their journey to new opportunities"
          marginTop={3}
        />
        <FeatureBubble
          icon={book}
          heading="Learn"
          caption="Develop new skills with our alumni-generated study guides and videos"
          marginTop={9}
        />
      </Row>
      <Row justifyContent="space-between" padding="0 25vw 0 15vw">
        <FeatureBubble
          icon={wrench}
          heading="Collaborate"
          caption="Learn about projects other alumni are working on and join them"
          marginTop={-9}
        />
        <FeatureBubble
          icon={loudspeaker}
          heading="Be Heard"
          caption="Be among the first to provide useful feedback to the alumni board"
          marginTop={-2}
        />
      </Row>
      <Row justifyContent="center">
        <CallToAction>
          <StyledH2>Join Today!</StyledH2>
          <Row alignItems="center" justifyContent="flex-end">
            <Button
              large
              bgColor={colors.yellow}
              shadowColor={colors.white}
              textColor={colors.vDarkPurple}
            >
              Sign up
            </Button>
            <StyledSpan>
              via&nbsp;
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </StyledSpan>
          </Row>
        </CallToAction>
      </Row>
    </Column>
  );
}

export default Home;
