import { Comment } from '@/types/types'

export const Comments = ({ comments }: { comments: Comment[] }) => {
	return (
		<div>
			<h1>Latest Comemnts</h1>
			<ul>
				{comments.map((comment) => (
					<li key={comment.id} className="py-2 my-4 border-solid border-2 border-sky-50">
						<h2>{comment.name}</h2>
						<p>{comment.body}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
