import MenuBar from "../components/MenuBar";
import {General, StandardText, Title} from "../styles/Global";
import {Headertje, ProjectsText} from "../styles/projects.styles";
export default function Projects() {
	return (
		<>
			<MenuBar />
			<General>
				<Title>Work</Title>
				<Headertje>Work in Progress</Headertje>
				<ProjectsText>
					<StandardText></StandardText>
				</ProjectsText>
			</General>
		</>
	);
}
