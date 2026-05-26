import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://graphql.datocms.com/";

export type DatoResponsiveImage = {
  src: string;
  width: number;
  height: number;
  srcSet: string;
  webpSrcSet: string;
};

export type DatoStructuredTextValue = {
  schema: string;
  document: {
    type: string;
    children: unknown[];
  };
};

export type DatoDemoStoreRecord = {
  id: string;
  title: string;
  slug: string;
  youtubeVideoId: string | null;
  textDescriptionField: { value: DatoStructuredTextValue } | null;
  images: Array<{ responsiveImage: DatoResponsiveImage | null }>;
};

const demoStoreFields = gql`
  fragment DemoStoreFields on DemoStoreRecord {
    id
    title
    slug
    youtubeVideoId
    textDescriptionField {
      value
    }
    images {
      responsiveImage(imgixParams: { fit: crop, w: 800 }) {
        src
        width
        height
        srcSet
        webpSrcSet
      }
    }
  }
`;

function getDatoClient() {
  const token = process.env.DATOCMS_API_TOKEN?.trim();
  if (!token) {
    throw new Error("DATOCMS_API_TOKEN is not configured");
  }

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function isDatoCmsConfigured(): boolean {
  return Boolean(process.env.DATOCMS_API_TOKEN?.trim());
}

export async function getAllDemoStores(): Promise<DatoDemoStoreRecord[]> {
  const query = gql`
    ${demoStoreFields}
    query AllDemoStores {
      allDemoStores {
        ...DemoStoreFields
      }
    }
  `;

  const data = await getDatoClient().request<{
    allDemoStores: DatoDemoStoreRecord[];
  }>(query);

  return data.allDemoStores;
}

export async function getDemoStoreBySlug(
  slug: string,
): Promise<DatoDemoStoreRecord | null> {
  const query = gql`
    ${demoStoreFields}
    query DemoStore($slug: String!) {
      demoStore(filter: { slug: { eq: $slug } }) {
        ...DemoStoreFields
      }
    }
  `;

  const data = await getDatoClient().request<{
    demoStore: DatoDemoStoreRecord | null;
  }>(query, { slug });

  return data.demoStore;
}
