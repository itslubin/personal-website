import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import celiaPreview from '@/images/photos/celia.png'
import simulatorPreview from '@/images/photos/simulator.jpg'
import pizzaPreview from '@/images/photos/pizza.jpg'
import pvszPreview from '@/images/photos/pvsz.png'
import stocksPreview from '@/images/photos/stocks.png'

const projects = [
  {
    name: 'Stocks Analytics',
    description:
      'Our tool will enable you to have a quick insight of the current stock market. Our database has currently covered the stock market in the US, China and India. You will be able to see which stocks have grown the most or how volatile the stock is either historically or by a specific year. As a plus, you will be able to check which years were worth investing and which were not.',
    link: { href: 'https://itslubin.github.io/CLO-Project-website/', label: 'Go to Website' },
    preview: stocksPreview,
  },
  {
    name: 'CE.LIA Open Source Project',
    description:
      'CEL.IA is a key tool for the implementation of the National Artificial Intelligence Strategy, and the Coordinated Plan on Artificial Intelligence of Europe, becoming the benchmark of technology transfer in Spain. CEL.IA serves as a launchpad for businesses and startups, providing them with access to state-of-the-art AI tools and resources.',
    link: { href: 'https://www.redcelia.es/', label: 'Go to Website' },
    preview: celiaPreview,
  },
  {
    name: 'Physics Simulator',
    description:
      'An easy way to simulate celestial motion in outer space, built as an educational tool to sparks curiosity and foster a deeper understanding of space science. Integrated with an user-friendly UI, teachers can incorporate the app into their curriculum, allowing students to engage actively with astronomical concepts.',
    link: { href: 'https://youtu.be/n0QzEfDGJyk', label: 'Watch Demo' },
    preview: simulatorPreview
  },
  {
    name: 'GetPizza App',
    description:
      'Built out a pizza delivery app for a client restaurant with Java. GetPizza is meant to be used as a loyalty app where customers can earn points for discounts in future orders, blending the convenience of online ordering with a rewarding loyalty program. Implemented with a Redis database stored on cloud server.',
    link: { href: 'https://github.com/itslubin/GetPizza', label: 'See Project' },
    preview: pizzaPreview
  },
  {
    name: 'Plants vs Zombies (Recreation)',
    description:
      'Recreated the all time famous game "Plants vs Zombies", did this challenge within the constraints of a command line environment. Aimed to create an engaging experience that would offer a similar level of challenge and enjoyment as the original game, while using only text-based characters and interactions.',
    link: { href: 'https://youtu.be/vV8OzUv9i7c', label: 'Watch Demo' },
    preview: pvszPreview
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Lubin</title>
        <meta
          name="description"
          content="Ideas are cheap. Building is everything 🏗️."
        />
      </Head>
      <SimpleLayout
        title="Ideas are cheap. Building is everything 🏗️."
        intro="I’ve worked on many projects from little projects for myself to large-scale open source projects. Here are a few that I&apos;m most proud of building."
      >
        
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {project.preview ?
              (
              <div className="rounded-md relative h-56 flex-1">
                <Image
                  src={project.preview}
                  alt=""
                  objectFit="cover"
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>
              ) : null}
              {/* <div className="relative z-10 mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div> */}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <p className="dark:text-zinc-200 text-zinc-800 mt-12">Want to see more projects? Check out my <a href="https://github.com/itslubin" className='dark:text-blue-400 text-blue-500'>GitHub</a></p>
      </SimpleLayout>
    </>
  )
}
