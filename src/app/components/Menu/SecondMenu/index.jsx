"use client";
import * as React from "react";
import { styled } from "@mui/material";
import Dish from "../../../../../public/images/menu/bunbodatbiet.png";
import Image from "next/image";
import Data from "./Data.json";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../FisrtMenu/menu.css";

export default function SecondMenu() {
  const scrollRef = useHorizontalScroll();
  return (
    <Container>
      <TitleStyle>Menu</TitleStyle>
      <CardContainer ref={scrollRef} className="wrapper">
        {Data.map((d, i) => (
          <Card key={i}>
            <DishImages src={Dish} />
            <CardContentStyle>
              {d.name}

              <span>{d.about}</span>
            </CardContentStyle>
            <BtnBuy>
              <span>${d.price}</span>
              <div>
                <AddShoppingCartIcon />
                Buy now
              </div>
            </BtnBuy>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const TitleStyle = styled("p")`
  font-size: 55px;
  color: #ee6161;
  font-weight: 900;
  margin: 10px 150px;

  @media (max-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 576px) {
    margin: 10px 80px;
    font-size: 30px;
  }
`;

const CardContentStyle = styled("p")`
  display: grid;
  color: #ef1616;
  font-size: 35px;
  font-weight: 700;
  line-height: normal;
  justify-content: center;

  & span {
    color: #ee6161;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }

  @media (max-width: 576px) {
    font-size: 25px;
    line-height: 1.2;
  }

  & span {
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
`;

const CardContainer = styled("div")`
    display: flex;
    flex-direction: row;
    gap:40px;
    overflow: auto;
    max-width: 90%;
    align-items: center
    margin: auto;
    align-self: center;
`;

const Card = styled("div")`
  max-width: 300px;
  border-radius: 10px;
  border: 3px solid #ee6161;

  @media (max-width: 768px) {
    max-width: 250px;
  }
  @media (max-width: 576px) {
    max-width: 200px;
  }
  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
  @media (max-width: 576px) {
    padding: 5px;
    margin: 15px;
  }
`;

const DishImages = styled(Image)`
  width: 100%;
`;

const BtnBuy = styled("button")`
  display: flex;
  width: 271px;
  height: 45px;
  background-color: #ee6161;
  color: #ffffff;
  margin: 60px 10px 30px;
  border-radius: 20px;
  box-shadow: -2px 6px 4px 0px #b12a2a;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: -2px 6px 4px 0px #b12a2a inset;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
  }
  @media (max-width: 576px) {
    width: 150px;
    height: 35px;
  }
  @media (max-width: 768px) {
    margin: 40px 10px 20px;
  }
  @media (max-width: 576px) {
    margin: 30px 5px 15px;
  }
`;

export function useHorizontalScroll() {
  const elRef = React.useRef();
  React.useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
}
