"use client";
import React from "react";
import { styled } from "@mui/material";
import Marquee from "react-fast-marquee";

export default function AutoScrollBox() {
  return (
    <AutoScrollContainer>
      <Marquee speed={80}>
        <TextBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="51"
            viewBox="0 0 40 51"
            fill="none"
          >
            <path
              d="M36.1998 23.234C35.5428 22.384 34.7429 21.6473 34.0002 20.9106C32.0863 19.2105 29.9153 17.9922 28.087 16.2071C23.8307 12.0703 22.888 5.24182 25.6018 0C22.888 0.651685 20.517 2.12506 18.4888 3.74011C11.0901 9.63361 8.17638 20.0322 11.6615 28.9575C11.7757 29.2408 11.89 29.5242 11.89 29.8925C11.89 30.5159 11.4615 31.0826 10.8902 31.3092C10.2331 31.5926 9.54756 31.4226 9.0048 30.9692C8.8334 30.8275 8.71914 30.6859 8.60487 30.4875C5.37689 26.4358 4.8627 20.6273 7.03373 15.9805C2.26318 19.8339 -0.336348 26.3508 0.0350128 32.4993C0.20641 33.916 0.377807 35.3327 0.863432 36.7494C1.26336 38.4494 2.03465 40.1495 2.89163 41.6512C5.97678 46.553 11.3187 50.0664 17.0605 50.7748C23.1736 51.5398 29.7153 50.4348 34.4002 46.2413C39.6278 41.5378 41.456 34.001 38.7708 27.5408L38.3994 26.8041C37.7995 25.5007 36.1998 23.234 36.1998 23.234ZM27.1729 41.0845C26.373 41.7645 25.059 42.5012 24.0306 42.7846C20.8312 43.9179 17.6318 42.3312 15.7464 40.4612C19.1458 39.6678 21.174 37.1744 21.7739 34.6527C22.2595 32.3859 21.3454 30.5159 20.974 28.3341C20.6312 26.2374 20.6884 24.4524 21.4597 22.4973C22.0024 23.574 22.5737 24.6507 23.2593 25.5007C25.4589 28.3341 28.9154 29.5808 29.6582 33.4343C29.7724 33.831 29.8296 34.2276 29.8296 34.6527C29.9153 36.9761 28.8869 39.5261 27.1729 41.0845Z"
              fill="#ED7272"
            />
          </svg>
          <ContentText>MADE WITH LOVE</ContentText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="51"
            viewBox="0 0 40 51"
            fill="none"
          >
            <path
              d="M36.1998 23.234C35.5428 22.384 34.7429 21.6473 34.0002 20.9106C32.0863 19.2105 29.9153 17.9922 28.087 16.2071C23.8307 12.0703 22.888 5.24182 25.6018 0C22.888 0.651685 20.517 2.12506 18.4888 3.74011C11.0901 9.63361 8.17638 20.0322 11.6615 28.9575C11.7757 29.2408 11.89 29.5242 11.89 29.8925C11.89 30.5159 11.4615 31.0826 10.8902 31.3092C10.2331 31.5926 9.54756 31.4226 9.0048 30.9692C8.8334 30.8275 8.71914 30.6859 8.60487 30.4875C5.37689 26.4358 4.8627 20.6273 7.03373 15.9805C2.26318 19.8339 -0.336348 26.3508 0.0350128 32.4993C0.20641 33.916 0.377807 35.3327 0.863432 36.7494C1.26336 38.4494 2.03465 40.1495 2.89163 41.6512C5.97678 46.553 11.3187 50.0664 17.0605 50.7748C23.1736 51.5398 29.7153 50.4348 34.4002 46.2413C39.6278 41.5378 41.456 34.001 38.7708 27.5408L38.3994 26.8041C37.7995 25.5007 36.1998 23.234 36.1998 23.234ZM27.1729 41.0845C26.373 41.7645 25.059 42.5012 24.0306 42.7846C20.8312 43.9179 17.6318 42.3312 15.7464 40.4612C19.1458 39.6678 21.174 37.1744 21.7739 34.6527C22.2595 32.3859 21.3454 30.5159 20.974 28.3341C20.6312 26.2374 20.6884 24.4524 21.4597 22.4973C22.0024 23.574 22.5737 24.6507 23.2593 25.5007C25.4589 28.3341 28.9154 29.5808 29.6582 33.4343C29.7724 33.831 29.8296 34.2276 29.8296 34.6527C29.9153 36.9761 28.8869 39.5261 27.1729 41.0845Z"
              fill="#ED7272"
            />
          </svg>
        </TextBox>
        <TextBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="51"
            viewBox="0 0 40 51"
            fill="none"
          >
            <path
              d="M36.1998 23.234C35.5428 22.384 34.7429 21.6473 34.0002 20.9106C32.0863 19.2105 29.9153 17.9922 28.087 16.2071C23.8307 12.0703 22.888 5.24182 25.6018 0C22.888 0.651685 20.517 2.12506 18.4888 3.74011C11.0901 9.63361 8.17638 20.0322 11.6615 28.9575C11.7757 29.2408 11.89 29.5242 11.89 29.8925C11.89 30.5159 11.4615 31.0826 10.8902 31.3092C10.2331 31.5926 9.54756 31.4226 9.0048 30.9692C8.8334 30.8275 8.71914 30.6859 8.60487 30.4875C5.37689 26.4358 4.8627 20.6273 7.03373 15.9805C2.26318 19.8339 -0.336348 26.3508 0.0350128 32.4993C0.20641 33.916 0.377807 35.3327 0.863432 36.7494C1.26336 38.4494 2.03465 40.1495 2.89163 41.6512C5.97678 46.553 11.3187 50.0664 17.0605 50.7748C23.1736 51.5398 29.7153 50.4348 34.4002 46.2413C39.6278 41.5378 41.456 34.001 38.7708 27.5408L38.3994 26.8041C37.7995 25.5007 36.1998 23.234 36.1998 23.234ZM27.1729 41.0845C26.373 41.7645 25.059 42.5012 24.0306 42.7846C20.8312 43.9179 17.6318 42.3312 15.7464 40.4612C19.1458 39.6678 21.174 37.1744 21.7739 34.6527C22.2595 32.3859 21.3454 30.5159 20.974 28.3341C20.6312 26.2374 20.6884 24.4524 21.4597 22.4973C22.0024 23.574 22.5737 24.6507 23.2593 25.5007C25.4589 28.3341 28.9154 29.5808 29.6582 33.4343C29.7724 33.831 29.8296 34.2276 29.8296 34.6527C29.9153 36.9761 28.8869 39.5261 27.1729 41.0845Z"
              fill="#ED7272"
            />
          </svg>
          <ContentText>MADE WITH LOVE</ContentText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="51"
            viewBox="0 0 40 51"
            fill="none"
          >
            <path
              d="M36.1998 23.234C35.5428 22.384 34.7429 21.6473 34.0002 20.9106C32.0863 19.2105 29.9153 17.9922 28.087 16.2071C23.8307 12.0703 22.888 5.24182 25.6018 0C22.888 0.651685 20.517 2.12506 18.4888 3.74011C11.0901 9.63361 8.17638 20.0322 11.6615 28.9575C11.7757 29.2408 11.89 29.5242 11.89 29.8925C11.89 30.5159 11.4615 31.0826 10.8902 31.3092C10.2331 31.5926 9.54756 31.4226 9.0048 30.9692C8.8334 30.8275 8.71914 30.6859 8.60487 30.4875C5.37689 26.4358 4.8627 20.6273 7.03373 15.9805C2.26318 19.8339 -0.336348 26.3508 0.0350128 32.4993C0.20641 33.916 0.377807 35.3327 0.863432 36.7494C1.26336 38.4494 2.03465 40.1495 2.89163 41.6512C5.97678 46.553 11.3187 50.0664 17.0605 50.7748C23.1736 51.5398 29.7153 50.4348 34.4002 46.2413C39.6278 41.5378 41.456 34.001 38.7708 27.5408L38.3994 26.8041C37.7995 25.5007 36.1998 23.234 36.1998 23.234ZM27.1729 41.0845C26.373 41.7645 25.059 42.5012 24.0306 42.7846C20.8312 43.9179 17.6318 42.3312 15.7464 40.4612C19.1458 39.6678 21.174 37.1744 21.7739 34.6527C22.2595 32.3859 21.3454 30.5159 20.974 28.3341C20.6312 26.2374 20.6884 24.4524 21.4597 22.4973C22.0024 23.574 22.5737 24.6507 23.2593 25.5007C25.4589 28.3341 28.9154 29.5808 29.6582 33.4343C29.7724 33.831 29.8296 34.2276 29.8296 34.6527C29.9153 36.9761 28.8869 39.5261 27.1729 41.0845Z"
              fill="#ED7272"
            />
          </svg>
        </TextBox>
        <TextBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="51"
            viewBox="0 0 40 51"
            fill="none"
          >
            <path
              d="M36.1998 23.234C35.5428 22.384 34.7429 21.6473 34.0002 20.9106C32.0863 19.2105 29.9153 17.9922 28.087 16.2071C23.8307 12.0703 22.888 5.24182 25.6018 0C22.888 0.651685 20.517 2.12506 18.4888 3.74011C11.0901 9.63361 8.17638 20.0322 11.6615 28.9575C11.7757 29.2408 11.89 29.5242 11.89 29.8925C11.89 30.5159 11.4615 31.0826 10.8902 31.3092C10.2331 31.5926 9.54756 31.4226 9.0048 30.9692C8.8334 30.8275 8.71914 30.6859 8.60487 30.4875C5.37689 26.4358 4.8627 20.6273 7.03373 15.9805C2.26318 19.8339 -0.336348 26.3508 0.0350128 32.4993C0.20641 33.916 0.377807 35.3327 0.863432 36.7494C1.26336 38.4494 2.03465 40.1495 2.89163 41.6512C5.97678 46.553 11.3187 50.0664 17.0605 50.7748C23.1736 51.5398 29.7153 50.4348 34.4002 46.2413C39.6278 41.5378 41.456 34.001 38.7708 27.5408L38.3994 26.8041C37.7995 25.5007 36.1998 23.234 36.1998 23.234ZM27.1729 41.0845C26.373 41.7645 25.059 42.5012 24.0306 42.7846C20.8312 43.9179 17.6318 42.3312 15.7464 40.4612C19.1458 39.6678 21.174 37.1744 21.7739 34.6527C22.2595 32.3859 21.3454 30.5159 20.974 28.3341C20.6312 26.2374 20.6884 24.4524 21.4597 22.4973C22.0024 23.574 22.5737 24.6507 23.2593 25.5007C25.4589 28.3341 28.9154 29.5808 29.6582 33.4343C29.7724 33.831 29.8296 34.2276 29.8296 34.6527C29.9153 36.9761 28.8869 39.5261 27.1729 41.0845Z"
              fill="#ED7272"
            />
          </svg>
          <ContentText>MADE WITH LOVE</ContentText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="51"
            viewBox="0 0 40 51"
            fill="none"
          >
            <path
              d="M36.1998 23.234C35.5428 22.384 34.7429 21.6473 34.0002 20.9106C32.0863 19.2105 29.9153 17.9922 28.087 16.2071C23.8307 12.0703 22.888 5.24182 25.6018 0C22.888 0.651685 20.517 2.12506 18.4888 3.74011C11.0901 9.63361 8.17638 20.0322 11.6615 28.9575C11.7757 29.2408 11.89 29.5242 11.89 29.8925C11.89 30.5159 11.4615 31.0826 10.8902 31.3092C10.2331 31.5926 9.54756 31.4226 9.0048 30.9692C8.8334 30.8275 8.71914 30.6859 8.60487 30.4875C5.37689 26.4358 4.8627 20.6273 7.03373 15.9805C2.26318 19.8339 -0.336348 26.3508 0.0350128 32.4993C0.20641 33.916 0.377807 35.3327 0.863432 36.7494C1.26336 38.4494 2.03465 40.1495 2.89163 41.6512C5.97678 46.553 11.3187 50.0664 17.0605 50.7748C23.1736 51.5398 29.7153 50.4348 34.4002 46.2413C39.6278 41.5378 41.456 34.001 38.7708 27.5408L38.3994 26.8041C37.7995 25.5007 36.1998 23.234 36.1998 23.234ZM27.1729 41.0845C26.373 41.7645 25.059 42.5012 24.0306 42.7846C20.8312 43.9179 17.6318 42.3312 15.7464 40.4612C19.1458 39.6678 21.174 37.1744 21.7739 34.6527C22.2595 32.3859 21.3454 30.5159 20.974 28.3341C20.6312 26.2374 20.6884 24.4524 21.4597 22.4973C22.0024 23.574 22.5737 24.6507 23.2593 25.5007C25.4589 28.3341 28.9154 29.5808 29.6582 33.4343C29.7724 33.831 29.8296 34.2276 29.8296 34.6527C29.9153 36.9761 28.8869 39.5261 27.1729 41.0845Z"
              fill="#ED7272"
            />
          </svg>
        </TextBox>
      </Marquee>
    </AutoScrollContainer>
  );
}

const AutoScrollContainer = styled("div")`
  background: #fff;
  color: #000;
  border-top: 4px solid #f73535;
  border-bottom: 4px solid #f73535;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
`;

const TextBox = styled("a")`
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

const ContentText = styled("a")`
  color: #000;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 15px;
`;
