import React from 'react';
import styled from 'styled-components';

import { Column, Row, Heading } from '../common/styles';
import colors from '../common/colors';
import hero from '../assets/hero.png';
import { Button } from '../components/ButtonLink';
import HalleBot from '../assets/HalleBot.svg';

const HeroDiv = styled.div`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 10rem 0 10rem;
  height: 39.17vw;
  margin-top: 3vw;
  width: 80vw;
`;

const StyledRow = styled(Row)`
  padding-left: 20vw;
  padding-top: 10vw;
  position: relative;
`;

const HalleBotImg = styled.img`
  height: auto;
  position: absolute;
  right: 1%;
  top: 40%;
  width: 25vw;
`;

const Hero = () => (
  <Column alignItems="center">
    <HeroDiv>
      <Heading
        color={colors.lightYellow}
        textShadowColor={colors.vDarkPurple}
        fontSize="5.5vw"
        margin="-3vw 0 0 -2vw"
      >
        Operation Spark
        <br />
        &nbsp;&nbsp;&nbsp;Alumni Network
      </Heading>
      <StyledRow>
        <Button large bgColor={colors.yellow} shadowColor={colors.white} textColor={colors.vDarkPurple}>
          Join today
        </Button>
        <HalleBotImg src={HalleBot} alt="HalleBot, the Operation Spark mascot" />
      </StyledRow>
    </HeroDiv>
  </Column>
);

export default Hero;
