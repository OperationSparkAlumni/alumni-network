import React from 'react';
import styled from 'styled-components';

import colors from '../common/colors';
import { useAuthContext } from '../common/AuthContext';
import useNewsletters from '../hooks/useNewsletters';
import { Column, Row, Heading } from '../common/styles';
import HalleBot from '../assets/HalleBot.svg';
import FeaturedGrad from './FeaturedGrad';
import NewAlumni from './NewAlumni';
import FeaturedJob from './FeaturedJob';
import Newsletter from './Newsletter';

import featuredGrad from '../mockedData/featuredGrad';

const SpeechBubble = styled.div`
  background-color: ${colors.white};
  border-radius: 5rem;
  box-shadow: .5rem .5rem 0 ${colors.yellow};
  margin-top: 2rem;
  min-width: 50vw;
  max-width: 55vw;
  padding: 1rem 2rem;
  position: relative;
  text-align: center;
  :before {
    content: " ";
    border-style: solid;
    border-width: 1rem 0 1rem 2.5rem;
    border-color: transparent transparent transparent ${colors.white};
    position: absolute;
    right: -2rem;
    top: calc(50% - 1rem);
    z-index: 1;
  }
  :after {
    content: " ";
    border-style: solid;
    border-width: 1rem 0 1rem 2.5rem;
    border-color: transparent transparent transparent ${colors.yellow};
    position: absolute;
    right: -2.5rem;
    top: calc(50% - .5rem);
  }
`;

const HalleBotImg = styled.img`
  height: auto;
  width: 25vw;
`;

const StyledRow = styled(Row)`
  z-index: 1;
`;

function Dashboard() {
  const [ newsletters, expandNewsletter ] = useNewsletters();
  const { userData } = useAuthContext();
  const { name: { first, last } } = userData;

  return (
    <Column>
      <Row justifyContent="center">
        <div style={{ position: "relative"}}>
          <SpeechBubble>
            <Heading fontSize="2.5vw" color={colors.darkPurple}>Hello, {`${first} ${last}`}!</Heading>
          </SpeechBubble>
        </div>
        <HalleBotImg src={HalleBot} alt="HalleBot" />
      </Row>
      <StyledRow justifyContent="space-evenly" margin="-9vw 0 0 0">
        <Column margin="-9vw 0 0 0">
          <FeaturedGrad grad={featuredGrad} />
          <NewAlumni />
          <FeaturedJob />
        </Column>
        <Column>
          {newsletters.map(newsletter => (
            <Newsletter newsletterIssue={newsletter} expandNewsletter={expandNewsletter} key={newsletter.id}  />
          ))}
        </Column>
      </StyledRow>
    </Column>
  );
}

export default Dashboard;
