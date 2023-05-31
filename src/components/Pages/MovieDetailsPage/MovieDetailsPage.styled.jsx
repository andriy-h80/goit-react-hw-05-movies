import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #eeea9e;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3f51b5;
    color: #eeea9e;
    border-color: #eeea9e;
  }
`;

export const BaseInfo = styled.div`
   display: flex;
   padding: 15px;
   gap: 40px;
   border-bottom: 2px solid #3f51b5;
`;

export const PosterImg = styled.img`
   max-width: 500px;
`;

export const MainTitle = styled.h2`
   margin-bottom: 4px;
   text-align: left;
   color: #3f51b5;
   font-size: 18px;
   font-weight: 700;
   letter-spacing: 1.5px;
`;

export const Genres = styled.ul`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: left;
   padding-left: 0;
   gap: 16px;
`;

export const Genre = styled.li`
   background: #eeea9e;
   color: #3f51b5;
   text-shadow: 0 0.4px 0.4px #fff;
   font-size: 12px;
   font-weight: bold;
   border-radius: 5px;
   padding: 6px;
   list-style: none;
`;

export const AdditionalInfo = styled.div`
   border-bottom: 2px solid #3f51b5;
`;

export const Text = styled.h3`
   text-align: left;
   margin: 20px;
   font-weight: 500;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 10px;
  padding: 10px;
`;

export const InfoLink = styled(Link)`
  padding: 5px;
  border-radius: 8px;
  text-decoration: none;
  color: #3f51b5;
  background-color: #eeea9e;
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

