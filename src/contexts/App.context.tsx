import { createContext, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Sidebar from 'app/components/Sidebar';

interface IAppContext {
  isShowMenu: boolean;
  ToggleMenu: () => void;
  closeMenu: () => void;
}
const initialState: IAppContext = {
  isShowMenu: false,
  ToggleMenu: () => null,
  closeMenu: () => null,
};

const AppContext = createContext<IAppContext>(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(
    initialState.isShowMenu,
  );
  const ToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const closeMenu = () => {
    setIsShowMenu(false);
  };

  const value = {
    isShowMenu,
    closeMenu,
    ToggleMenu,
  };

  useEffect(() => {
    if (isShowMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isShowMenu]);

  return (
    <AppContext.Provider value={value}>
      {createPortal(<Sidebar />, document.body)}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

export default AppProvider;
