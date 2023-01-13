import React, { useState } from "react";
import garantiaImage from "../../assets/garantia.png";
import first_resultImage from "../../assets/result-01.png";
import second_resultImage from "../../assets/result-02.png";
import third_resultImage from "../../assets/result-03.png";
import fourth_resultImage from "../../assets/result-04.png";
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
  LogoWrapper,
  Main,
  MainTitle,
  ResultImages,
  ResultWrapper,
  SubTitle,
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

  const [totalWatcher, setTotalWatcher] = useState<number>(200);

  function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setInterval(function () {
    let randomNum = 0;
    randomNum = randomIntFromInterval(70, 100);
    setTotalWatcher(randomNum);
  }, 9000);

  return (
    <Container>
      <Header>
        <HeaderTitle>{`Hoje, ${day}, ${getDate} de ${geMonth} de ${getYear}  é o último dia para ver esse video`}</HeaderTitle>
      </Header>
      <Main>
        <HeaderImage />

        <MainTitle color={"#fff"} isUppercase={true}>
          Aprenda a eliminar a gordura localizada e emagrecer até 7kg em 14 dias
          com exercícios no conforto da sua casa
        </MainTitle>

        <VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mj07ouYP_yE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoWrapper>

        <TextContent
          fontSize={13}
          color={"#ccc"}
          isUppercase={false}
          margin={"6px 0px 20px 0"}
          lineHeight={"none"}
        >
          {totalWatcher} pessoas estão assistindo esse vídeo com você
        </TextContent>

        <GenericButton>
          Quero entrar no cross combat agora (vagas limitadas)
        </GenericButton>

        <SubTitle>
          veja abaixo resultados reais surpreendentes de pessoas reais que
          tomaram a decisão de mudar de vida com o nosso programa!
        </SubTitle>

        <ResultWrapper>
          <ImageWrapper>
            <ResultImages src={first_resultImage} />
            <ResultImages src={second_resultImage} />
          </ImageWrapper>

          <ImageWrapper>
            <ResultImages src={third_resultImage} />
            <ResultImages src={fourth_resultImage} />
          </ImageWrapper>
        </ResultWrapper>

        <GenericWrapper margin="0 0 30px 0">
          <SubTitle>Cross Combat</SubTitle>
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

        <LogoWrapper>
          <ResultImages
            src={garantiaImage}
            width={"220px"}
            margin={"60px 0 20px 0"}
          />
        </LogoWrapper>

        <GenericWrapper margin="20px 0 40px 0">
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
        </GenericWrapper>

        <GenericButton>Quero comprar agora</GenericButton>
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
