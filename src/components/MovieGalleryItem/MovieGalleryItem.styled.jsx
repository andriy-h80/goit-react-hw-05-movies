import styled from 'styled-components';

export const MovieListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  padding: 3px;

  max-width: 100%;
  width: 260px;
  height: 100%;

  border: none;
  transform: scale(1);
  border-radius: 8px;

  background-color: transparent;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }

  img {
    display: block;
    // min-height: 100%;
    height: 100%;
    width: 100%;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: transform 250ms linear;
    transform: scale(1);

    object-fit: cover;
    object-position: center;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MoviePoster = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 4px;
`;

export const MovieTitle = styled.h2`
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 2px;
  padding-right: 2px;
  max-width: 100%;

  overflow: hidden;

  color: #3f51b5;
  text-shadow: 0 0.4px 0.4px #000;
  text-align: center;

  font-size: 18px;
  font-weight: 700;
`;

export const ReleaseDate = styled.p`
  position: absolute;
  top: 5px;
  left: 10px;

  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 2px;
  padding-right: 2px;

  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  color: #3f51b5;
  text-shadow: 0 0.4px 0.4px #000;

  border-radius: 8px;
  font-size: 12px;
`;

export const Rating = styled.div`
  position: absolute;
  bottom: 38px;
  top: 10px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  text-shadow: 0 0.4px 0.4px #000;
  border-radius: 50%;
  padding: 4px;
`;

export const GenresBlock = styled.div`
  position: absolute;
  bottom: 48px;
  left: 10px;
`;
