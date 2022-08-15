import { useState } from 'react';
import styled from '@emotion/styled';
import { Grid, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { PageTitle } from '../../common/PageTitle';
import { HistoryContentTitle } from './HistoryContentTitle';
import { HistoryContentText } from './HistoryContentText';

export const HistoryLearningLog = (props) => {
  const { firstYears, secondYears } = props.logs;
  const [ bottomNavigationValue, setBottomNavigationValue ] = useState(0);
  const logs = bottomNavigationValue === 0 ? firstYears : secondYears;

  return (
    <>
      <Box>
        <BottomNavigation
          showLabels
          value={bottomNavigationValue}
          onChange={(event, newValue) => {
            setBottomNavigationValue(newValue);
          }}
        >
          <BottomNavigationAction label="2021" />
          <BottomNavigationAction label="2022" />
        </BottomNavigation>
      </Box>
      <PageTitle>学習記録</PageTitle>
      <Grid container spacing={2}>
        {
          logs.map((log, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SDiv>
                <SP><SSpanMonth>{log.month}</SSpanMonth></SP>
                <HistoryContentTitle>{log.title}</HistoryContentTitle>
                <HistoryContentText>{log.text}</HistoryContentText>
              </SDiv>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}

const SDiv = styled.div`
  height: 13rem;
  overflow: scroll;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.8rem;
`

const SP = styled.p`
  margin-bottom: 0.6rem;
`

const SSpanMonth = styled.span`
  color: #fff;
  font-weight: 400;
  background-color: rgba(192, 88, 5, 0.65);
  border-radius: 0.25rem;
  padding: 0.1rem 0.25rem;
`