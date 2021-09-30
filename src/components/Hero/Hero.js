import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Ahmad Salihu's Portfolio
        </SectionTitle>
        <SectionText>
        A Senior React Web Developer Offering 4+ Years of Experience Building Software for Ecommerce Organization. <br />
        Agile Software Developer Talented At Contributing to Multi-team Development Projects. Collaborative Designer of
        Exceptionally Useful Solutions and Perfectly Customized Web-apps.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;