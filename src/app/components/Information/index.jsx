"use client";

import * as React from "react";
import { styled } from "@mui/material";

const Header = styled("p")`
  color: #ee6161;
  font-size: 70px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-align: center;
`;

const Paragraph = styled("p")`
  display: flex;
  width: 1344px;
  margin-left: 48px;
  flex-shrink: 0;
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left;
`;

export default function Information() {
  return (
    <div className="mt-20">
      <Header className="text-3xl md:text-4xl lg:text-6xl">About</Header>

      <p className="text-xl md:text-2xl lg:text-3xl mx-20 my-8 leading-loose ">
        Chào mừng bạn đến với quán bún bò của chúng tôi, nơi hòa quyện hương vị
        truyền thống và sự sáng tạo độc đáo. Tại đây, chúng tôi tự hào mang đến
        cho khách hàng những trải nghiệm ẩm thực đặc sắc, nơi hương thơm bò nước
        thơm nồng và những sợi bún mềm mại gặp gỡ cùng những loại rau sống tươi
        ngon.
      </p>

      <p className="text-xl md:text-2xl lg:text-3xl mx-20 my-8 leading-loose ">
        Bí quyết của chúng tôi nằm ở việc chọn lựa những nguyên liệu tốt nhất,
        từ thịt bò mềm ngon, nước dùng được ủ tự nhiên đến các loại gia vị riêng
        biệt, tạo nên một sự kết hợp hoàn hảo. Đội ngũ đầu bếp tại quán luôn tận
        tâm và tài năng, sáng tạo ra những biến tấu mới, giúp món bún bò trở nên
        độc đáo và thú vị.
      </p>

      <p className="text-xl md:text-2xl lg:text-3xl mx-20 my-8 leading-loose ">
        Không chỉ là nơi để thưởng thức ẩm thực, quán bún bò của chúng tôi còn
        là không gian ấm cúng, thoải mái, nơi bạn có thể tận hưởng bữa ăn ngon
        miệng cùng gia đình và bạn bè. Hãy đến và trải nghiệm sự hài lòng từ mỗi
        miếng ăn tại quán bún bò của chúng tôi – nơi hội tụ niềm đam mê ẩm thực
        và tình cảm chân thành.
      </p>
    </div>
  );
}
