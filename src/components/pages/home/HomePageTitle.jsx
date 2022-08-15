import styled from '@emotion/styled';

export const HomePageTitle = (props) => {
  const { children } = props;

  return (
    <SDiv>
      <SH1>{children}</SH1>
    </SDiv>
  );
}

const SDiv = styled.div`
  text-align: center;
  margin-top: 3rem;
  @media screen and (max-width: 600px) {
    margin: 1.8rem 0;
  }
`

const SH1 = styled.h1`
  color: #c05805;
  font-size: 3.2rem;
  font-weight: 400;
  font-family: luxus-brut, cursive;
  @media screen and (max-width: 900px) {
    font-size: 2.6rem;
  }
`;