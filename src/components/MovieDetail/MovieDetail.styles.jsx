import styled from "@emotion/styled/macro";

export const Container = styled.div`
display: flex;
justify-content: space-between;
background-color: var(--bg-color);
box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;
margin: 0 auto;
border-radius: 20px;
width: 800px;
padding: 20px;
margin-bottom: 40px;
`;
export const Wrapper = styled.div`
  width:460px;
`;
export const Image = styled.img`
  height: 398px;
  cursor: pointer;
  border-radius: 10px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 30px;
  line-height: 1.16;
  text-transform: uppercase;
  color: var(--color-dark);
`;

export const Title = styled.p`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  color: var(--color-accent);
`;

export const About = styled.h3`
  margin-bottom: 20px;
align-items: flex-end;
  font-size: 25px;
  font-weight: 700;
  color: var(--color-dark);
`;

export const Overview = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.67;
  color: var(--color-dark);
`;

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;
export const Rating = styled.span`
  display: inline-block;
  border-radius: 5px;
  font-style: normal;
  font-size: 12px;
  text-align: center;
  line-height: 1.42;
  color: #fff;
  background-color: var(--color-accent);
  width: 36px;
  height: 16px;
`;

export const Content = styled.p`
  color: var(--color-dark);
`;

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  font-size: 20px;
  color: inherit;
  background-color: transparent;
  transition: color 250ms ease-in-out;
  &:hover {
    color: var(--color-accent);
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
`;