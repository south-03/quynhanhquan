"use client";
import * as React from "react";
import { styled } from "@mui/material";
import Button from "@mui/material";
import "./map.css";

export default function Map() {
  const [currentTab, setActive] = React.useState("FirstTab");

    const handleClick = (e) => {
        setActive(e.target.id);
        if (e.target.id === "FirstTab") {
            firstButtonRef.current.focus();
        }
    };

  const tabs = [
    {
      id: "FirstTab",
      title: "Quynh Anh Quan 1",
      content:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9472385603214!2d106.65704949577984!3d10.799375524176492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752936e10d433b%3A0x8863054da75d0cbb!2zNCBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUGjGsOG7nW5nIDQsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1702195522749!5m2!1svi!2s",
    },
    {
      id: "SecondTab",
      title: "Quynh Anh Quan 2",
      content:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.2475802616906!2d106.65153021800896!3d10.800499442112525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752923c9b0a0f1%3A0x79545b2461fbcf42!2zVsSDbiBQaMOybmcgWGluaA!5e0!3m2!1svi!2s!4v1702195899994!5m2!1svi!2s",
    },
  ];

    const firstButtonRef = React.useRef(null);

    React.useEffect(() => {
        firstButtonRef.current.focus();
    }, []);

  return (
    <BigContainer>
      <TitleStyle>Location</TitleStyle>
      <SmallContainer>
        {tabs.map((tab, i) => (
          <BtnMap
            key={i}
            id={tab.id}
            onClick={handleClick}
            ref={i === 0 ? firstButtonRef : null}
          >
            {tab.title}
          </BtnMap>
        ))}
        <CardContainer>
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <p>
                  <iframe
                    src={tab.content}
                    width="1290px"
                    height="860px"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              )}
            </div>
          ))}
        </CardContainer>
      </SmallContainer>
    </BigContainer>
  );
}

const BigContainer = styled("div")`
  display: grid;
  width: 100%;
  justify-content: center;
`;

const SmallContainer = styled("div")`
  max-width: 1290px;
  max-height: 860px;
`;

const TitleStyle = styled("p")`
  font-size: 55px;
  color: #ee6161;
  font-weight: 900;
  text-align: center;
`;

const CardContainer = styled("div")`
  min-width: 1290px;
  max-height: 796px;
  border: 1px solid #ee6161;
`;

const BtnMap = styled("button")`
    min-width: 364px;
    min-height: 65px;
    background: #FFF;
    border: none;
    color: #EE6161;
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    margin-right: 10px;
    &:focus{
        border-radius: 18px 18px 0px 0px;
        border: 1px solid #EE6161;
        border-bottom: none;
    }
`



