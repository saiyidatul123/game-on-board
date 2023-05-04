import Link from "next/link";

export default function Home() {
  return (
    <>
      <title>Home</title>
      <div>
        <h1>Content</h1>
        <Link href="/MemberPage">
          <h2>Member Page</h2>
        </Link>
        <Link href="/MostPopular">
          <h2>Most Popular</h2>
        </Link>
      </div>
    </>
  );
}
