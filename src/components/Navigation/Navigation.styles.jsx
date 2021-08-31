import styled from '@emotion/styled/macro';

export const Nav = styled.nav`
  display: block;
  margin-left: 50px;
`

export const List = styled.ul`
font-size: 24px;
display: flex;
align-items: center;
justify-content: center;
& svg {
  margin-right: 50px;
  color: #AB2330;
}
`

export const Item = styled.li`
color: #333;
  &:not(:last-child) {
    margin-right: 50px;
  }
`