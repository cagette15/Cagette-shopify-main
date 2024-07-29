import { BlogArticle, getBlogArticle } from 'lib/shopify';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArrowLeftIcon from '../../../components/icons/arrow-left';

export default async function BlogsArticle({ params }: { params: { handle: string } }) {
  const article: BlogArticle = await getBlogArticle('news', params.handle);
  if (!article) notFound();

  return (
    <div className="container mx-auto px-10 py-3 text-lg lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">{article.articleByHandle.title}</h1>
          <p> Published on: {new Date(article.articleByHandle.publishedAt).toLocaleDateString()}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.articleByHandle.contentHtml || '' }} />
        <Link className="flex w-full justify-center" href={`/blogs`}>
          <ArrowLeftIcon className="mr-[-5px] h-6" /> Back to blogs
        </Link>
      </div>
    </div>
  );
}
