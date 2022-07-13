import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './index.module.css'


export default function Home() {
    const [blogList, setBlogList] = useState([]);

    const fetchData = async() => {
        const result = await axios.get('/api/blog');
        setBlogList(result.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

return ( <div > 블로그 목록 
    {blogList.map((blog) => {
        return (
            <div key={blog.id} className = {styles.blog} >
                <div>{blog.title}</div>
            </div>
        )
    })}
</div>
    )
}