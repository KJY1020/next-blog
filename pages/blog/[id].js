import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const router = useRouter();
    const { id } = router.query;
    const [blog, setBlog] = useState();

    const fetchData = async() => {
      const result = await axios.get(`/api/blog/${id}`);
      setBlog(result.data);
    }

    useEffect(() => {
      fetchData();
    }, []);
    
    return (
      <div>
        Welcome to my blog { id }!
      </div>
    )
  }
  