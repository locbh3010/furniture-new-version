import React, { useEffect } from "react";
import axios from "axios";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2";
import Dropdown from "../components/dropdown/Dropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const API_ENDPOINT =
    "http://apionhome.noithatnhabanfurniture.com/mail/contact";
  const alert = () => {
    Swal.fire({
      title: "Thành công",
      text: "Chúng tôi sẽ phản hồi sớm nhất",
      icon: "success",
    });
  };
  const schema = yup.object({
    name: yup.string().required("Hãy nhập tên của bạn").max(50),
    email: yup
      .string()
      .email("Email chưa đúng")
      .required("Hãy nhập email của bạn"),
    phone: yup
      .string()
      .required("Hãy nhập số điện thoại của bạn")
      .min(9)
      .max(12),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: onchange,
    resolver: yupResolver(schema),
  });
  const handleSendMail = (value) => {
    if (!isValid) return;
    axios.post(API_ENDPOINT, value).then((resolve) => {
      alert();
    });
  };

  useEffect(() => {
    const arrErr = Object.values(errors);
    if (arrErr.length > 0) {
      const message = arrErr[0]?.message;

      Swal.fire({
        title: "Thất bại",
        text: message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }, [errors]);

  return (
    <div>
      <Banner banner={banner} title="Liên hệ với Furniture nhà bạn" />
      <div className="max-w-5xl px-5 py-20 mx-auto">
        <div>
          <h2 className="text-3xl font-medium">Liên hệ với chúng tôi</h2>
          <span className="block mb-10 text-sm text-dark">
            Chúng tôi sẽ trả lời nhanh nhất
          </span>
          <div className="px-2 mb-16 text-sm uppercase text-dark gap-7">
            <div className="grid grid-flow-row grid-cols-1 break-words gap-7 auto-rows-auto md:grid-cols-3">
              <div>
                <span className="block mb-1 opacity-60">địa chỉ:</span>
                <p>790, MỸ PHƯỚC TÂN VẠN, PHÚ MỸ, THỦ DẦU MỘT, BÌNH DƯƠNG</p>
              </div>
              <div>
                <span className="block mb-1 opacity-60">email:</span>
                <p>CONGTYNOITHATNHABAN@GMAIL.COM</p>
              </div>
              <div>
                <span className="block mb-1 opacity-60">số điện thoại</span>
                <a href="tel:0933355548" className="block">
                  0933355548
                </a>
              </div>
            </div>
          </div>
        </div>
        <form action="#" onSubmit={handleSubmit(handleSendMail)}>
          <div className="py-6">
            <Input
              name="name"
              placeholder="Nhập họ và tên..."
              control={control}
            />
          </div>
          <div className="py-6">
            <Input name="email" placeholder="Nhập email..." control={control} />
          </div>
          <div className="py-6">
            <Input
              name="phone"
              placeholder="Nhập số điện thoại..."
              control={control}
            />
          </div>
          <div className="py-6">
            <Dropdown name="content" control={control} />
          </div>
          <button
            type="submit"
            className="px-4 py-3 mt-10 text-sm font-medium text-center text-white uppercase duration-300 border rounded cursor-pointer bg-dark border-dark hover:bg-white hover:text-dark"
          >
            Gửi tin nhắn
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
