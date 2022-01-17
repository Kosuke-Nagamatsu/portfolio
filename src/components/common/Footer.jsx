import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <SFooter>
      <SSmall>&copy; 2022 KOSUKE NAGAMATSU</SSmall>
    </SFooter>
  );
}

const SFooter = styled.footer`
  background-color: #888;
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  padding: 0.5rem 0;
`

const SSmall = styled.small`
  font-size: 0.6rem;
  color: #fff;
`