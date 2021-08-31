import styled from "@emotion/styled/macro";

export const Form = styled.form`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 400px;
  margin-bottom: 40px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border: none;
  outline: none;
  border-radius: 0 20px 20px 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.14;
  color: var(--color-dark);
  box-shadow: -5px -5px 5px 0 #ffffff70, 5px 5px 5px 0 #aeaec050;
  background-color: #f0f0f3;
  transition: border-color 250ms ease-in-out;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-accent);
    opacity: 1;
  }
  &:focus {
    box-shadow: inset -5px -5px 5px 0 #ffffff70, inset 5px 5px 5px 0 #aeaec050;
    &::placeholder {
      opacity: 1;
      transition-delay: 250ms;
      color: #2c2c2caa;
    }
  }
`;

export const Button = styled.button`
position: absolute;
bottom: 0;
right: 0;
display: flex;
align-items: center;
padding: 5px 10px 5px 0;
opacity: 0;
pointer-events: none;
border: none;
font-size: 30px;
font-weight: 500;
color: var(--color-dark);
background-color: transparent;
&:hover {
 color: var(--color-accent);
}
   Input:focus ~ & {
     opacity: 1;
     pointer-events: all;
     transform: translateX(0);
   }
   & svg {
     margin-left: 10px;
     color: var(--color-accent);
   }
`;