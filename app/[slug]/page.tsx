import React from 'react'
import ProfilePage from '../../components/pages/profile/ProfilePage'
import { getHandle } from '../../utils/lib/getHandle'
import { Metadata } from 'next'
import { NODE_GRAPHQL_URL } from '../../utils/config'
import { fetchMetadata } from 'frames.js/next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const handle = getHandle(params.slug)
  let thumbnail = ''

  try {
    const data = await fetch(NODE_GRAPHQL_URL, {
      next: { revalidate: 360 },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json' // replace with your operation name
      },
      body: JSON.stringify({
        query: `
        query Thumbnail {
          thumbnail(
            handle: "${handle}"
          )
        }
      `
      })
    }).then((res) => res.json())

    thumbnail = data?.data?.thumbnail
  } catch (e) {
    console.log(e)
  }

  const frameUrl = new URL(
    '/frames',
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  )

  const urlParams = new URLSearchParams({
    handle: encodeURIComponent(handle),
    thumbnail: encodeURIComponent(thumbnail)
  })

  frameUrl.search = urlParams.toString()

  return {
    manifest: '/manifest.json', // we are accessing our manifest file here
    title: `${handle.split('/')[1]} - Live on BloomersTV`,
    description: 'Live Streaming platform on Lens.',
    icons: [
      { rel: 'icon', url: 'https://bloomers.tv/icon.png' },
      { rel: 'apple-touch-icon', url: 'https://bloomers.tv/apple-icon.png' }
    ],
    openGraph: {
      title: `${handle.split('/')[1]} - Live on BloomersTV`,
      description: 'Live Streaming platform on Lens.',
      type: 'profile',
      siteName: 'BloomersTV',
      url: 'https://bloomers.tv',
      images: [
        // logo image
        {
          url: thumbnail ? thumbnail : 'https://bloomers.tv/banner.png',
          width: 1200,
          height: 630,
          alt: 'BloomersTV Logo'
        }
      ]
    },
    other: await fetchMetadata(frameUrl)
  }
}

const page = ({ params }: Props) => {
  return (
    <div className="h-full">
      <ProfilePage handle={getHandle(params.slug)} />
    </div>
  )
}

export default page
