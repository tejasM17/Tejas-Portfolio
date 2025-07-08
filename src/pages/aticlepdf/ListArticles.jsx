import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function ListArticles() {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const response = await fetch('http://localhost:5000/articles');
            const data = await response.json();
            console.log(data);
            setArticles(data.articles);
        } catch (error) {
            console.log(error);
            setArticles([]);
        }
    }

    useEffect(() => {
            getArticles();
        }, []);
  return (
      <>
          <p className="text-center my-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md">
  List of Articles
</p>

{articles ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    {articles.map((article) => (
  <div
    key={article._id}
    className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 border border-gray-700 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-neon"
  >
    {article.image && (
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
      />
    )}
    <h1 className="text-3xl font-bold text-white group-hover:text-purple-400 transition duration-300">
      {article.title}
    </h1>
    <p className="mt-4 text-lg text-gray-300">{article.body}</p>
    <NavLink
      to=""
      className="inline-block mt-6 text-lg font-semibold text-cyan-400 hover:text-cyan-200 transition-all"
    >
      → View Article
    </NavLink>
  </div>
))}

  </div>
) : (
  <div className="text-center text-white text-2xl">Loading...</div>
)}

      </>
  )
}

export default ListArticles