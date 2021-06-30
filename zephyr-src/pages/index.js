import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>The Zephyr</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
    <Sidebar />
    
    </div>
  )
}

