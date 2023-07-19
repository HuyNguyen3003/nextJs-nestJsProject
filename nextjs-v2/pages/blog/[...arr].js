import { useRouter } from "next/router";

export default function id() {
  const { query } = useRouter();
  const { arr } = query;
  console.log(arr);

  return (
    <>
      id blog:
      {arr &&
        arr.length > 0 &&
        arr.map((id) => {
          return <div key={id}>{id}</div>;
        })}
    </>
  );
}
