"use client";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div className="contact-page">
      <Contacth1>Contact Me</Contacth1>
      <br />
      <ContactBox sx={{ p: 2, display: "flex" }}>
        <ContactImg src="photo\bunbo.png" alt="" className="inside-photo" />
        <Stack spacing={0.5}>
          <div className="links">
            <Contacta href="https://www.facebook.com/" target="_blank">
              <FacebookIcon />
              Quỳnh Anh nè
            </Contacta>
            <br />
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
  font-size: 30px;
  font-family: "Inter";
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ContactBox = styled("Box")`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Contacta = styled("a")`
  color: #ee6161;
  font-size: 15px;
  font-family: "Inter";
  font-weight: 900;
  place-items: center;

  display: flex;
  justify-content: flex-start;
  text-align: left;
`;
const ContactImg = styled("img")`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 40px;
`;

export default Contact;
