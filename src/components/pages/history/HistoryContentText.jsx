import styled from '@emotion/styled';

export const HistoryContentText = (props) => {
  const { children } = props;

  return (
    <SP>{children}</SP>
  );
}

const SP = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071rem;
  white-space: pre-line;
`