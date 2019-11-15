import React from 'react';
import cn from 'classnames';
import styles from './article-list.scss';
import ArticleListItem from './article-list-item';


class ArticleList extends React.Component {
    render() {

        const { articles } = this.props;
        const articleList = [];
        
        articles.forEach(article => {
            articleList.push(
                <ArticleListItem article={article}></ArticleListItem>
            )
        });

        return <div className={cn(styles.articleList)}>{articleList}</div>
        
    }
}

export default ArticleList;
