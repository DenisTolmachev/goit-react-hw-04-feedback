import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  :nth-last-child(3) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
  :nth-last-child(2) {
    font-size: ${({ theme }) => theme.fontSizes.ml1};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  :nth-last-child(1) {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
