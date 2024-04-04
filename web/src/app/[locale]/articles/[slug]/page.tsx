import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { ChevronRightLinearIcon } from '@/components/icons'
import NextLink from 'next/link'
import { User } from '@nextui-org/user'
import { Link } from '@nextui-org/react'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return (
    <article className="w-full mt-12 flex flex-col justify-start items-center prose prose-neutral">
      <div className="w-full max-w-4xl">
        <Link
          isBlock
          as={NextLink}
          className="mb-8 -ml-3 text-default-500 hover:text-default-900"
          color="foreground"
          href="/articles"
          size="sm"
        >
          <ChevronRightLinearIcon className="rotate-180 inline-block mr-1" size={15} />
          Back to articles
        </Link>
        <time className="block text-small mb-2 text-default-500" dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <div className="mb-3 flex w-full flex-col items-start">
          <User
            // href={post.author?.link}
            name={post.author?.name}
            description={post.author?.username}
            avatarProps={{
              src: post.author?.avatar
            }}
          />
        </div>
        <h1 className="mb-2 font-bold text-4xl">
          {post.title}
        </h1>
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    </article>
  )
}

export default PostLayout
