import styled from "styled-components";
import myImage from "../../assets/ultra-secreto-logo.png";
import {
  ButtonPropType,
  ContentTextType,
  GenericWrapperTypes,
  ImagePropType,
} from "../../types";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: #000;
  overflow: hidden;

  a {
    text-decoration: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;

  background: #ff0000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h3`
  color: #fff;
  font-weight: 400;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media (min-width: 0px) and (max-width: 760px) {
    font-size: 14px;
    padding: 0 10px;
  }

  @media (min-width: 761px) {
    font-size: 20px;
    padding: 0 4px;
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
  background-color: #000;

  @media (min-width: 0px) and (max-width: 666px) {
    background-size: 70%, contain;
  }

  @media (min-width: 667px) and (max-width: 899px) {
    background-size: 60%, contain;
  }

  @media (min-width: 900px) {
    background-size: 525px, contain;
  }
`;

export const MainTitle = styled.p<ContentTextType>`
  display: inline;
  cursor: pointer;
  width: 80%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  text-transform: ${({ isUppercase }) =>
    isUppercase ? "uppercase" : "initial"};

  margin-top: 20px;
  line-height: 35px;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media (min-width: 0px) and (max-width: 666px) {
    font-size: 20px;
  }

  @media (min-width: 666px) and (max-width: 949px) {
    width: 666px;
    font-size: 24px;
  }

  @media (min-width: 950px) {
    width: 800px;
    font-size: 35px;
    line-height: 50px;
    margin-top: 30px;
  }
`;

export const VideoWrapper = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 666px) and (max-width: 949px) {
    width: 80%;
    height: 80%;
  }

  @media (min-width: 959px) {
    width: 700px;
    height: 400px;
  }
`;

export const GenericButton = styled.button<ButtonPropType>`
  /*  height: 50px;
  background-color: red;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center; */

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  /*   &:hover {
    background-color: rgb(255, 0, 0, 0.8);
  }

  @media (min-width: 0px) and (max-width: 549px) {
    width: 90%;
    font-size: 12px;
  }

  @media (min-width: 550px) {
    font-size: 14px;
    width: 550px;
  } */

  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  background: #ff0000;
  font-weight: 800;
  text-transform: uppercase;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -5px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 8px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #820101;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media (min-width: 0px) and (max-width: 549px) {
    width: 90%;
    font-size: 12px;
  }

  @media (min-width: 550px) {
    font-size: 14px;
    width: 550px;
  }
`;

export const TextContent = styled.p<ContentTextType>`
  cursor: pointer;
  width: 80%;
  color: ${({ color }) => color};
  text-transform: ${({ isUppercase }) =>
    isUppercase ? "uppercase" : "initial"};
  margin: ${({ margin }) => margin !== "none" && margin};
  line-height: ${({ lineHeight }) =>
    lineHeight !== "none" ? lineHeight : "none"};

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media (min-width: 550px) {
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
    width: 550px;
  }
`;

export const SubTitle = styled.p`
  width: 80%;
  cursor: pointer;
  color: #4fff00;
  text-transform: uppercase;
  line-height: 30px;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media (min-width: 650px) {
    width: 450px;
    font-size: 24px;
  }
`;

export const ResultWrapper = styled.div`
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 0px) and (max-width: 750px) {
    width: 80%;
  }

  @media (min-width: 751px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 0px) and (max-width: 750px) {
    width: 100%;
  }

  @media (min-width: 751px) {
    width: 48%;
  }
`;

export const LogoWrapper = styled.div`
  @media (min-width: 0px) {
    width: 35%;
  }
`;

export const ResultImages = styled.img<ImagePropType>`
  border-radius: 10px;

  @media (min-width: 0px) and (max-width: 750px) {
    width: 100%;
  }
`;

export const GenericWrapper = styled.div<GenericWrapperTypes>`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${({ margin }) => margin && margin};
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
  border-top: 1px solid #00f400;
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
