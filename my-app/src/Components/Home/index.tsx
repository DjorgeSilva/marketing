import React from "react";
import {
  Container,
  Header,
  HeaderImage,
  HeaderTitle,
  Main,
  MainTitle,
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
      </Main>
    </Container>
  );
};
