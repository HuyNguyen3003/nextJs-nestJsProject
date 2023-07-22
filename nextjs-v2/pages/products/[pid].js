import fs from "fs/promises";
import path from "path";

export default function detailProduct(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) return <>...</>;
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
};

export const getStaticProps = async (contex) => {
  const { params } = contex;
  const productId = params.pid;
  const data = await getData();

  const product = data.products.find((item) => item.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const { products } = await getData();
  const ids = products.map((item) => item.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
