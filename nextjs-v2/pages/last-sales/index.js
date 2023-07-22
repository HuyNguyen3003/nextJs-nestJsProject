import React, { useEffect, useState } from "react";

export default function LastSales() {
  const [sales, setsales] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setsales(data);
        setisLoading(false);
        console.log(data);
        console.log(sales);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  if (isLoading) return <>...</>;

  return (
    <>
      <h1>{sales.name}</h1>
      <h1>{sales.phone}</h1>
      <h1>{sales.website}</h1>
    </>
  );
}
