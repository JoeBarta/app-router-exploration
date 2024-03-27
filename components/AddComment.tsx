'use client'

import { AddCommentParam } from '@/app/actions'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const AddComment = ({ addPostComment }: { addPostComment: (comment: AddCommentParam) => Promise<any> }) => {
	const [name, setName] = useState('')
	const [body, setBody] = useState('')

	// technically I don't gave to do any of this crap .. I can make this 'use server
	// const handleSubmit = async (e: React.FormEvent) => {
	// 	e.preventDefault()
	// 	postComment({ name, body }, postId)
	// }

	return (
		<form action={() => addPostComment({ name, body })}>
			<input
				className="text-black"
				type="text"
				placeholder="Your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<textarea
				className="text-black"
				placeholder="Your comment"
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}
