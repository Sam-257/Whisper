import Head from 'next/head'
import Input from '@atomic/Input'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by creators of Whisper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Input />
      </main>
    </>
  )
}