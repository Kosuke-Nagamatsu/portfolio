import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = () => {
  return (
    <SHeader>
      <nav>
        <SUl>
          <SLi><Link to="/">Home</Link></SLi>
          <SLi><Link to="/history">History</Link></SLi>
          <SLi><Link to="/work">Work</Link></SLi>
        </SUl>
      </nav>
    </SHeader>
  );
}

const SHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 1rem 0;
`

const SUl = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const SLi = styled.li`
  margin-right: 1.3rem;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.1s;
  }
`;
