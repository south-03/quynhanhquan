"use client";
import * as React from "react";
import { styled } from "@mui/material";
import Image from "next/image";
import imageBanner from "../../asset/imagebanner.jpg"
import AutoScroll from "../AutoScrollText";

export default function Welcome() {
    return (
        <BnWelcome>
            <ContentContainer>
                <TitleWelcome>Welcome to our </TitleWelcome><br />
                <TitleWelcome>beef noodle restaurant!</TitleWelcome><br />
                <DWelcome>Unique flavors and a cozy atmosphere await you.<br />Come and enjoy it now!</DWelcome>

                <BtnDiscover>
                    <ContentBtnD>Discover now</ContentBtnD><br />
                </BtnDiscover>
            </ContentContainer>
            <ServiceImages>
                <Image src={imageBanner} alt="imageBanner" width={500} height={500} />
            </ServiceImages>
        </BnWelcome>
    );
}

const BnWelcome = styled('a')`
    display: flex;
    flex-direction: row;
    background: #FFF;
    height: 500px;
`;

const ContentContainer = styled('a')`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    width: 50%;
    margin-left: 55px;
`;

const TitleWelcome = styled('a')`
    font-size: 60px;
    font-weight: 900;
    line-height: 75px;
    text-align: left;
    color: #EE6161;
`;

const DWelcome = styled('a')`
    font-size: 27px;
    font-weight: 400;
    line-height: 35px;
    text-align: left;
    color: #EE6161;
    margin-bottom: 30px;

`;

const BtnDiscover = styled('button')`
    width: 279px;
    height: 81px;
    flex-shrink: 0;
    border-radius: 45px;
    border: 1px solid #EE6161;
    background: #EE6161;
    box-shadow: -5px 8px 4px 0px #B12A2A;
`;

const ContentBtnD = styled('a')`
    justify-content: center;
    font-size: 33px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: #FFF;
`;

const ServiceImages = styled("div")`
    max-width: 515px;
    max-height: 364px;
    margin-left: 80px;
    & > img {
        height: 100%;
    }
`;

