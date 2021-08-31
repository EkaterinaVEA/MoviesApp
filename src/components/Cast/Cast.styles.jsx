import styled from "@emotion/styled/macro";

export const List = styled.ul`
width: 840px;
margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px 10px;
`;

export const Actor = styled.li`
border: 1px solid var(--color-accent);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 5px 0 rgb(0 0 0 / 14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
`;
export const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`;
export const Name = styled.p`
  margin: auto;
  height: 100%;
  font-size: 14px;
  text-align: center;
  color: var(--color-dark);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;