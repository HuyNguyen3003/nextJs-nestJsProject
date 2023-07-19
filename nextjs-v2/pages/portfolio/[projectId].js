import { useRouter } from "next/router";

export default function detail() {
  const router = useRouter();

  console.log(router.query.projectId);

  return <div>the projectId</div>;
}
