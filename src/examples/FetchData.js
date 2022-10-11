import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        titulo: title
        desc: description
        autor: author
        datoss: simpleData
        persona: person {
          nombre: name
          edad: age
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { titulo, desc, autor, datoss, persona },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h3>Name: {titulo}</h3>
      <p>{desc}</p>
      <p>{autor}</p>
      <p>{datoss}</p>
      <p>
        {persona.edad} {persona.nombre}
      </p>
    </div>
  )
}

export default FetchData
