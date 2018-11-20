// @flow

import styled from 'styled-components';
import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import Metrics from '../themes/Metrics';
import Colors from '../themes/Colors';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.span`
  min-width: 150px;
  display: flex;
  justify-content: center;
`;
const Title = styled(Typography)`
  padding: 0 ${Metrics.spacing.huge}px;
`;
const StyledDivider = styled.hr`
  height: 2px;
  display: flex;
  background-color: ${Colors.divider};
  border-style: none;
  flex: 1;
`;

type Props = {
  title: string,
  className: string,
};

export default function TitledDivider({ className, title }: Props) {
  return (
    <Container className={className}>
      <StyledDivider />
      <TitleContainer>
        <Title>
          {title}
        </Title>
      </TitleContainer>
      <StyledDivider />
    </Container>
  );
}