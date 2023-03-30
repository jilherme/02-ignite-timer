import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;

  margin: 1rem auto;
  padding: 1rem;
  height: calc(100vh - 4rem);

  @media (min-width: 900px) {
    padding: 2.5rem;
    margin: 5rem auto;
    height: calc(100vh - 10rem);
  }

  background: ${({ theme }) => theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
