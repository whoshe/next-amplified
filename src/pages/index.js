import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ formattedDate }) {
  return (
    <>
      <h1>Static page 내용 변경3</h1>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <Link href="/ssr">View a server-side rendered page.</Link>
      </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
