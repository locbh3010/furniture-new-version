import React from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import ProductList from "../product/ProductList";

const products = [
  {
    id: 1,
    image_list: [
      "https://wallpaperaccess.com/full/2076086.jpg",
      "https://c4.wallpaperflare.com/wallpaper/215/944/975/warm-and-modern-living-room-living-room-set-wallpaper-preview.jpg",
    ],
    name: "NỘI THẤT CĂN HỘ COMPASS ONE BÌNH DƯƠNG PHÙ HỢP VỚI VỢ CHỒNG TRẺ",
    project: "Compass One – Chánh nghĩa, Bình Dương",
    client: "Chị Khánh Hòa",
    area_size: "67.72",
    style: "Hiện đại",
  },
  {
    id: 2,
    image_list: [
      "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=2000",
      "https://www.wallpaperup.com/uploads/wallpapers/2013/12/09/189005/f98620f20e2376864e012198f7f8e9a3.jpg",
    ],
    name: "THIẾT KẾ NỘI THẤT BÌNH DƯƠNG CĂN HỘ THE VIEW – CHỊ WÚ XĨN RÓNG",
    project: "Midori Park The View – Tp.Mới, Bình Dương",
    client: "Chị Wú Xĩn Róng",
    area_size: "107",
    style: "Hiện đại",
  },
  {
    id: 3,
    image_list: [
      "https://img5.goodfon.com/wallpaper/nbig/0/89/stil-interer-mebel-divan-gostinaia-style-interior-furniture.jpg",
      "https://www.wallpaperuse.com/wallp/78-782000_m.jpg",
    ],
    name: "NỘI THẤT BÌNH DƯƠNG CĂN HỘ THE VIEW 1 PHÒNG NGỦ – CHỊ NGỌC TUYỀN",
    project: "Midori Park The View – Tp.Mới, Bình Dương",
    client: "Chị Ngọc Tuyền",
    area_size: "35",
    style: "Hiện đại",
  },
  {
    id: 4,
    image_list: [
      "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "https://i.pinimg.com/736x/f9/7f/4c/f97f4c3965195de2b22b0f4495ba490e.jpg",
    ],
    name: "THIẾT KẾ NỘI THẤT CĂN HỘ BÌNH DƯƠNG THE HABITAT SANG TRỌNG",
    project: "The Habitat – Thuận An, Bình Dương",
    client: "Anh Thanh",
    area_size: "95",
    style: "Hiện đại",
  },
  {
    id: 5,
    image_list: [
      "https://c4.wallpaperflare.com/wallpaper/59/97/72/design-sofa-furniture-watch-wallpaper-preview.jpg",
      "https://cdn.wallpaper.com/main/styles/fp_1540x944/s3/magis_costume_1seater_ambient_sd5142_kvadrat_uniform_melange_green_963_03.jpg",
    ],
    name: "NỘI THẤT NHÀ PHỐ BÌNH DƯƠNG SUN CASA – CHỊ THÚY",
    project: "Sun Casa – Thủ Dầu Một, Bình Dương",
    client: "Chị Thúy",
    area_size: "288",
    style: "Hiện đại",
  },
  {
    id: 6,
    image_list: [
      "https://img5.goodfon.com/wallpaper/nbig/c/5e/stol-buket-vaza-interer.jpg",
      "https://img5.goodfon.com/wallpaper/nbig/0/89/stil-interer-mebel-divan-gostinaia-style-interior-furniture.jpg",
    ],
    name: "THIẾT KẾ NỘI THẤT BIỆT THỰ PHONG CÁCH HIỆN ĐẠI TẠI BÌNH DƯƠNG",
    project: "Phú Lợi – Thủ Dầu Một, Bình Dương",
    client: "Anh Đức",
    area_size: "150",
    style: "Hiện đại",
  },
];

const ProjectHome = () => {
  return (
    <section className="py-20 bg-[#F2F5FF]">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold uppercase md:text-3xl">
            Sản phẩm <span className=" text-primary"> CỦA CHÚNG TÔI:</span>
          </h2>
        </div>

        {/* product list */}
        <ProductList>
          {products?.length > 0 &&
            products.slice(0, 6).map((product, index) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                ></ProductCard>
              );
            })}
        </ProductList>

        <div className="flex items-center justify-center mt-20">
          <NavLink
            className="inline-block px-4 py-2 text-base text-center text-white duration-300 border-2 border-primary bg-primary hover:bg-transparent hover:text-dark hover:border-dark md:text-lg"
            to="/project"
          >
            Xem tất cả
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProjectHome;
