import { Card, CardFooter, CardBody, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { format, parseISO } from "date-fns"
import { Post } from "contentlayer/generated"
import { Link } from "@/navigation"

export function PostCard(post: Post) {
  return (
    <Card
      isBlurred
      className="p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
      isPressable={!!post.url}
    >
      <CardHeader>
        <Link
          className="font-semibold"
          href={post.url}
        >
          {post.title}
        </Link>
      </CardHeader>
      <CardBody className="pt-0 px-2 pb-1">
        <Image className="mb-4" src={post.image} />
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
