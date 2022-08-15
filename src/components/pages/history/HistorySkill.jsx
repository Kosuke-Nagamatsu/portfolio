import styled from '@emotion/styled';
import { PageTitle } from '../../common/PageTitle';
import { HistoryContentTitle } from './HistoryContentTitle';
import { HistoryContentText } from './HistoryContentText';
import { Grid } from '@mui/material';

export const HistorySkill = (props) => {
  const { skills } = props;

  return (
    <>
      <PageTitle>使用技術</PageTitle>
      <Grid container spacing={1} pb={1}>
        {
          skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <SDiv>
                <HistoryContentTitle>{skill.field}</HistoryContentTitle>
                <HistoryContentText>{skill.content}</HistoryContentText>
              </SDiv>
            </Grid>
          ))
        }
      </Grid>
      <PageTitle>資格</PageTitle>
      <SUl>
        <li>2022年7月 Ruby Association Certified Ruby Programmer Silver ver. 2.1</li>
      </SUl>
    </>
  );
}

const SDiv = styled.div`
  height: 8rem;
  overflow: scroll;
  border: 1px solid #ccc;
  padding: 0.8rem;
`
const SUl = styled.ul`
  list-style: inside;
  padding: 0.8rem;
`