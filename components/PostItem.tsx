import React from 'react'
import NextLink from 'next/link'
import tw, { styled } from 'twin.macro'
import { formatSlug } from '../utils/slugFormat'
import { CalendarIcon, TagIcon } from '@heroicons/react/outline'
import { IPost } from '../pages/[year]/[month]/[slug]'

export const PostCard = styled.li`
  ${tw`cursor-pointer px-4 transform transition duration-200
  sm:hover:(bg-gray-50 rounded -translate-y-1 shadow-lg)`}
`

const LinkWrap = styled.a`
  ${tw`w-full py-4 block border-b border-gray-100 sm:hover:(border-transparent)`}
`

const TitleWrap = styled.h1`
  ${tw`font-normal text-2xl mb-3 text-gray-600`}
`

const DateWrap = styled.time`
  ${tw`text-base text-gray-400 flex items-center flex-wrap space-x-1 mb-1`}
`

const Description = styled.div`
  ${tw`text-base text-gray-400`}
`

const TagWrap = styled.section`
  ${tw`flex flex-wrap`}
`

const Tag = styled.label`
  ${tw`rounded px-2 py-1 text-gray-400 bg-gray-100 text-sm flex items-center space-x-1 mt-2 mr-2`}
`

const PostItem: React.FC<{ post: IPost }> = ({ post }: { post: IPost }) => {
  return (
    <NextLink
      href="/[year]/[month]/[slug]"
      as={formatSlug(post.date, post.slug)}
    >
      <LinkWrap href={formatSlug(post.date, post.slug)}>
        <TitleWrap>{post.name}</TitleWrap>
        <DateWrap>
          <CalendarIcon className="w-4 h-4" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </DateWrap>
        <Description>{post.preview}</Description>
        <TagWrap>
          {post.tag.map(
            tag =>
              tag && (
                <Tag key={tag}>
                  <TagIcon className="h-4 w-4" />
                  <span>{tag}</span>
                </Tag>
              )
          )}
        </TagWrap>
      </LinkWrap>
    </NextLink>
  )
}

export default PostItem
