import Link from "next/link";

export default function Home({ formattedDate }) {
  return (
    <>
      <h1>Static page 내용 변경4</h1>
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
