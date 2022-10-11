import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [tagText, tagAmount] = tag
            return (
              <Link
                key={index}
                to={`/tags/${slugify(tagText, { lower: true })}`}
                className="tag"
              >
                <h5>{tagText}</h5>
                <p>
                  {tagAmount}
                  {tagAmount == 1 ? " recipe" : " recipes"}
                </p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
