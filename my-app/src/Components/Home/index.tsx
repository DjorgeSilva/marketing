import React, { useEffect, useState } from "react";
/* import video from "../../assets/video.mp4"; */
import garantiaImage from "../../assets/garantia.png";
import first_resultImage from "../../assets/result-01.png";
import second_resultImage from "../../assets/result-02.png";
import third_resultImage from "../../assets/result-03.png";
import fourth_resultImage from "../../assets/result-04.png";
import fifth_resultImage from "../../assets/result-05.png";
import { garantiaMockList, mockList } from "../../constants";
import { GarantiaDataType, ListType } from "../../types";
import {
  Container,
  Footer,
  GenericButton,
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
        <GenericButton width="95%" height="50px" margin="0 0 10px 0">
          Quero entrar no cross combat agora (vagas limitadas)
        </GenericButton>
        <TextContent
          fontSize={15}
          color={"#4fff00"}
          isUppercase={true}
          margin={"none"}
          lineHeight={"none"}
        >
          veja abaixo resultados reais surpreendentes de pessoas reais que
          tomaram a decisão de mudar de vida com o nosso programa!
        </TextContent>
        <ImageWrapper>
          <ResultImages src={first_resultImage} width={"315px"} margin={"0"} />
          <ResultImages src={second_resultImage} width={"315px"} margin={"0"} />
          <ResultImages src={third_resultImage} width={"315px"} margin={"0"} />
          <ResultImages src={fourth_resultImage} width={"315px"} margin={"0"} />
          <ResultImages src={fifth_resultImage} width={"315px"} margin={"0"} />
        </ImageWrapper>
        <GenericWrapper>
          <TextContent
            fontSize={15}
            color={"#4fff00"}
            isUppercase={true}
            margin={"none"}
            lineHeight={"none"}
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
            lineHeight={"none"}
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
                lineHeight={"none"}
              >
                {option.text}
              </TextContent>
            );
          })}
        </GenericWrapper>
        <ImageWrapper>
          <ResultImages
            src={garantiaImage}
            width={"220px"}
            margin={"30px 0 20px 0"}
          />
        </ImageWrapper>

        {garantiaMockList.map((item: GarantiaDataType) => {
          return (
            <TextContent
              key={item.id}
              fontSize={item.fontSize}
              color={item.color}
              isUppercase={item.isUppercase}
              margin={item.margin}
              lineHeight={"none"}
            >
              {item.text}
            </TextContent>
          );
        })}
        <GenericButton width="65%" height="50px" margin="20px 0">
          Quero comprar agora
        </GenericButton>
      </Main>
      <Footer>
        <TextContent
          fontSize={13}
          color={"#fff"}
          isUppercase={false}
          margin={"none"}
          lineHeight={"25px"}
        >
          Copyright 2022 – Cross Combat ® <br /> Todos os Direitos Reservados{" "}
          <br /> Termos de Uso - Privacidade <br />
          Insira um disclaimer original, não use o que todos usam
        </TextContent>
      </Footer>
    </Container>
  );
};
