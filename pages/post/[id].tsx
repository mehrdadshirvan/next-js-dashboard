import Head from 'next/head'
import Link from 'next/link'

function singlePost(props: { post: any}){
    const {post} = props;
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.title.substring(0,65)}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={`container p-2 mx-auto`}>
                <div className="row">
                    <div className={`column-12`}>
                        <div className={`w-75 shadow p-2 rounded `} dangerouslySetInnerHTML={{__html: post.body}}>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export async function getServerSideProps(context: { query: { id: any; }; }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
    const post = await res.json()
    return {
        props: {post},
    }
}
export default singlePost;