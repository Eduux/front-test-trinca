import styled, { css } from 'styled-components';

export const Label = styled.label`
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.blackWithOpacity};
    margin-bottom: 16px;
  }
`;

export const InputStyles = styled.input<{ withBorder?: boolean }>`
  width: 100%;
  color: ${({ theme }) => theme.colors.blackWithOpacity};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 15px 20px;
  -webkit-appearance: none;

  ${({ withBorder }) =>
    withBorder
      ? css`
          border: 1px solid ${({ theme }) => theme.colors.blackWithOpacity};
        `
      : css`
          border: none;
        `}
`;
