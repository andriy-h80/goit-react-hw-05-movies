import styled from 'styled-components';

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
`;

export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    width: 180px;
    max-width: 100%;
    max-height: 100%;

    border-radius: 8px;
    border: none;
    outline: none;

    box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.17);
  
    font-size: 12px;
    font-weight: 700;
    overflow: hidden;
`;

export const CastPhotoThumb = styled.div`
    position: relative;
    overflow: hidden;
`;

export const CastPhoto = styled.img`
    display: block;
    min-height: 100%;
    height: 240px;
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
`;

export const Wrap = styled.div`
    flex-direction: column;
    align-items: center;
    flex: 1 0 auto;
    padding: 4px;
    background-color: #eeea9e;
`;

export const ActorsName = styled.h3`
    margin-bottom: 4px;
    text-align: center;
    color: #3f51b5;
    font-size: 16px;
    font-weight: 700;
`;

export const ActorsCharacter = styled.p`
    margin-bottom: 4px;
    text-align: center;
    color: #3f51b5;
    font-size: 14px;
    font-weight: 500;
`;

export const MovieHero = styled.span`
    color: #3f51b5;
`;
