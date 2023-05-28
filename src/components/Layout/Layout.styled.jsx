import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;  
  padding: 15px;
`;

export const Header = styled.header`
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  background-color: #eeea9e;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Link = styled.li`
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  color: #3f51b5;
  font-weight: 700;
  border: 1px solid #3f51b5;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &.active {
    color: #eeea9e;
    background-color: #3f51b5;
  }

  :hover,
  :focus {
    color: #eeea9e;
    background-color: #3f51b5;
  }
`;

export const Main = styled.main`
  padding: 15px;
`;
