import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import PersonBubble from '../components/PersonBubble';
import colors from '../common/colors';
import { Row, Column } from '../common/styles';

const StyledH3 = styled.h3`
  font-family: Atami-Regular;
  font-size: 1.75rem;
`;

const NameSpan = styled.span`
  font-size: 1.25rem;
`;

const TagsSpan = styled.span`
  color: ${colors.translucentWhite};
  font-family: Atami-Regular;
  padding-right: .5rem;
`;

const TagA = styled.a`
  color: ${colors.yellow};
  text-decoration: none;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${colors.yellow};
  cursor: pointer;
  font-family: Atami-Regular;
  font-size: 2rem;
  text-transform: uppercase;
  :hover {
    text-decoration: underline;
  }
`;

const Newsletter = ({ newsletterIssue, expandNewsletter }) => {
  const { id, expanded, latest, title, author, date, contents, tags, preview } = newsletterIssue;
  const { name, image } = author;

  return (
    <Container large heading={latest ? 'Alumni Newsletter' : ''}>
      <Row padding="0 0 1.5rem 0" alignItems="center">
        <PersonBubble id={author.id} image={image} />
        <Column width="100%" padding="0 0 0 1.5rem">
          <StyledH3>{title}</StyledH3>
          <Row justifyContent="space-between" alignItems="flex-end">
            <NameSpan>{name}</NameSpan>
            <span>{date}</span>
          </Row>
        </Column>
      </Row>
      {expanded ? (
        <>
          <p>{contents}</p>
          <Row justifyContent="flex-end" alignItems="center">
            <TagsSpan>TAGS</TagsSpan>
            {tags.map((tag, i) => (
              i === tags.length - 1 ? <TagA href="#" key={i}>{tag}</TagA> : <TagA href="#" key={i}>{tag},&nbsp;</TagA>
            ))}
          </Row>
        </>
      ) : (
        <>
          <p>{preview}..</p>
          <Row justifyContent="center" padding="0 0 2rem 0">
            <ReadMoreButton onClick={() => expandNewsletter(id)}>Read More</ReadMoreButton>
          </Row>
        </>
      )}
    </Container>
  );
};

Newsletter.propTypes = {
  newsletterIssue: PropTypes.shape({
    expanded: PropTypes.bool,
    latest: PropTypes.bool,
    title: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    }),
    date: PropTypes.string,
    contents: PropTypes.string,
    preview: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number
  }),
  expandNewsletter: PropTypes.func,
};

Newsletter.defaultProps = {
  newsletterIssue: {
    expanded: false,
    latest: false,
    title: 'Really Cool Title',
    author: 'Jacqueline Asong',
    date: 'September, 2019',
    contents: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.\n
    Odio euismod lacinia at quis. Tellus cras adipiscing enim eu. Tortor dignissim convallis aenean et tortor at. Morbi tincidunt ornare massa eget egestas purus viverra.\n
    Ornare aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis egestas sed tempus. Est ultricies integer quis auctor elit sed. Tempor orci dapibus ultrices in iaculis nunc sed augue. Nunc non blandit massa enim nec dui nunc. Turpis tincidunt id aliquet risus feugiat in ante metus. Ullamcorper morbi tincidunt ornare massa.\n
    Nisl nunc mi ipsum faucibus vitae. Molestie at elementum eu facilisis sed odio. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices gravida dictum fusce ut placerat. Sit amet consectetur adipiscing elit. Sit amet est placerat in egestas erat imperdiet sed. Arcu risus quis varius quam quisque id diam vel. Feugiat nisl pretium fusce id velit ut tortor. Vestibulum lorem sed risus ultricies tristique nulla. Tellus elementum sagittis vitae et leo duis ut diam quam.\n
    Tempus egestas sed sed risus pretium quam. Malesuada fames ac turpis egestas integer eget aliquet nibh. Non curabitur gravida arcu ac tortor dignissim convallis.`,
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Elementum pulvinar etiam non quam lacus suspendisse. Justo nec ultrices dui sapien eget.',
    tags: ['Lorem', 'ipsum'],
  },
  expandNewsletter: () => null,
};

export default Newsletter;
