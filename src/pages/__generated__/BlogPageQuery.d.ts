/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPageQuery
// ====================================================

export interface BlogPageQuery_allMarkdownRemark_nodes_fields {
  slug: string | null;
}

export interface BlogPageQuery_allMarkdownRemark_nodes_frontmatter_cover_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface BlogPageQuery_allMarkdownRemark_nodes_frontmatter_cover_childImageSharp {
  fluid: BlogPageQuery_allMarkdownRemark_nodes_frontmatter_cover_childImageSharp_fluid | null;
}

export interface BlogPageQuery_allMarkdownRemark_nodes_frontmatter_cover {
  childImageSharp: BlogPageQuery_allMarkdownRemark_nodes_frontmatter_cover_childImageSharp | null;
}

export interface BlogPageQuery_allMarkdownRemark_nodes_frontmatter {
  title: string | null;
  date: any | null;
  cover: BlogPageQuery_allMarkdownRemark_nodes_frontmatter_cover | null;
}

export interface BlogPageQuery_allMarkdownRemark_nodes {
  id: string;
  timeToRead: number | null;
  excerpt: string | null;
  fields: BlogPageQuery_allMarkdownRemark_nodes_fields | null;
  frontmatter: BlogPageQuery_allMarkdownRemark_nodes_frontmatter | null;
}

export interface BlogPageQuery_allMarkdownRemark {
  totalCount: number;
  nodes: BlogPageQuery_allMarkdownRemark_nodes[];
}

export interface BlogPageQuery {
  allMarkdownRemark: BlogPageQuery_allMarkdownRemark;
}
