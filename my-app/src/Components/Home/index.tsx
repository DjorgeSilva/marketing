// -----------------------------------------------------
// IMPORTS
// -----------------------------------------------------
import React, { useEffect, useRef, useState } from "react";
import garantiaImage from "../../assets/garantia.png";
import first_resultImage from "../../assets/result-01.png";
import second_resultImage from "../../assets/result-02.png";
import third_resultImage from "../../assets/result-03.png";
import fourth_resultImage from "../../assets/result-04.png";
import { garantiaMockList, mockList, month, weekday } from "../../constants";
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
// -----------------------------------------------------
// HOME COMPONENT
// -----------------------------------------------------
/**
 * Home page - component
 */
export const Home: React.FC = (): JSX.Element => {
  // -----------------------------------------------------
  // CONSTANTS
  // -----------------------------------------------------
  const currentDate = new Date();
  const day = weekday[currentDate.getDay()];
  const getDate = currentDate.getDate();
  const geMonth = month[currentDate.getMonth()];
  const getYear = currentDate.getFullYear();
  // -----------------------------------------------------
  // STATES
  // -----------------------------------------------------
  const [totalWatcher, setTotalWatcher] = useState<number>(80);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const gridIframe = useRef<HTMLIFrameElement>(null);
  // -----------------------------------------------------
  // FUNCTIONS
  // -----------------------------------------------------
  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  function getTimeOutToVideo() {
    setIsButtonVisible(true);
  }

  useEffect(() => {
    setTimeout(getTimeOutToVideo, 498000);

    /**
     * set interval to get random number between a range
     */
    setInterval(function () {
      let randomNum = 0;
      randomNum = getRandomArbitrary(70, 100);
      setTotalWatcher(parseInt(String(randomNum)));
    }, 9000);
  }, []);
  // -----------------------------------------------------
  // MAIN RETURN
  // -----------------------------------------------------
  return (
    <Container>
      <Header>
        <HeaderTitle>{`Hoje, ${day}, ${getDate} de ${geMonth} de ${getYear}  é o último dia para ver esse video`}</HeaderTitle>
      </Header>
      <Main>
        <HeaderImage />

        <MainTitle color={"#fff"} isUppercase={true}>
          Estão tentando esconder!
          <br /> A única <span> </span>
          <MainTitle color={"#f00"} isUppercase={true}>
            receita caseira
          </MainTitle>{" "}
          de <span> </span>
          <MainTitle color={"#f00"} isUppercase={true}>
            8 ingredientes
          </MainTitle>{" "}
          que faz o corpo <span> </span>
          <MainTitle color={"#f00"} isUppercase={true}>
            eliminar até 9kg em 19 dias.
          </MainTitle>
        </MainTitle>

        <VideoWrapper>
          <iframe
            id="iframeID"
            ref={gridIframe}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mj07ouYP_yE?autoplay=1&mute=1&enablejsapi=1"
            title="Perca peso em 19 dias"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoWrapper>

        <TextContent
          fontSize={13}
          color={"#fff"}
          isUppercase={false}
          lineHeight={"none"}
        >
          {totalWatcher} pessoas estão assistindo esse vídeo com você
        </TextContent>

        {isButtonVisible && (
          <a href="https://pay.kiwify.com.br/SEcE09e">
            <GenericButton>
              Sim, eu quero emagrecer a partir de hoje!
            </GenericButton>
          </a>
        )}

        <SubTitle>
          veja abaixo resultados reais surpreendentes de pessoas reais que
          tomaram a decisão de mudar de vida com o nosso método!
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
                isUppercase={true}
                margin={item.margin}
                lineHeight={"none"}
              >
                {item.text}
              </TextContent>
            );
          })}
        </GenericWrapper>
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
