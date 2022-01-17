import styled from '@emotion/styled';

export const PageTitle = (props) => {
  const { children } = props;
  return (
    <SDiv>
      <SH1>{children}</SH1>
    </SDiv>
  );
}

const SDiv = styled.div`
  text-align: center;
  margin: 1.8rem 0;
`

const SH1 = styled.h1`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;
  padding: 0 3.5rem;

  &:before, &:after {
    content: '';
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 2.8rem;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  }

  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;
