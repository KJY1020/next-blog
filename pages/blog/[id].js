import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const { id } = router.query;
    return (
      <div>
        Welcome to my blog { id }!
      </div>
    )
  }
  