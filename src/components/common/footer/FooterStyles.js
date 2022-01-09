import styled from "styled-components";

export const Box = styled.div`
  padding: 15px 0 20px 0; 
  background: black;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 15px;
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 10px;
    font-size: 8px;
    text-decoration: none;

&:hover {
	color: red;
	transition: 200ms ease-in;
}
`;
export const Heading = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
  align-self: center;
`;

