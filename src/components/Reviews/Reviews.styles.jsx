import styled from "@emotion/styled/macro";

export const List = styled.ul`
 height: 100vh;
 width: 840px;
 margin: 0 auto;
`;

export const Item = styled.li`
padding:10px;
border: 1px solid var(--color-accent);
border-radius:10px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-transform: uppercase;
  color: var(--color-accent);
`;

export const Text = styled.p`
  padding: 20px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.67;
  color: var(--color-dark);
`;