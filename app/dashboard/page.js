import Link from "next/link";
import "../globals.css";
export default function Dashboard() {
  return (
    <main>
      <h1>Private Dashboard</h1>
      <Link href="/">Back</Link>
    </main>
  );
}
