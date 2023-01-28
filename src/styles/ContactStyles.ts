import styled from "styled-components";
import {media} from "./HomeStyles";

export const Icon = styled.span`
	align-items: center;
	margin-top: -30%;
	${media.mobile} {
		position: static;
		margin-top: -95%;
		flex-grow: 1;
	}
`;
