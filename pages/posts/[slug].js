import Head from 'next/head';
import { getSlugs } from '../../lib/posts';
import { getPost } from '../../lib/posts';

export const getStaticPaths = async () => {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false
    };

};

export const getStaticProps = async ({ params: { slug } }) => {
    const post = await getPost(slug);
    return {
        props: { post }
    };
};


const PostPage = ({ post }) => {

   
    return (
        <div>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.body }} />
            </main>
        </div>
    );
};

export default PostPage;
