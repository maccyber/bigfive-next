'use client'

import { Card, CardFooter, CardBody, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { format, parseISO } from "date-fns"
import { Post } from "contentlayer/generated"
import { Link, useRouter } from "@/navigation"

export function PostCard(post: Post) {
  const router = useRouter()
  return (
    <Card
      isBlurred
      className="p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
      isPressable={!!post.url}
      onClick={() => {
        if (post.url) {
          router.push(post.url)
        }
      }}
    >
      <CardBody className="pt-0 px-2 pb-1">
        <Link
          className="font-bold text-large"
          href={post.url}
        >
          <Image className="mb-4 object-cover" src={post.image} alt={post.description} />
        </Link>
        <div className="absolute inset-0"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold">{post.title}</h3>
        <p className="font-normal w-full text-default-600">{post.description}</p>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <time className="block text-small text-default-500" dateTime={post.date} suppressHydrationWarning>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <Avatar size="sm" src={post.author?.avatar} />
      </CardFooter>
    </Card>
  )
}
