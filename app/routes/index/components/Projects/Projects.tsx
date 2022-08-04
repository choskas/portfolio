import Card from "~/components/Card/Card";
import { Container } from "~/components/Container/Container.styles";
import { CardsContainer } from "./Projects.styles";
import { Title } from "~/components/Title/Title.styles";
import CardsSeekerImage from "../../../../assets/cards/CardsSeeker.png";
import DeltaSalesPoint from "../../../../assets/cards/DeltaSalesPoint.png";
import Flink from "../../../../assets/cards/FlinkLogo.png";
import Rappi from "../../../../assets/cards/RappiLogo.png";
interface ProjectsInterface {
  projectsRef: React.RefObject<Element> | any;
  intersectingProjects: boolean;
}

const Projects = ({ projectsRef, intersectingProjects }: ProjectsInterface) => (
  <Container ref={projectsRef}>
    <Title intersecting={intersectingProjects}>
      <span>3. </span>
      Projects
    </Title>
    <CardsContainer>
      <Card
        onClick={() => {
          window.open('https://www.rappi.com', '_blank')
        }}
        animationDelay="2"
        intersecting={intersectingProjects}
        img={Rappi}
        title="Restaurants Dashboard"
        description="Working on new features for the restaurants clients and managers dashboard, using React."
        tags="React"
      />
      <Card
              onClick={() => {
                window.open('https://www.miflink.com', '_blank')
              }}
        animationDelay="2.4"
        intersecting={intersectingProjects}
        img={Flink}
        title="Employee Dashboard"
        description="Here i work on backend and frontend for the employee dashboard. On the backend i use an ORM to bring data from an postgresql database. Also i worked for a broker dashboard using python on the backend and react on the frontend."
        tags="React Mongo postgresql Nodejs AWS"
      />
      <Card
              onClick={() => {
                window.open('https://www.cardsseeker.com', '_blank')
              }}
        animationDelay="2.8"
        intersecting={intersectingProjects}
        img={CardsSeekerImage}
        title="Cards Seeker"
        description="This is my personal project it is about a Trading Card Game store made on Nextjs on the frontend, Node js on the backend and using mongo as a database. The deploy was on Vercel for the frontend and AWS lightsail for the backend and MongoDB."
        tags="Next Mongo Nodejs AWS"
      />
      <Card
              onClick={() => {
                window.open('https://github.com/choskas/sales-point', '_blank')
              }}
        animationDelay="3.2"
        intersecting={intersectingProjects}
        img={DeltaSalesPoint}
        title="Delta Sales Point"
        description="Another personal project it is a sales point with inventory administration, charts and more. It was made using React and Firebase. Actually is not on production."
        tags="React Firebase"
      />
    </CardsContainer>
  </Container>
);

export default Projects;
