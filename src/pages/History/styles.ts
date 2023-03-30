import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    padding: 3.5rem;
  }

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto; // se a largura da tela for menor que o conteúdo, o conteúdo será rolável. e.g.: mobile
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse; // conta 1 borda só entre as células
    min-width: 600px; // se a largura da tela for menor que 600px, irá aparecer o scroll horizontal

    th {
      color: ${({ theme }) => theme['gray-100']};
      background-color: ${({ theme }) => theme['gray-600']};
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6; // 1.6 === 160%

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme['gray-700']};
      border-top: 4px solid ${({ theme }) => theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%; // primeira coluna ocupa 50% da largura da tabela
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
  gray: 'gray-500',
} as const

interface StatusProps {
  // statusColor: 'yellow' | 'green' | 'red'
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
  }
`
