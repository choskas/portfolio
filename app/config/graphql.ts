import { gql, GraphQLClient } from "graphql-request";

const mainScreen = gql`
  query getMainScreens {
    mainScreens {
      data {
        attributes {
          title
          subtitle
          description
        }
      }
    }
  }
`;

export const getMainScreenData = async () => {
  const client = new GraphQLClient(process.env.CMS_API || '', {
    headers: {
      authorization:
        `Bearer ${process.env.CMS_API_KEY}`,
    },
  });

  const response = await client.request(mainScreen);
  console.log(response.mainScreens.data);
  return response.mainScreens.data
};
