import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function BlogPost({ data }) {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h4>Date Posted: {post.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
            excerpt
        }
    }
`;
