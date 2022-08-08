import { Container } from "~/components/Container/Container.styles";
import Tabs from "~/components/Tabs";
import TextTypewritter from "~/components/TextTypewritter/TextTypewritter";
import { Title } from "~/components/Title/Title.styles";
import copys from "~/constants/Copys";

interface WorkInterface {
  workRef: React.RefObject<Element> | any;
  intersectingWork: boolean;
}

const Work = ({ intersectingWork, workRef }: WorkInterface) => {
  // build
  return (
    <Container ref={workRef}>
      <Title intersecting={intersectingWork}>
        <span>2. </span>
        Work
      </Title>
      <Tabs intersectingWork={intersectingWork}>
        <div title={copys.work.firstTab.title} key={0}>
          <TextTypewritter
            text={copys.work.firstTab.description}
            speed={30}
          />
        </div>
        <div title={copys.work.secondTab.title} key={1}>
          <TextTypewritter
            text={copys.work.secondTab.description}
            speed={30}
          />
        </div>
        <div title={copys.work.thirdTab.title} key={2}>
          <TextTypewritter
            text={copys.work.thirdTab.description}
            speed={30}
          />
        </div>
      </Tabs>
    </Container>
  );
};

export default Work;
