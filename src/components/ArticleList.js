
import Article from "./Article"
import blogData from "../data/blog";

export default function ArticleList() {
    const posts = blogData.posts;
    const post = posts.map((article) => {
        return(<Article key={article.id} title={article.title} preview={article.preview} date={article.date} />)})

    return (
        <main>
            {post}
        </main>
    )
}