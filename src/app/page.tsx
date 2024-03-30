import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>This is the Home Page</div>
      <Link href="./dashboard">Go to Dashboard</Link>
    </div>
  );
}
