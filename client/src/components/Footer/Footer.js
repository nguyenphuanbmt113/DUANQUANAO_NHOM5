import React from "react";

export const Footer = () => {
  return (
    <div className="bg-graylight border py-12 md:py-7">
      <div className="h-[100%] max-w-[1208px] mx-auto px-2 ">
        <div className="text-[14px] grid grid-cols-3 gap-4 md:gap-2 md:grid-cols-1 text-[rgba(0,0,0,.65)]">
          <div className="col-span-1">
            <span> © 2023 Shopee. Tất cả các quyền được bảo lưu.</span>
          </div>
          <div className="col-span-2">
            <span>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia
              Việt Nam Philippines Brazil México Colombia Chile
            </span>
          </div>
        </div>
        <div className="text-center text-sm mt-10 text-[rgba(0,0,0,.65)]">
          <span>Công ty TNHH Shopee</span>
          <div>
            <div className="mt-5">
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
              Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
              đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </div>
            <div className="mt-5">
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
              liên hệ: 024 73081221 (ext 4678)
            </div>
            <div className="mt-5">
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội
              cấp lần đầu ngày 10/02/2015
            </div>
            <div className="mt-5">
              © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
