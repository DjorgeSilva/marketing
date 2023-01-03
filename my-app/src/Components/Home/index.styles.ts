import styled from "styled-components";
import myImage from "../../assets/ultra-secreto.png";
import { ButtonPropType, ContentTextType, ImagePropType } from "../../types";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: #000;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 53px;
  background: #f33;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 50px;
  }
`;

export const HeaderTitle = styled.h3`
  color: #fff;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 13px;
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 100px;

  background-image: url(${myImage});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767px) {
    height: 60px;
    background-size: 80%, contain;
    margin-top: 0px;
    background-color: #000;
  }

  @media (min-width: 768px) {
    background-size: 40%, contain;
    margin-top: 25px;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainTitle = styled.h3`
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  background-color: #000;
  margin-top: 0px;

  @media (max-width: 767px) {
    font-size: 18px;
    padding: 5px 20px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
    padding: 2px 50px;
  }
`;

export const GenericButton = styled.button<ButtonPropType>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: red;
  outline: 1px solid #fff;
  color: #fff;
  font-weight: 800;

  border-radius: 10px;
  margin: ${({ margin }) => margin};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(255, 0, 0, 0.8);
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TextContent = styled.p<ContentTextType>`
  cursor: pointer;
  width: 80%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  text-transform: ${({ isUppercase }) =>
    isUppercase ? "uppercase" : "initial"};
  margin: ${({ margin }) => margin !== "none" && margin};
  line-height: ${({ lineHeight }) =>
    lineHeight !== "none" ? lineHeight : "none"};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultImages = styled.img<ImagePropType>`
  width: 95%;
  height: 100%;
  border-radius: 10px;

  @media (min-width: 315px) {
    width: ${({ width }) => width};
    margin: ${({ margin }) => margin};
  }
`;

export const GenericWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}
