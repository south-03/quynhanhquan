"use client";
import * as React from "react";
import { styled } from "@mui/material";

import Button from "@mui/material";
import "./map.css"

export default function Map(){
    const[currentTab, setActive] = React.useState("FirstTab");

    const handleClick = (e) => {
        setActive(e.target.id);
      };

    const tabs = [
    {
        id: "FirstTab",
        title: "Quynh Anh Quan 1",
        content: "Map 1",
    },
    {
        id: "SecondTab",
        title: "Quynh Anh Quan 2",
        content: "Map 2",
    }
    ]

    return(
        <BigContainer>
            <TitleStyle>Location</TitleStyle>
           <SmallContainer> 
            {tabs.map((tab, i) => (
            <BtnMap
                key={i}
                id={tab.id}               
                onClick={handleClick}
                className="active-tab"
            >
                {tab.title}
            </BtnMap>
            ))}
        <CardContainer>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <p>{tab.content}</p>
            )}
          </div>
        ))}
        </CardContainer>
        </SmallContainer>
        </BigContainer>
    )
}


const BigContainer = styled("div")`
    display: grid;
    width: 100%;
    justify-content: center;
`

const SmallContainer = styled("div")`
    max-width: 1290px;
    max-height: 860px;
`

const TitleStyle = styled("p")`
    font-size: 55px;
    color: #EE6161;
    font-weight: 900;
    text-align: center;
`

const CardContainer = styled("div")`
    min-width: 1290px;
    max-height: 796px;
    border: 1px solid #EE6161;
`

const BtnMap = styled("button")`
    min-width: 364px;
    min-height: 65px;
    background: #FFF;
    border: none;
    color: #EE6161;
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    &:focus{
        border-radius: 18px 18px 0px 0px;
        border: 1px solid #EE6161;
    }
`


