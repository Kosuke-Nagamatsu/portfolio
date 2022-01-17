import styled from '@emotion/styled';

export const MainContainer = (props) => {
  const { children } = props;

  return (
    <SDiv>{children}</SDiv>
  );
}

// ヘッダー、フッターの固定（position:fixed）で宙に浮いた分の余白調整
const SDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 2rem;
`