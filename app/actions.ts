'use server'

import { revalidatePath } from 'next/cache'

export interface AddCommentParam {
	name: string
	body: string
}

export async function postComment(comment: AddCommentParam, postId: number) {
	try {
		await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(comment),
		})
	} catch (error) {
		console.error('Failed to post comment', error)
	}

	revalidatePath(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}
