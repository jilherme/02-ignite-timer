import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

export const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  border: 0;
  background: transparent;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};

  color: ${({ theme }) => theme['gray-100']};
  font-weight: bold;
  font-size: inherit;

  &:focus {
    box-shadow: none;
    border-bottom-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
