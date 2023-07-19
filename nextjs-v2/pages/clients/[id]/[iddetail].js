import { useRouter } from "next/router";

export default function iddetail() {
  const { query } = useRouter();
  return <div>iddetail = {query.iddetail}</div>;
}
