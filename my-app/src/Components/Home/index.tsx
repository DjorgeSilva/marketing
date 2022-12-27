import React, { useEffect, useState } from "react";
/* import video from "../../assets/video.mp4"; */
import {
  Container,
  ContentText,
  Header,
  HeaderImage,
  HeaderTitle,
  Main,
  MainTitle,
  VideoWrapper,
  WatchContainer as ViewerContainer,
} from "./index.styles";
export const Home: React.FC = (): JSX.Element => {
  const weekday = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const currentDate = new Date();
  const day = weekday[currentDate.getDay()];
  const getDate = currentDate.getDate();
  const geMonth = month[currentDate.getMonth()];
  const getYear = currentDate.getFullYear();

  const [currentVideoWidth, setCurrentVideoWidth] = useState<number>(
    window.innerWidth - 20
  );

  useEffect(() => {
    setCurrentVideoWidth(window.innerWidth - 20);
  }, [window.innerWidth]);

  const getInnerHeightForVideo = () => {
    if (window.innerWidth <= 767) {
      return 200;
    } else if (window.innerWidth >= 767 && window.innerWidth <= 1200) {
      return 700;
    }
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>{`Hoje, ${day}, ${getDate} de ${geMonth} de ${getYear}  é o último dia para ver esse video`}</HeaderTitle>
      </Header>
      <Main>
        <HeaderImage />
        <MainTitle>
          Aprenda a eliminar a gordura localizada e emagrecer até 7kg em 19 dias
          com exercícios no conforto da sua casa
        </MainTitle>
        <VideoWrapper>
          <video
            controls
            width={currentVideoWidth}
            height={getInnerHeightForVideo()}
          >
            <source type="video/mp4" />
          </video>
        </VideoWrapper>
        <ViewerContainer>
          <ContentText>
            Quero entrar no cross combat agora (vagas limitadas)
          </ContentText>
        </ViewerContainer>
      </Main>
    </Container>
  );
};
