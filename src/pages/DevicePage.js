import React from "react";
import Banner from "../components/section/Banner";
import bannerImg from "../images/img.jpg";
import xuongSanXuat1 from "../images/xuong-san-xuat-1.jpg";
import xuongSanXuat2 from "../images/xuong-san-xuat-2.jpg";
import thietBiCNC from "../images/thiet-bi-cnc.jpg";
import thietBiCatDanCanh from "../images/thiet-bi-cat-canh.jpg";
import thietbiMayKhoanNamMat from "../images/thiet-bi-may-khoan-nam-mat.jpg";
import vanMFC from "../images/van-mfc.jpg";
import laminate from "../images/laminate.jpg";
import { isMobile } from "react-device-detect";

const Section = ({ children, title }) => {
  return (
    <div className="py-10">
      <h2 className="text-33 text-[28px] font-bold mb-5">{title}</h2>
      {children}
    </div>
  );
};

const DevicePage = () => {
  return (
    <div>
      <Banner title="thiết bị sản xuất" banner={bannerImg} />
      <div className="container text-33">
        <Section title="1/ Xưởng sản xuât">
          <p className="mb-4 leading-normal text-justify sm:text-left">
            Nhà xưởng chúng tôi đặt ngay trên cao tốc mỹ phước tân vạn với diện
            thích hơn 500m2 cùng với những nhân công lành nghề và thiết bị sản
            xuất hiện đại với mong muốn tạo ra những sản phẩm tốt nhất cho khách
            hàng đã tin tưởng và lựa chọn chúng tôi
          </p>
          <div className="grid gap-3 gird-cols-1 md:grid-cols-2">
            <img
              src={xuongSanXuat1}
              alt="xuong san xuat"
              className="object-cover w-full h-full"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset={`${isMobile ? "-1000" : "-800"}`}
            />
            <img
              src={xuongSanXuat2}
              alt="xuong san xuat"
              className="object-cover w-full h-full"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset={`${isMobile ? "-1000" : "-800"}`}
            />
          </div>
          <p className="mt-4 text-lg text-center uppercase">
            790, MỸ PHƯỚC TÂN VẠN, PHÚ MỸ, THỦ DẦU MỘT, BÌNH DƯƠNG
          </p>
        </Section>
        <Section title="2/ Thiết bị sản xuất">
          <p className="mb-8 leading-loose text-justify sm:text-left">
            Thiết bị sản xuất là một trong những điểm mạnh của chúng tôi
            <br />
            Với thiết bị sản xuất hiện đại nhất trong lĩnh vực đồ nội thất tại
            bình dương
            <br />
            Chúng tôi tự tin sẽ đem đến sự nhanh chóng từ sản phẩm đến thời gian
            của khách hàng từ lớn đến vừa và hộ gia đình
            <br />
            Các thiết bị mà chúng tôi đang sử dụng :
          </p>

          <div className="grid grid-flow-row gird-cols-1 gap-7 md:auto-rows-[576px] auto-rows-[320px]">
            <div className="mb-4">
              <img
                src={thietBiCNC}
                alt={thietBiCNC}
                className="object-cover w-full h-full"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-offset="400"
              />
              <span className="block mt-2 leading-normal text-center">
                Thiết bị máy cắt CNC
              </span>
            </div>
            <div className="mb-4">
              <img
                src={thietBiCatDanCanh}
                alt={thietBiCatDanCanh}
                className="object-cover w-full h-full"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-offset="400"
              />
              <span className="block mt-2 leading-normal text-center">
                Thiết bị máy cắt dán cạnh
              </span>
            </div>
            <div className="mb-4">
              <img
                src={thietbiMayKhoanNamMat}
                alt={thietbiMayKhoanNamMat}
                className="object-cover w-full h-full"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-offset="400"
              />
              <span className="block mt-2 leading-normal text-center">
                Thiết bị máy khoan năm mặt
              </span>
            </div>
          </div>
        </Section>
        <Section title={"3/ Vật tử chủ đạo"}>
          <div className="mb-8">
            <p className="mb-4">
              Đây gần như là một trong những khâu quan trọng nhất trong lĩnh vực
              đồ nột thất
            </p>
            <p className="mb-4">
              Sản phẩm được là ra có đẹp có trường tồn theo thời gian không
            </p>
          </div>
          <div className="mb-20">
            <div className="mb-8">
              <h3 className="py-4 text-lg font-semibold uppercase">
                VÁN MFC & VÁN PHỦ MELAMINE
              </h3>
              <p className="mb-4 leading-normal">
                MFC được viết tắt của Melamine Faced Chipboard, là loại ván gỗ
                dăm phủ nhựa Melamine. Ván MFC có ứng dụng vô cùng rộng rãi đặc
                biệt là trong lĩnh vực nội thất văn phòng, nhà ở, chung cư cao
                cấp, bệnh viện, trường học, nội thất trẻ em…
              </p>
            </div>
            <div className="gap-7.5 lg:grid grid-cols-2">
              <div
                className="w-full"
                data-aos="fade-right"
                data-aos-offset="500"
              >
                <img
                  src={vanMFC}
                  alt="Ván MFC"
                  className="object-cover w-full h-[400px]"
                />
              </div>
              <div>
                <h4 className="py-4 mt-8 text-lg font-semibold">
                  VÁN MFC & VÁN PHỦ MELAMINE
                </h4>
                <p className="leading-relaxed">
                  Kích thước và độ dày ván MFC tiêu chuẩn:
                  <br />
                  4′ x 8′ 1.220 x 2.440 x (9 – 50)mm
                  <br />
                  6′ x 8′
                  <br />
                  1.8 30 x 2.440 x (12/18/25/30)mm
                  <br />
                  Loại vượt khổ:
                  <br />
                  Bên cạnh ván MFC chuẩn, An Cường còn cung cấp các loại ván MFC
                  vượt khổ, giúp đa dạng hóa các ý tưởng thiết kế cần kích thước
                  lớn như sau: 4′ x 9′ 1.220 x 2.745 x (18/25)mm
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="mb-4">
                Bên cạnh đó chúng tôi cung cấp MFC chống ẩm lõi xanh V313 tương
                tự màu như MFC loại chuẩn.
              </p>
              <p className="mb-4">
                Với đặc tính chống ẩm, MFC chống ẩm được khuyến cáo nên sử dụng
                cho khu vực ẩm ướt như bếp, khu vệ sinh ( tủ bếp, tủ vệ sinh,
                vách toilet, vách ngăn vệ sinh), phòng thí nghiệm, bệnh viện,
                trường học,v.v.
              </p>
              <p className="mb-4">Loại phối 2 màu:</p>
              <p className="mb-4">
                Ván MFC phối 2 màu, tuyệt nhiên không thấy đường nối giữa các
                mảng gỗ được phối màu. Điểm nhấn màu sắc và sự liền mạch giữa
                các mảng gỗ sang trọng sẽ giúp cho các ứng dụng nội thất trở nên
                khác biệt và đẳng cấp.
              </p>
            </div>
          </div>
          <div className="mb-40">
            <div className="mb-8">
              <h3 className="py-4 text-lg font-semibold uppercase">
                TẤM LAMINATE
              </h3>
              <p className="mb-4 leading-normal">
                Laminate hay còn được gọi là Formica, thực chất đây chính là
                chất liệu bề mặt được dán lên bề mặt code gỗ công nghiệp.
              </p>
              <p className="mb-4">
                Tấm Laminate An Cường được biết đến là loại gỗ công nghiệp, sản
                xuất bởi công ty An Cường. Nó được làm bằng gỗ công nghiệp MDF
                có khả năng chống ẩm và được phủ một lớp Laminate phía ngoài
              </p>
            </div>
            <div className="gap-7.5 lg:grid grid-cols-2 items-center">
              <div>
                <h4 className="py-4 mt-8 text-lg font-semibold">
                  KÍCH THƯỚC TẤM LAMINATE
                </h4>
                <p className="leading-loose">
                  Kích thước của tấm Laminate An Cường hiện nay trên thị trường
                  là :
                  <br />
                  1.22m × 2.44m, độ dày từ 0.7 – 0.8mm.
                  <br />
                  1830mm x 4300mm, độ dày 0,7 x 0,8mm
                  <br />
                  1050mm x 3050mm, độ dày 0,7 x 0,8mm
                  <br />
                  SÀN GỖ CÔNG NGHIỆP
                  <br />
                  VÁN THÔ CÔNG NGIỆP……..
                </p>
              </div>
              <div className="w-full">
                <img
                  src={laminate}
                  alt="TẤM LAMINATE"
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </div>
            <div className="mt-8">
              <p className="mb-4">Cấu tạo của tấm Laminate AN CƯỜNG</p>
              <p className="mb-4">
                Tấm Laminate được cấu tạo với 4 lớp được liên kết chặt chẽ với
                nhau bao gồm:
              </p>
              <ul className="leading-loose list-decimal">
                <li>
                  Lớp màng phủ bên ngoài (Overlay): có tác dụng giữ độ bền đẹp
                  cho tấm Laminate
                </li>
                <li>
                  Lớp phim tạo màu kỹ thuật (Decorative Paper): nhằm tạo màu sắc
                  và hoa văn cho tấm Laminate
                </li>
                <li>
                  Bên trong là lớp gỗ MDF có tác dụng chống ẩm và và khả năng
                  chịu lực
                </li>
                <li>
                  Cuối cùng chính là lớp giấy nền (Kraft Paper) để bảo vệ tấm
                  Laminate
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default DevicePage;
