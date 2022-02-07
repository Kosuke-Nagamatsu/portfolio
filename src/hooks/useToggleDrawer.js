import { useState } from 'react';

// 引き出しメニューの開閉処理のロジックをHeaderから分離
export const useToggleDrawer = () => {

  // 開閉状態を管理する
  const [isOpen, setIsOpen] = useState(false);

  // 開閉処理
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    // stateを更新
    setIsOpen(open);
  };

  return { isOpen, toggleDrawer };
}