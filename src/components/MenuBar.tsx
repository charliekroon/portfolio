import styled from "styled-components";
import Link from "next/link";

export const Container = styled.span`
	background: #eee7e1;
	font-family: "Montserrat-Regular";
	text-transform: uppercase;
	padding: 0;
	margin-left: 2%;
	margin-top: 0.5%;
`;

export default function MenuBar() {
	return (
		<>
			<Container>
				<Link href="/">Home</Link>{" "}
			</Container>
		</>
	);
}
