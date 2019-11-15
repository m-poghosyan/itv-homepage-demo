import React from "react"
import Thumbnail from "./thumbnail"
import cn from "classnames"
import styles from "./thumbnails.scss"

class Thumbnails extends React.Component {
  render() {
    const { articles } = this.props
    const thumbnails = []

    articles.forEach(article => {
      thumbnails.push(<Thumbnail article={article}></Thumbnail>)
    })

    return <div className={cn(styles.thumbnails)}>{thumbnails}</div>
  }
}

export default Thumbnails
