import React from 'react';
import cn from 'classnames';
import styles from './article-list-item.scss';

class ArticleListItem extends React.Component {
    render() {

        const article  = this.props.article;
        return  <div className={cn(styles.articleListItem)}>
                    <img srcSet={article.images[0].file.url+'?w=320'}/>

                    { article.title &&
                        <h2>
                            {article.title}
                        </h2>
                    }
                    { article.description &&
                        <p>
                            {article.description}
                        </p>
                    }
                </div>
    }
}

export default ArticleListItem;
