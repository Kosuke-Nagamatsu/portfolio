import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, SwipeableDrawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useToggleDrawer } from '../../hooks/useToggleDrawer';
import { useScreenSize } from '../../hooks/useScreenSize';

export const Header = (props) => {
  const { routes } = props;
  const { isOpen, toggleDrawer } = useToggleDrawer();
  const { isMobileSize } = useScreenSize();

  // 引き出しメニューのリスト
  const drawerList = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map((route, index) => (
          <ListItem button key={index}>
            <ListItemText inset={true}><Link to={route.path}>{route.name}</Link></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SHeader>
      {
        // 600px以下かどうかでレイアウトを変更
        isMobileSize ? (
          <SDiv>
            <IconButton onClick={toggleDrawer(true)} size='large' sx={{ py: 0 }}><MenuIcon /></IconButton>
            <SwipeableDrawer
              anchor='right'  //右から表示される
              open={isOpen}   //trueなら表示
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {drawerList()}
            </SwipeableDrawer>
          </SDiv>
        ) : (
          <nav>
            <SUl>
              {routes.map((route, index) => (
                <SLi key={index}><Link to={route.path}>{route.name}</Link></SLi>
              ))}
            </SUl>
          </nav>
        )
      }
    </SHeader >
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

const SDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`