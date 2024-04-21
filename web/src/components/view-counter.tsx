import { kv } from '@vercel/kv'

interface ViewCounterProps {
  postId: string
}

export async function ViewCounter({ postId }: ViewCounterProps) {
  const views = await kv.incr(postId.replace('.md', ''))

  return (
    <p>{Intl.NumberFormat('en-us').format(views)} views</p>
  )
}

export async function ViewCounterGetter({ postId }: ViewCounterProps) {
  const views = await kv.get(postId.replace('.md', ''))

  return (
    <p>{Intl.NumberFormat('en-us').format(Number(views))} views</p>
  )
}
