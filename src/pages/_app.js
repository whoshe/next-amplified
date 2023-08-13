import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
