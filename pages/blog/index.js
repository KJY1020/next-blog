import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './index.module.css'
import { useRouter } from 'next/router';


export default function Home() {
    const [blogList, setBlogList] = useState([]);
    const router = useRouter();

    const fetchData = async() => {
        const result = await axios.get('/api/blog');
        setBlogList(result.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const ClickBlog = (id) =>  () => {
        router.push(`/blog/${id}`);
    };

return ( <div > 블로그 목록 
    {blogList.map((blog) => {
        return (
            <div key={blog.id} className = {styles.blog} onClick={ClickBlog(blog.id)} >
                <div>{blog.title}</div>
            </div>
        )
    })}
</div>
    )
}