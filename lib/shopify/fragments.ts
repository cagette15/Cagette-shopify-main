export const imageFragment = /* GraphQL */ `
  fragment image on Image {
    url
    altText
    width
    height
  }
`;

export type ImageFragment = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export const seoFragment = /* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`;

export type SeoFragment = {
  description: string;
  title: string;
};
