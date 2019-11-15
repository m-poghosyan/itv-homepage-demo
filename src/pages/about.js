import React from "react"

const About = (props) => {

    const article = props.location.state.article;

    return (
        <section>
            <div>
                <img src={article.images[0].file.url} alt="" width={600}/>
                <div className='descName'>
                    {article.title}
                </div>

            </div>
        </section>
    )
}
export default About
