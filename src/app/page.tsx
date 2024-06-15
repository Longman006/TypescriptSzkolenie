import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   justify-between p-24">
      <div>
        <h1>Home</h1>

        <Link href={"/playlists"}>Playlists</Link>
        
      </div>
    </main>
  );
}
