import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
  p,
  a {
    margin-top: 24px;
    color: ${props => props.theme.colors.text};
    font-size: 24px;
    line-height: 32px;
  }
  a {
    text-decoration: underline;
  }
  svg {
    width: 400px;
    color: #ff0000;
    fill: ${props => props.theme.colors.secondary};
  }
  .button {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    padding: 0.75rem 1.5rem;
    font-size: 1.3rem;
    text-decoration: none;
    border-radius: ${props => props.theme.sizes.borderRadius};
    transition: all 200ms ease;
  }
  .button:hover {
    background-color: ${props => props.theme.colors.primary + 'aa'};
  }
`
