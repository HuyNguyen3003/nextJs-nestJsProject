import Link from "next/link";

export default function Client() {
  return (
    <div>
      Client:
      <ul>
        <li>
          <Link href="clients/1">id client</Link>
        </li>
      </ul>
    </div>
  );
}
