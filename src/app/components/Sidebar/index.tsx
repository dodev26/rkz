import React, { useEffect } from 'react';
import * as S from './Siderbar.styles';
import { useAppContext } from 'contexts/App.context';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Sidebar = () => {
  const { isShowMenu, closeMenu, ToggleMenu } = useAppContext();
  const menuRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu, isShowMenu]);

  return (
    <S.SideBar
      className={classNames('sidebar overlay', {
        active: isShowMenu,
      })}
    >
      <S.MenuSideBarContainer
        ref={menuRef}
        className={classNames('menu-sidebar', {
          active: isShowMenu,
        })}
      >
        <button className="icon-close" type="button" onClick={ToggleMenu}>
          <CloseOutlined rev={undefined} />
        </button>
        {isShowMenu && (
          <S.MenuSideBar
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <S.MenuItemSideBar variants={item}>
              <S.LinkSideBar to="/sign-in">Sign in</S.LinkSideBar>
            </S.MenuItemSideBar>
            <S.MenuItemSideBar variants={item}>
              <S.LinkSideBar to="/">For Job Seeker</S.LinkSideBar>
            </S.MenuItemSideBar>
            <S.MenuItemSideBar variants={item}>
              <S.LinkSideBar to="/">For Company</S.LinkSideBar>
            </S.MenuItemSideBar>
          </S.MenuSideBar>
        )}
      </S.MenuSideBarContainer>
    </S.SideBar>
  );
};

export default Sidebar;
