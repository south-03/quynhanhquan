"use client";

import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="mt-10 mb-10">
      <Contacth1>Contact Me</Contacth1>
      <ContactBox>
        <ContactImg src="photo\bunbo.png" alt="" />
        <Stack spacing={0.5}>
          <div className="links">
            <Contacta href="https://www.facebook.com/" target="_blank">
              <FacebookIcon className="large" />
              Quỳnh Anh nè
            </Contacta>

            <Contacta href="mailto:bunboquynhanh@gmail.com">
              <EmailIcon />
              bunboquynhanh@gmail.com
            </Contacta>
          </div>
        </Stack>
      </ContactBox>
    </div>
  );
}

const Contacth1 = styled("h1")`
  color: #ee6161;
  font-size: 70px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 70px;
  }
`;
const ContactBox = styled("Box")`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }

    .links {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 300px;
      height: 300px;
    }

    .links {
      font-size: 20px;
    }
  }
`;
const Contacta = styled("a")`
  color: #ee6161;
  font-size: 30px;
  font-weight: 900;
  place-items: center;
  display: flex;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;
const ContactImg = styled("img")`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-left: 60px;
  }
  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`;
