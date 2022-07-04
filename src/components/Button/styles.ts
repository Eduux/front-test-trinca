import styled, { css } from 'styled-components';

export const ButtonStyles = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 18px;
  box-shadow: 0px 0px 16px rgb(0 0 0 / 6%);
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  padding: 15px 10px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: initial;
    `}
`;
