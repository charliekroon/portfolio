import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Container = styled.div`
	background-color: #eee7e1;
`;

const IconVertical = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 20%;
	flex-wrap: wrap;
`;

export default function IconBar() {
	return (
		<>
			<Container>
				<IconVertical>
					<Link href="https://github.com/charliekroon">
						<Image src="/github.svg" height={30} width={30} alt="github" />
					</Link>{" "}
					<Link href="https://medium.com/@charliekroon">
						<Image src="/medium.svg" height={30} width={30} alt="medium" />
					</Link>{" "}
					<Link href="https://www.linkedin.com/in/charliekroon/">
						<Image src="/linkedin.svg" height={30} width={30} alt="medium" />
					</Link>
				</IconVertical>
			</Container>
		</>
	);
}
