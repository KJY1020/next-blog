import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [blogList, setBlogList] = useState([]);

    const fetchData = async() => {
        const result = await axios.get('/api/blog');
        setBlogList(result.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

return ( <div> 블로그 목록 
    {blogList.map((blog) => {
        return (
            <div key={blog.id} >
                <div>{blog.id}</div>
                <div>{blog.title}</div>
                <div>{blog.content}</div>
                <div>{blog.readTime}</div>
                <div>{blog.writer}</div>
            </div>
        )
    })}
</div>
    )
}