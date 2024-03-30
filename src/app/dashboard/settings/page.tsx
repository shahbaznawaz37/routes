import Link from "next/link";

export default function Settings() {
  return (
    <div>
      <div>This is the Settings</div>
      <Link href="./settings/profile">Go to Profile</Link>
      <br />
      <Link href="./settings/password">Go to Password</Link>
      <br />
      <Link href="./">Go Back</Link>
    </div>
  );
}
