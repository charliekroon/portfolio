import styled from "styled-components";
import Link from "next/link";

export const Container = styled.span`
	background-color: #eee7e1;
	font-family: "Monteserrat";
	margin-top: -6%;
	margin-left: 3%;
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
