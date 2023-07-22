import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage(props) {
  const { product } = props;
  return (
    <ul>
      {product.map((item) => (
        <li key={item.id}>
          <Link href={`/${item.id}`}>{item.id + " --- " + item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  console.log("Re-Generating..");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/nodata",
      },
    };
  }
  if (!data.products.length === 0) {
    return (notFound = true);
  }

  return {
    props: {
      product: data.products,
    },
    revalidate: 10,
  };
};

export default HomePage;
