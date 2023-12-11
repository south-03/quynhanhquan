"use client";
import { AppBar, Stack, Toolbar, styled, Grid } from "@mui/material";
import * as React from "react";
import logo from "../../../../public/favicon.ico";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import MapIcon from "@mui/icons-material/Map";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";

export default function Header() {
  return (
    <AppBarContainer>
      <AppBar
        position="static"
        sx={{ background: "#FFFFFF" }}
        className="nav header"
      >
        <Toolbar>
          <LogoContainer onClick={() => navigate("/")}>
            <Image src={logo} alt="logo" />
          </LogoContainer>

          <nav className="items-center">
            <Stack direction={"row"} position="relative" sx={{ ml: 15 }}>
              <ContainerMenu>
                <ContainerBtn>
                  <MenuIcon sx={{ color: "#EE6161", fontSize: 40 }} />
                  <ContentNbtn>Menu</ContentNbtn>
                </ContainerBtn>

                <ContainerBtn>
                  <MapIcon sx={{ color: "#EE6161", fontSize: 40 }} />
                  <ContentNbtn>Map</ContentNbtn>
                </ContainerBtn>

                <ContainerBtn>
                  <InfoIcon sx={{ color: "#EE6161", fontSize: 40 }} />
                  <ContentNbtn>About</ContentNbtn>
                </ContainerBtn>

                <ContainerBtn>
                  <ContactsIcon sx={{ color: "#EE6161", fontSize: 40 }} />
                  <ContentNbtn>Contact</ContentNbtn>
                </ContainerBtn>
              </ContainerMenu>
            </Stack>
          </nav>
        </Toolbar>
      </AppBar>
    </AppBarContainer>
  );
  }

const AppBarContainer = styled("div")`
  // max-width: 1440px;
`;

const LogoContainer = styled("div")`
  width: 180px;
  height: 180px;
  padding: 5px;
`;

const ContainerMenu = styled("a")`
  width: 850px;
  height: 60px;
  display: flex;
  padding: 5px;
  border-radius: 40px;
  border: 1px solid #ee6161;
`;

const ContainerBtn = styled("button")`
  display: flex;
  padding: 5px;
  margin-left: 50px;
`;

const ContentNbtn = styled("p")`
  font-size: 30px;
  font-weight: 400;
  line-height: 44px;
  color: #ee6161;
  margin-left: 10px;
`;
