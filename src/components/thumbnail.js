import React from "react"
import styled from "styled-components"

const ThumbnailStyle = styled.div`
  margin: 20px;
`

class Thumbnail extends React.Component {
  render() {
    const article = this.props.article
    return (
      <ThumbnailStyle>
        <img srcSet={article.images[0].file.url + "?w=320"} />
        {article.title && <h2>{article.title}</h2>}
      </ThumbnailStyle>
    )
  }
}

export default Thumbnail
