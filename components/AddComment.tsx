'use client'

import { AddCommentParam } from '@/app/actions'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const AddComment = ({
	postComment,
	postId,
}: {
	postComment: (comment: AddCommentParam, postId: number) => Promise<any>
	postId: number
}) => {
	const [name, setName] = useState('')
	const [body, setBody] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		postComment({ name, body }, postId)
	}

	return (
		<form onSubmit={handleSubmit}>
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
