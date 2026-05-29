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
  updatedAt: string | null;
  youtubeVideoId: string | null;
  textDescriptionField: { value: DatoStructuredTextValue } | null;
  images: Array<{ responsiveImage: DatoResponsiveImage | null }>;
};

const demoStoreFields = gql`
  fragment DemoStoreFields on DemoStoreRecord {
    id
    title
    slug
    updatedAt: _updatedAt
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

export function getDatoClient() {
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

export type DatoShopRecord = {
  title: string;
  slug: string;
  address: string | null;
  openingHours: string | null;
  miscInformation: DatoStructuredTextValue | null;
  coverImage: { responsiveImage: DatoResponsiveImage | null } | null;
  galleryImages: Array<{ responsiveImage: DatoResponsiveImage | null }>;
};

/** Raw field API keys from DatoCMS (lowercase). */
type DatoShopRecordRaw = {
  title: string;
  slug: string;
  address: string | null;
  openinghours: string | null;
  miscinformation: { value: DatoStructuredTextValue } | null;
  coverimage: { responsiveImage: DatoResponsiveImage | null } | null;
  galleryimages: Array<{ responsiveImage: DatoResponsiveImage | null }>;
};

function normalizeShop(raw: DatoShopRecordRaw): DatoShopRecord {
  return {
    title: raw.title,
    slug: raw.slug,
    address: raw.address,
    openingHours: raw.openinghours,
    miscInformation: raw.miscinformation?.value ?? null,
    coverImage: raw.coverimage,
    galleryImages: raw.galleryimages ?? [],
  };
}

const shopFields = gql`
  fragment ShopFields on ShopRecord {
    title
    slug
    address
    openinghours
    miscinformation {
      value
    }
    coverimage {
      responsiveImage {
        src
        width
        height
        srcSet
        webpSrcSet
      }
    }
    galleryimages {
      responsiveImage {
        src
        width
        height
        srcSet
        webpSrcSet
      }
    }
  }
`;

export async function getAllShops(): Promise<DatoShopRecord[]> {
  const query = gql`
    ${shopFields}
    query Shops {
      allShops {
        ...ShopFields
      }
    }
  `;

  const data = await getDatoClient().request<{
    allShops: DatoShopRecordRaw[];
  }>(query);

  return data.allShops.map(normalizeShop);
}

export async function getShopBySlug(
  slug: string,
): Promise<DatoShopRecord | null> {
  const query = gql`
    ${shopFields}
    query Shop($slug: String!) {
      shop(filter: { slug: { eq: $slug } }) {
        ...ShopFields
      }
    }
  `;

  const data = await getDatoClient().request<{
    shop: DatoShopRecordRaw | null;
  }>(query, { slug });

  return data.shop ? normalizeShop(data.shop) : null;
}
