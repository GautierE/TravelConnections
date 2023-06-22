/* Components */
import { Counter } from "./components/Counter/Counter";
import { gql } from "@apollo/client";
import client from "./apollo-client";

export default async function IndexPage() {
  const { data } = await client.query({
    query: gql`
      query HelloWorld {
        hello
      }
    `,
  });

  return <Counter testData={data.hello} />;
}

export const metadata = {
  title: "Redux Toolkit",
};
