import styled from '@emotion/styled';

export const HistoryContentTitle = (props) => {
  const { children } = props;

  return (
    <SDiv>
      <SH2>{children}</SH2>
    </SDiv>
  );
}

const SDiv = styled.div`
  margin-bottom: 0.25rem;
`

const SH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.0075rem;
`