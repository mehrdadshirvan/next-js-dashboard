import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import PostSwiperSlider from "@/pages/components/PostSwiperSlider";
import { BsBookmarks, BsFillHeartPulseFill } from 'react-icons/bs'
import CategoryList from './components/home/category-list'

// const inter = Inter({subsets: ['latin']})

function Home(props: { posts: any; postsMostView: any }) {
    const { posts, postsMostView } = props;
    // console.log(props)
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=''>
                <div className='container mx-auto '>
                     <CategoryList />
                </div>
                <div className={`container mx-auto `}>
                    <PostSwiperSlider posts={posts} title="Popular post" className={`mt-4`} />
                </div>
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`)
    const posts = await res.json()
    const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=10&_limit=20`)
    const postsMostView = await res2.json()
    return {
        props: { posts, postsMostView },
    }
}


export default Home;