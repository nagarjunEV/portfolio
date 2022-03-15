import React from 'react';
import Link from 'next/link';

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
        Hello, I'm Nagarjun
        <br />
        Enumudi Venkatesha!
      </SectionTitle>
      <SectionText>Lorem Ipsum</SectionText>
      {/* <Button></Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
