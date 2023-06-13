import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideBar = styled.aside`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: background-color, transform 0.3s ease-in-out;
  &.active {
    transform: translateX(0);
  }
  &.active.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.5s ease-in-out;
  }
`;

export const MenuSideBarContainer = styled.div`
  .icon-close {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
  }
  width: 200px;
  height: 100%;
  padding: 30px 20px 10px 10px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme._backgroundComponentSecondary};
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  &.active {
    transform: translateX(0);
  }
`;
export const MenuSideBar = styled(motion.ul)``;
export const MenuItemSideBar = styled(motion.li)`
  padding: 8px 0px;
  border-bottom: 0.5px solid ${({ theme }) => theme._borderTertiary}; ;
`;
export const LinkSideBar = styled(Link)`
  color: ${({ theme }) => theme._textSecondary};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
`;
