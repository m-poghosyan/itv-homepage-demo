/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createPage } }) => {
  const articles = require("./src/data/article.json")
  console.log("article data:: ", articles)
  articles.forEach(article => {
    createPage({
      path: `/articles/${article.selfLink}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        title: article.title,
        selfLink: article.selfLink,
        description: article.description,
        content: article.content,
      },
    })
  })
}
