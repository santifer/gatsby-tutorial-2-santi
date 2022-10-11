import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content: { tags, instructions, ingredients, tools },
    prepTime,
    servings,
    image,
    description,
  } = data.contentfulRecipe

  return (
    <Layout>
      <SEO title={title} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings} </p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                  return (
                    <Link
                      to={`/tags/${slugify(tag, { lower: true })}`}
                      key={index}
                    >
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>

          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <p className="single-ingredient" key={index}>
                      {ingredient}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((tool, index) => {
                  return (
                    <p className="single-ingredient" key={index}>
                      {tool}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
