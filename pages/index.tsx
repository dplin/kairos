import { LandingPage } from "../components/landing-page";
import { Template } from "../components/helper-components";
import Quote from "../components/article/quote";

import type { MarketingPages_Document } from "../.tina/__generated__/types";
import { createLocalClient, AsyncReturnType } from "../utils";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  return (
    <>
      <Template data={props.data.getMarketingPagesDocument.data}>
        <LandingPage {...props.data.getMarketingPagesDocument.data} />
        <Quote />
      </Template>
    </>
  );
}

export const query = `#graphql
  query ContentQuery {
    # "index.md" is _relative_ to the "Marketing Pages" path property in your schema definition
    # you can inspect this file at "content/marketing-pages/index.md"
    getMarketingPagesDocument(relativePath: "index.md") {
      data {
        __typename
        ... on LandingPage_Doc_Data {
          blocks {
            __typename
            ... on Message_Data {
              messageHeader
              messageBody
            }
            ... on Image_Data {
              heading
              imgDescription
              src
            }
          }
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const client = createLocalClient();
  return {
    props: {
      data: await client.request<{
        getMarketingPagesDocument: MarketingPages_Document;
      }>(query, {
        variables: {},
      }),
      query: query,
      variables: {},
    },
  };
};
