import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: block;

  p {
    margin: 0;
  }
`
export const Bar = styled.div`
  position: relative;
  height: 2rem;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`
export const Quantity = styled.div`
  position: absolute;
  height: 2rem;
  background-color: ${props => props.theme.colors.secondary};
  left: 0;
`
