import styled from '@emotion/styled/macro';

export const Item = styled.li`
`;

export const Image = styled.img`
width: 300px;
height: 450px;
margin-bottom: 10px;
border-radius: 10px;
object-fit: cover;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 5px 0 rgb(0 0 0 / 14%),
0 2px 10px -1px rgb(0 0 0 / 12%);
transition: all 250ms ease-in-out;
&:hover,
&:focus {
cursor: pointer;
transform: scale(1.05) translateY(-5px);
box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
}
`;
export const Title = styled.h2`
min-height: 28px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 14px;
text-transform: uppercase;
color: var(--color-dark);
`;
export const Info = styled.div`
padding: 0 10px;
display: flex;
justify-content: space-between;
`;
export const Genre = styled.p`
display: inline-block;
margin-right: 10px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: var(--color-accent);
`;
export const Rating = styled.p`
min-width: 36px;
height: 20px;
border-radius: 0 5px 5px 5px;
font-style: normal;
font-weight: 500;
font-size: 12px;
text-align: center;
line-height: 16px;
color: #ffffff;
background-color: var(--color-accent);
`;