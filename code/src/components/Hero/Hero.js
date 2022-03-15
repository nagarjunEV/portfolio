import React from 'react';

import {
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World!
      </SectionTitle>
      <SectionText>Lorem Ipsum</SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
