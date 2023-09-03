import { client } from "lib/contentful/client"

export default function ProjectsPage({ projects }) {
  console.log(projects)
  return <h1>{projects}</h1>
}

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'project'})
  const projects = await res.items.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  }
}


