"use client";
import * as React from "react";
import { styled } from "@mui/material";
import Dish from "../../../../../public/images/menu/bunbodatbiet.png"
import Image from "next/image";
import Data from "./Data.json"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "../FisrtMenu/menu.css"

export default function FisrtMenu() {
    const scrollRef = useHorizontalScroll();
    return (
        <Container>
            <TilleStyle>Best Seller Now</TilleStyle>
            <CardContainer ref={scrollRef} className="wrapper">
                    {Data.map((d,i) => (
                    <Card key={i}>
                        <DishImages src={Dish}/>
                            <CardContentStyle>
                            {d.name}
                            <br/>
                            <span>{d.about}</span>
                            </CardContentStyle>
                        <BtnBuy> 
                                <span>{d.price}</span>
                                <div>
                                    <AddShoppingCartIcon/>Buy now 
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
    justify-content:center;
`

const TilleStyle = styled("p")`
    font-size: 55px;
    color: #EE6161;
    font-weight: 900;
    margin: 50px;
`

const CardContentStyle = styled("p")`
    color: #EF1616;
    font-size: 35px;
    font-style: bold;
    font-weight: 700;
    line-height: normal;
    margin:20px;
    & span {
        color: #EE6161;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: 20px;
    }
`

const CardContainer = styled("div")`
    display: flex;
    flex-direction: row;
    gap:40px;
    overflow: auto;
    max-width: 90%;
    align-items: center
    margin: auto;
    align-self: center;
`

const Card = styled("div")`
    max-width: 350px;
    max-heigth: 400px;
    border-radius: 10px;
    border: 3px solid #EE6161;
`

const DishImages = styled(Image)`
    width: 350px;
    height: 250px;
`

const BtnBuy = styled("button")`
    display: flex;
    width: 271px;
    height: 45px;
    background-color: #EE6161;
    color: #FFFFFF;
    margin:60px 20px 30px;
    border-radius: 20px;
    box-shadow: -2px 6px 4px 0px #B12A2A;
    padding: 0px 10px;
    align-items: center;
    justify-content: space-around;
    &:hover {
        box-shadow: -2px 6px 4px 0px #B12A2A inset;
    }
`

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
            behavior: 'smooth',
          });
        };
        el.addEventListener('wheel', onWheel);
        return () => el.removeEventListener('wheel', onWheel);
      }
    }, []);
  
    return elRef;
  }
