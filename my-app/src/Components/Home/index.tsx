import React, { useEffect, useState } from "react";
/* import video from "../../assets/video.mp4"; */
import first_result from "../../assets/result-01.png";
import second_result from "../../assets/result-02.png";
import third_result from "../../assets/result-03.png";
import fourth_result from "../../assets/result-04.png";
import fifth_result from "../../assets/result-05.png";
import { mockList } from "../../constants";
import { ListType } from "../../types";
import {
  Container,
  GenericWrapper,
  Header,
  HeaderImage,
  HeaderTitle,
  ImageWrapper,
  Main,
  MainTitle,
  ResultImages,
  TextContent,
  VideoWrapper,
  ViewerContainer,
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
          Quero entrar no cross combat agora (vagas limitadas)
        </ViewerContainer>

        <TextContent
          fontSize={15}
          color={"#4fff00"}
          isUppercase={true}
          margin={"none"}
        >
          veja abaixo resultados reais surpreendentes de pessoas reais que
          tomaram a decisão de mudar de vida com o nosso programa!
        </TextContent>

        <ImageWrapper>
          <ResultImages src={first_result} />
          <ResultImages src={second_result} />
          <ResultImages src={third_result} />
          <ResultImages src={fourth_result} />
          <ResultImages src={fifth_result} />
        </ImageWrapper>

        <GenericWrapper>
          <TextContent
            fontSize={15}
            color={"#4fff00"}
            isUppercase={true}
            margin={"none"}
          >
            Depoimento em video
          </TextContent>
          <video
            controls
            width={currentVideoWidth}
            height={getInnerHeightForVideo()}
          >
            <source type="video/mp4" />
          </video>
        </GenericWrapper>

        <GenericWrapper>
          <TextContent
            fontSize={15}
            color={"#4fff00"}
            isUppercase={true}
            margin={"none"}
          >
            Depoimento em video
          </TextContent>
          {mockList.map((option: ListType) => {
            return (
              <TextContent
                key={option.id}
                fontSize={13}
                color={"#ccc"}
                isUppercase={true}
                margin={"6px 0px"}
              >
                {option.text}
              </TextContent>
            );
          })}
        </GenericWrapper>
      </Main>
    </Container>
  );
};
