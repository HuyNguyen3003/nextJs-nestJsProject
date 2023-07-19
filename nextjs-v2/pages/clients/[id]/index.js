import { useRouter } from "next/router";
import Link from "next/link";

export default function index() {
  const { query } = useRouter();
  return (
    <div>
      id client = {query.id}
      <ul>
        <li>
          <Link href="clients/1">id client detail</Link>
        </li>
      </ul>
    </div>
  );
}
