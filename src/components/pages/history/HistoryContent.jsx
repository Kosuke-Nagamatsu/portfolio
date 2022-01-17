import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { HistoryContentTitle } from './HistoryContentTitle';
import { HistoryContentText } from './HistoryContentText';
import { HistorySkill } from './HistorySkill';

export const HistoryContent = (props) => {
  const { histories, skills } = props;
  return (
    <>
      <Grid container spacing={2}>
        {
          histories.map((history, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SDiv>
                <SP><SSpanMonth>{history.month}</SSpanMonth></SP>
                <HistoryContentTitle>{history.title}</HistoryContentTitle>
                <HistoryContentText>{history.text}</HistoryContentText>
              </SDiv>
            </Grid>
          ))
        }
      </Grid>
      <HistorySkill skills={skills} />
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