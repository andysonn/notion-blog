import React from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import tw, { styled } from 'twin.macro'

const Nav = styled.nav`
  ${tw`container flex items-center justify-between p-4 max-w-3xl! mx-auto sticky top-0 bg-white`}
`

const Link = styled.a`
  ${tw`flex items-center mr-3 hover:text-gray-700 md:mr-5`}
`

const Image = styled.div`
  ${tw`inline-block shadow-lg rounded-full w-10 h-10 mr-3`}
`

const menu = [
  { title: 'Blog', href: '/' },
  { title: 'Product', href: '/' },
  { title: 'About', href: '/' },
]

const Navbar = () => {
  return (
    <Nav>
      <NextLink href="/">
        <Link href="/">
          <Image>
            <NextImage
              tw="rounded-full"
              src="/images/avatar.png"
              alt="avatar"
              width="100%"
              height="100%"
            />
          </Image>
          Junan
        </Link>
      </NextLink>
      <ul tw="flex  mt-1 text-gray-600">
        {menu.map((item, index) => (
          <li key={index}>
            <NextLink href={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </NextLink>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

export default Navbar
