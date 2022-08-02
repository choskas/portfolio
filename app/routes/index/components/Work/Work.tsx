import { useEffect, useRef, useState } from "react";
import { Container } from "~/components/Container/Container.styles";
import Tabs from "~/components/Tabs";
import copys from "~/constants/Copys";
import { Title } from "./Work.styles";

interface WorkInterface {
  workRef: React.RefObject<Element> | any;
  intersectingWork: boolean;
}

const Work = ({ intersectingWork, workRef }: WorkInterface) => {
  const [text, setText] = useState("");

  const typeWritterEffect = (index: number) => {
    setText("");
    let textEffect = "";
    switch (index) {
      case 0:
        textEffect = copys.work.firstTab.description;
        break;
      case 1:
        textEffect = copys.work.secondTab.description;
        break;
      case 2:
        textEffect = copys.work.thirdTab.description;
        break;
      default:
        textEffect = "";
    }
    for (let i = 0; i <= textEffect.length; i++) {
      ((ind) => {
        setTimeout(function () {
          setText((prevState) => prevState + textEffect.charAt(i));
        }, 25 + 50 * ind);
      })(i);
    }
  };

  useEffect(() => {
    setText(copys.work.firstTab.description);
  }, []);

  return (
    <Container ref={workRef}>
      <Title intersectingWork={intersectingWork}>
        <span>2. </span>
        Work
      </Title>
      <Tabs intersectingWork={intersectingWork} onClick={typeWritterEffect}>
        <div title={copys.work.firstTab.title} key={0}>
          {text}
        </div>
        <div title={copys.work.secondTab.title} key={1}>
          {text}
        </div>
        <div title={copys.work.thirdTab.title} key={2}>
          {text}
        </div>
      </Tabs>
    </Container>
  );
};

export default Work;
