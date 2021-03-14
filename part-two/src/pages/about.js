import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function About({ data }) {
    return (
        <Layout>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                We're the only site running on your computer dedicated to
                showing the best photos and videos of pandas eating lots of
                food.
            </p>
        </Layout>
    );
}

// Pages can make page queries using graphql
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
