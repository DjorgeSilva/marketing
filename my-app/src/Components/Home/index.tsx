// -----------------------------------------------------
// IMPORTS
// -----------------------------------------------------
import React, { useCallback, useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import garantiaImage from "../../assets/garantia.png";
import first_resultImage from "../../assets/result-01.png";
import second_resultImage from "../../assets/result-02.png";
import third_resultImage from "../../assets/result-03.png";
import fourth_resultImage from "../../assets/result-04.png";
import { garantiaMockList, mockList, month, weekday } from "../../constants";
import { GarantiaDataType, ListType } from "../../types";
import { Comments } from "../FaceBookComments";
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
  TitleWrapper,
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

  const [youTubeOptions, setYouTubeOptions] = useState<YouTubeProps["opts"]>({
    width:
      window.innerWidth > 990
        ? 800
        : window.innerWidth > 522
        ? window.innerWidth - 30
        : window.innerWidth > 400
        ? window.innerWidth - 20
        : window.innerWidth - 10,
    height: window.innerWidth < 550 ? window.innerWidth : 400,
    playerVars: {
      autoplay: 0,
    },
  });

  // -----------------------------------------------------
  // STATES
  // -----------------------------------------------------
  const [totalWatcher, setTotalWatcher] = useState<number>(80);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

  // -----------------------------------------------------
  // FUNCTIONS
  // -----------------------------------------------------
  /**
   * get proper size for you tube video
   */
  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 800
        : window.innerWidth > 522
        ? window.innerWidth - 30
        : window.innerWidth > 400
        ? window.innerWidth - 20
        : window.innerWidth - 10;

    console.log("width: ", ratio);

    setYouTubeOptions({
      ...youTubeOptions,
      width: ratio,
      height: ratio < 550 ? ratio : 400,
    });
  }, []);

  /**
   * resize video when screen size changes
   */
  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);

    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [handleChangeVideoWidth]);

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    /**
     * set interval to get random number between a range
     */
    setInterval(function () {
      let randomNum = 0;
      randomNum = getRandomArbitrary(70, 100);
      setTotalWatcher(parseInt(String(randomNum)));
    }, 9000);
  }, []);

  /**
   * get number visible
   */
  const getButtonVisible = () => {
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 498000);
  };

  // -----------------------------------------------------
  // MAIN RETURN
  // -----------------------------------------------------
  return (
    <Container>
      <Header>
        <HeaderTitle>{`Hoje, ${day}, ${getDate} de ${geMonth} de ${getYear}  ?? o ??ltimo dia para ver esse video`}</HeaderTitle>
      </Header>
      <Main>
        <HeaderImage />

        <TitleWrapper>
          <MainTitle color={"#fff"} isUppercase={true}>
            Est??o tentando esconder! <br /> A ??nica <span> </span>
          </MainTitle>
          <MainTitle color={"#f00"} isUppercase={true}>
            receita caseira <span> </span>
          </MainTitle>
          <MainTitle color={"#fff"} isUppercase={true}>
            de <span> </span>
          </MainTitle>
          <MainTitle color={"#f00"} isUppercase={true}>
            8 ingredientes <span> </span>
          </MainTitle>
          <MainTitle color={"#fff"} isUppercase={true}>
            que faz o corpo <span> </span>
          </MainTitle>
          <MainTitle color={"#f00"} isUppercase={true}>
            eliminar at?? 9kg em 19 dias.
          </MainTitle>
        </TitleWrapper>

        <VideoWrapper>
          <YouTube
            opts={youTubeOptions}
            videoId="mj07ouYP_yE"
            onPlay={getButtonVisible}
            onPause={() => {
              setIsButtonVisible(true);
            }}
          />
        </VideoWrapper>

        <TextContent
          fontSize={16}
          color={"#fff"}
          isUppercase={false}
          lineHeight={"none"}
        >
          {totalWatcher} pessoas est??o assistindo esse v??deo com voc??
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
          tomaram a decis??o de mudar de vida com o nosso m??todo!
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
                fontSize={15}
                color={"#4fff00"}
                isUppercase={false}
                margin={"6px 0px"}
                lineHeight={"none"}
              >
                {option.text}
              </TextContent>
            );
          })}
        </GenericWrapper>

        <GenericWrapper margin="0 0 30px 0">
          <Comments />
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
                fontSize={16}
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
          Copyright 2022 ??? Cross Combat ?? <br /> Todos os Direitos Reservados
          <br /> Termos de Uso - Privacidade <br />
          Insira um disclaimer original, n??o use o que todos usam
        </TextContent>
      </Footer>
    </Container>
  );
};
