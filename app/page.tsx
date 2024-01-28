import { Post } from '@/types/types'
import Link from 'next/link'

async function getPosts(): Promise<Post[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' })

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	return res.json()
}

export default async function Home() {
	const data = await getPosts()

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>test app</h1>

			<ul>
				{data.map((post) => (
					<li key={post.id} className="p-2">
						<Link href={`/post/${post.id}`}>{post.body}</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
