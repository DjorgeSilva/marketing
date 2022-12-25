import styled from "styled-components";
import myImage from "../../assets/ultra-secreto.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
`;

export const Header = styled.div`
  width: 100%;
  height: 53px;
  background: #ff007f;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h3`
  color: #fff;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 100px;

  background-image: url(${myImage});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767px) {
    background-size: 80%, contain;
    margin-top: 0px;
  }

  @media (min-width: 768px) {
    background-size: 40%, contain;
    margin-top: 25px;
  }
`;

export const MainTitle = styled.h3`
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 20px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
    padding: 0 50px;
  }
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
