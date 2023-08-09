import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function BooksSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Book({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Books - Lubin</title>
        <meta
          name="description"
          content="I love reading books 📖. Here are some thoughts on those reads."
        />
      </Head>
      <SimpleLayout
        title="I love reading books 📖. Here are some recommendations."
        intro="I sometimes get asked about what books I read. I&apos;ve read books about technology, literature, business, philosophy, and just living life. Here are a few."
      >
        <div className="space-y-20">
          <BooksSection title="Currently Reading">
            <Book title="Mental Knots by Bernardo Stamateas">
              Interesting reading about dealing with personal problems and just life in general. Talks about problems that we might face in our day to day and tries to give a different approach to them helping me tackle things differently.
            </Book>
          </BooksSection>
          <hr className='border-zinc-200 dark:border-zinc-600'/>
          <BooksSection title="Economy & Science">
            <Book title="Liderar sin molestar by Javier Moreno Zabala">
              - Not everyone is willing to work without a passion or without a clear understanding about what exactly they are contributing to society <br />
              - Mark Zuckerberg (Meta&apos;s CEO) and Tim Cook (Apple&apos;s CEO) agree on the importance of having a personal purpose connected to the need to be part of an organization <br />
              - Today&apos;s youth believe that companies prioritize profits over employee well-being, demanding a different leadership approach characterized by transparency, humility, responsibility, and an unprecedented ethical and personal background <br />
              - They believe that companies have an obligation to make work more meaningful beyond just enhancing shareholder returns, focusing on a social purpose and impacting positively on the world
            </Book>
            <Book title="Hit Refresh by Satya Nadella">
              - The root of Microsoft was to democratize computing, making it available to everyone. Our initial mission was: &quot;A computer on every desk and in every home.&quot; <br />
              - An empathetic leader should be out in the world, getting to know people where they live, and seeing how the technology we create impacts their daily activities <br />
              - The fact that governments do not encourage the use of technologies implies that there is still a trend of increasing inequality between the rich and the poor <br />
              - Sum(Education + Innovation) x Intensity of technology use = economic growth <br />
              - You don&apos;t have to reinvent the wheel; societies that quickly adopt new tools are more likely to be more productive
            </Book>
            <Book title="Rich Dad Poor Dad by Robert T. Kiyosaki">
              - A job is essentially a short-term solution to a long-term problem <br />
              - Due to desire and fear, nearly everyone spends their life chasing a paycheck, salary increases, and secure jobs <br />
              - Learn to use your emotions for thinking, but don&apos;t think with them <br />
              - The rich acquire assets, while the poor and middle class acquire liabilities they consider assets 
            </Book>
            <Book title="Big data by Walter Sosa Escudero">
            </Book>
            <Book title="Tiempo de reconstruirte by Javier Regueira">
            </Book>
          </BooksSection>
          <BooksSection title="Life">
            <Book title="Art of War by Sun Tzu">
            </Book>
            <Book title="Silence: In the Age of Noise by Erling Kagge">
            </Book>
            <Book title="Steve Jobs by Walter Isaacson">
            </Book>
          </BooksSection>
          <BooksSection title="Literature">
            <Book title="Demian by Hermann Hesse">
            </Book>
            <Book title="Animal Farm by George Orwell">
            </Book>
            <Book title="Story of a staircase by Antonio Buero Vallejo">
            </Book>
            <Book title="Diccionari per a ociosos by Joan Fuster">
            </Book>
            <Book title="El verí del teatre by Rodolf Sirera">
            </Book>
          </BooksSection>
        </div>
      </SimpleLayout>
    </>
  )
}
