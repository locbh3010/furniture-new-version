import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";
import ProductCard from "../components/product/ProductCard";
import Loading from "../components/loading/Loading";
import { api } from "../utils/API";

const getEndpoint = (params) => {
  const endpoint = `${api}${params}`;

  return endpoint;
};

const ProductList = ({ project }) => {
  const { name, id } = project;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const endpoint = getEndpoint(`/product/list/${+id}`);

    axios.get(endpoint).then((response) => {
      const data = response.data.data;
      setProductList(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-xl font-bold uppercase md:text-2xl">{name}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 grid-flow-row auto-rows-1fr">
        {productList?.length > 0 &&
          productList.map((item) => (
            <ProductCard project_name={name} product={item} key={item.id} />
          ))}
      </div>
    </div>
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

const Dropdown = ({ name, children, ...props }) => {
  // const { field } = useController({
  //   control,
  //   name,
  //   defaultValue: "0",
  // });
  return (
    <select
      name={name}
      id={name}
      className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none uppercase"
      // {...field}
      {...props}
    >
      {children}
    </select>
  );
};

const ProjectPage = () => {
  const [filter, setFilter] = useState(0);
  const [projectList, setProjectList] = useState([]);
  const [projectName, setProjectName] = useState(undefined);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilter = (e) => {
    setFilter(+e.target.value);
  };

  useEffect(() => {
    const endpoint = getEndpoint("/project/list");
    setLoading(true);

    axios.get(endpoint).then(async (response) => {
      const projects = response.data.data;
      projects.length > 0 ? setProjectList(projects) : setProjectList(0);

      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);

    axios.get(getEndpoint(`/project/list`)).then(async (response) => {
      const data = response.data.data;
      await data.forEach((project) => {
        project.id === +filter && setProjectName(project.name);
      });
    });

    if (filter !== 0) {
      const endpoint = getEndpoint(`/product/list/${+filter}`);

      axios.get(endpoint).then((response) => {
        const data = response.data.data;
        data.length > 0 ? setProductList(data) : setProductList(0);

        setLoading(false);
      });
    } else if (filter === 0) {
      const endpoint = getEndpoint("/project/list");
      setLoading(true);

      axios.get(endpoint).then(async (response) => {
        const projects = response.data.data;

        projects.length > 0 && setProjectList(projects);

        setLoading(false);
      });
    }
  }, [filter]);

  return (
    <div>
      <Banner banner={banner} title="Dự án của chúng tôi" />
      <div className="container">
        <Dropdown name={"filter"} onChange={handleFilter}>
          <option value="0">Tất cả dự án</option>
          {projectList.length > 0 &&
            projectList.map((project) => {
              return (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              );
            })}
        </Dropdown>
        {loading && <LoadingComponent></LoadingComponent>}
        {!loading &&
          filter === 0 &&
          projectList?.length > 0 &&
          projectList.map((project) => {
            return <ProductList key={project.id} project={project} />;
          })}
        {!loading && filter !== 0 && (
          <div className="py-20">
            <div className="mb-16 text-center">
              <h2 className="text-xl font-bold uppercase md:text-2xl">
                {projectName}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 grid-flow-row auto-rows-1fr">
              {productList?.length > 0 &&
                productList.map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                    project_name={projectName}
                  ></ProductCard>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
