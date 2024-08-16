import Grid from 'components/grid';
import { Article, Blog, getBlogs } from 'lib/shopify';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

const BlogTiles = ({ article }: { article: Article }) => {
  return (
    <Grid.Item key={article.handle} className="animate-fadeIn">
      <h2>{article.title}</h2>
      <p>Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>
      <Link className="h-full w-full" href={`/blogs/${article.handle}`}>
        Read More
      </Link>
    </Grid.Item>
  );
};

export default async function BlogsPage() {
  const blogs: Blog[] | [] = await getBlogs(10);

  const newsBlogs = blogs.find((blog) => blog.handle === 'news') || null;

  if (!blogs || blogs.length === 0) notFound();

  return (
    <>
      <div
        className="min-h-[45vh] bg-gray-900 text-white"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0762/8763/9861/files/home-parallax-4.webp?v=1685354625')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-1/3 lg:items-center">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-2xl font-bold uppercase text-white sm:text-4xl">Blogs</h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold uppercase sm:text-4xl">Articles</h1>
        </div>
        <Grid className="grid-cols-1 px-4 md:px-0 lg:grid-cols-3 ">
          {newsBlogs && newsBlogs.articles.length > 0 ? (
            newsBlogs.articles.map((article) => (
              <article className="border p-2" key={article.title}>
                <BlogTiles article={article} />
              </article>
            ))
          ) : (
            <p>No articles available.</p>
          )}
        </Grid>
      </div>
    </>
  );
}
