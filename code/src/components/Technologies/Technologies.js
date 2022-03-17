import React from 'react';
import {
  DiDatabase,
  DiEclipse,
  DiFirebase,
  DiJava,
  DiReact,
  DiZend,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Lorem ipsum</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience in <br />
            React.js, Redux, and Angular 6
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience in <br />
            Java and Spring Boot
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience in <br />
            SQL, Redis, and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
