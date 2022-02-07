import { useMediaQuery } from '@mui/material';

// 再利用するかもしれないのでカスタムフック化
export const useScreenSize = () => {

  // 600px以下はtrue、その他はfalse
  const isMobileSize = useMediaQuery('(max-width:600px)');
  return { isMobileSize };
}
