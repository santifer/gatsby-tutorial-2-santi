import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  console.log(newTags)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [tagText, tagAmount] = tag
          return (
            <Link key={index} to={`/tags/${slugify(tagText, { lower: true })}`}>
              {tagText} ({tagAmount})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
