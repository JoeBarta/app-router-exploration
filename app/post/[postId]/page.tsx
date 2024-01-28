import { Comments } from '@/components/Comments'
import { Post, User, Comment } from '@/types/types'
import Link from 'next/link'
import { Suspense } from 'react'

const getPost = async (postId: string): Promise<Post> => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

	if (!res.ok) {
		throw new Error('Failed to fetch post')
	}

	return res.json()
}

const getComments = async (postId: string): Promise<Comment[]> => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

	if (!res.ok) {
		throw new Error('Failed to fetch comments')
	}

	return res.json()
}

const getUser = async (userId: number): Promise<User> => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

	if (!res.ok) {
		throw new Error('Failed to fetch user')
	}

	return res.json()
}

export default async function Home({ params }: { params: { postId: string } }) {
	// parallel data fetching on Comments as we will have postId from dynamic route
	const [post, comments] = await Promise.all([getPost(params.postId), getComments(params.postId)])

	// Sequential fetch for user details as we won't have userID suntil we get post
	const user = await getUser(post.userId)

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Link href="/">Back to home</Link>
			<div className="border-solid border-2 border-sky-50">
				<h1>{post.title}</h1>
				<p>{post.body}</p>
				<Suspense fallback={<div>...</div>}>
					<h2>Author: {user.name}</h2>
					<p>Wow cool website: {user.website}</p>
				</Suspense>
			</div>

			<Suspense fallback={<div>Loading comments ... </div>}>
				<Comments comments={comments} />
			</Suspense>
		</main>
	)
}
