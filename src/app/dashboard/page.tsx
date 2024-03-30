"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <div>
        My Name is Shahbaz Nawaz and this is practice project to learn Link tag
        and UseRoute
      </div>
      <Link href="./dashboard/analytics">Go to Analytics</Link>
      <br />
      <Link href="./dashboard/settings">Go to Settings</Link>
      <br />
      <Link href="./" className="link">
        Go Back by Link
      </Link>
      <br />
      <button onClick={() => router.push("/")}>Go back by Button</button>
    </div>
  );
}
