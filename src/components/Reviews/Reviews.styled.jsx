import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
`;

export const ReviewsAuthor = styled.p`
  color: #3f51b5;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const ReviewContent = styled.p`
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const NoReviewsMessage = styled.p`
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 5px;
`;