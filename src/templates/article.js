import React from "react"

const Article = ({ pageContext }) => (
  <div>
    <h1>{pageContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.description }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </div>
)

export default Article
