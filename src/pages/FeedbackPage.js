import axios from "axios";
import React, { useEffect, useState } from "react";
import FeedbackCard from "../components/feedback/FeedbackCard";
import FeedbackList from "../components/feedback/FeedbackList";
import Loading from "../components/loading/Loading";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";

const getEndpoint = (params) => {
  const endpoint = `http://apionhome.noithatnhabanfurniture.com${params}`;

  return endpoint;
};

const LoadingCard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-4 py-4"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <Loading />
      </div>
      <div className="flex flex-col gap-2 text-sm font-medium text-justify">
        <Loading
          width="150px"
          height="12px"
          radius="8px"
          className={"mx-auto"}
        />
        <Loading width="300px" height="12px" radius="8px" />
        <Loading width="300px" height="12px" radius="8px" />
        <Loading width="300px" height="12px" radius="8px" />
        <Loading width="300px" height="12px" radius="8px" />
      </div>
      <div className="w-full overflow-hidden aspect-video">
        <Loading />
      </div>
    </div>
  );
};

const FeedbackPage = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const endpoint = getEndpoint("/project/list");
    setLoading(true);

    axios.get(endpoint).then((response) => {
      const projects = response.data.data;
      if (projects?.length > 0) {
        const id = projects[projects.length - 1].id;
        axios.get(getEndpoint(`/product/list/${id}`)).then((response) => {
          const products = response.data.data;

          setProductList(products);
          setLoading(false);
        });
      }
    });
  }, []);

  return (
    <div>
      <Banner title="Ý kiến khách hàng" banner={banner}></Banner>

      <div className="container py-20">
        {loading ? (
          <FeedbackList>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </FeedbackList>
        ) : (
          <FeedbackList>
            {productList?.length > 0 &&
              productList
                .slice(-12)
                .map((product) => (
                  <FeedbackCard product={product} key={product.id} />
                ))}
          </FeedbackList>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
