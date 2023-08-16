import { Authenticator } from "@aws-amplify/ui-react";

export function getServerSideProps() {
  const renderedAt = new Date();
  const buildTime = renderedAt.toLocaleTimeString("en-US");
  return {
    props: {
      renderedAt: buildTime,
    },
  };
}

export default function Home({ renderedAt }) {
  return (
    <Authenticator loginMechanisms={["amazon", "apple", "facebook", "google"]}>
      {({ signOut, user }) => (
        <main>
          <h1>안녕하세요, {user.username}!</h1>
          <button onClick={signOut}>로그아웃</button>
          <p>이 페이지는 {renderedAt}에 서버 사이드 렌더링됨</p>
        </main>
      )}
    </Authenticator>
  );
}
