import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { HomePageTitle } from './HomePageTitle';

export const HomeContent = (props) => {
  const { text } = props;

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <HomePageTitle>My Portfolio</HomePageTitle>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SDiv>
          <SP>{text}</SP>
        </SDiv>
      </Grid>
    </Grid>
  );
}

const SDiv = styled.div`
  @media screen and (min-width: 600px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
  }
`

const SP = styled.p`
  color: #222;
  font-size: 1.25rem;
  line-height: 1.7;
  letter-spacing: 0.1em;
  background-color: rgba(255, 192, 138, 0.1);
  border-radius: 2rem;
  white-space: pre-line;
  padding: 2.5rem;
`