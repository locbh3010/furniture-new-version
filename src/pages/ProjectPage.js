/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";
import ProductCard from "../components/product/ProductCard";
import Loading from "../components/loading/Loading";
import { useNavigate, useSearchParams } from "react-router-dom";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { db } from "../configs/firebase.config";
import ProductList from "../components/product/ProductList";
import { useController, useForm } from "react-hook-form";

const FilterComponent = ({ name, control, children, ...props }) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <select
      name={name}
      id={name}
      className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
      {...field}
      {...props}
    >
      {children}
    </select>
  );
};

const LoadingCard = () => {
  return (
    <div className="w-full h-[400px ] group overflow-hidden">
      <div className="flex aspect-[4/3]">
        <Loading className="rounded-lg" />
      </div>

      <div className="mt-6">
        <h4 className="py-1 text-xl font-bold uppercase text-33">
          <Loading />
        </h4>
        <div className="px-3">
          <Loading radius="10px" height="12px" className="mt-2.5" />
          <Loading radius="10px" height="12px" className="mt-2.5" />
          <Loading radius="10px" height="12px" className="mt-2.5" />
          <Loading radius="10px" height="12px" className="mt-2.5" />
        </div>
      </div>
    </div>
  );
};

const LoadingComponent = () => {
  return (
    <div className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-xl font-bold uppercase md:text-2xl">
          <Loading height="45px" className="max-w-xl mx-auto" />
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 grid-flow-row auto-rows-1fr">
        <LoadingCard></LoadingCard>
        <LoadingCard></LoadingCard>
        <LoadingCard></LoadingCard>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const { control, watch } = useForm({
    mode: onchange,
  });
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState(null);
  const watchFilter = watch("filter");

  useEffect(() => {
    const colRef = collection(db, "products");
    const projectRef = collection(db, "projects");

    onSnapshot(colRef, (res) => {
      const docs = res.docs;
      let temp = [];

      docs?.length > 0 &&
        docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setProducts(temp);
      setLoading(false);
    });

    onSnapshot(projectRef, (res) => {
      let temp = [];

      res.docs?.length > 0 &&
        res.docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));
      setProjects(temp);
    });
  }, []);

  useEffect(() => {
    const colRef = collection(db, "products");
    if (filter && filter !== 0) {
      const productRef = query(colRef, where("cateId", "==", filter));

      onSnapshot(productRef, (res) => {
        const docs = res.docs;
        let temp = [];

        docs?.length > 0 &&
          docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));

        setProducts(temp);
        setLoading(false);
      });
    } else {
      onSnapshot(colRef, (res) => {
        const docs = res.docs;
        let temp = [];

        docs?.length > 0 &&
          docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));

        setProducts(temp);
        setLoading(false);
      });
    }
  }, [filter]);

  useEffect(() => {
    if (watchFilter && watchFilter !== 0) {
      setFilter(watchFilter);
    } else if (watchFilter === 0) {
      setFilter(null);
    }
  }, [watchFilter]);

  return (
    <div>
      <Banner banner={banner} title="Dự án của chúng tôi" />
      <div className="container">
        {loading && <LoadingComponent></LoadingComponent>}
        {!loading && (
          <div className="py-10">
            <div className="py-8">
              <div className="max-w-sm">
                <FilterComponent name="filter" control={control}>
                  <option value="0">Chọn dự án</option>
                  {projects?.length > 0 &&
                    projects.map((project) => (
                      <option value={project.id} key={project.id}>
                        {project.name}
                      </option>
                    ))}
                </FilterComponent>
              </div>
            </div>
            <ProductList>
              {products?.length > 0 &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </ProductList>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
