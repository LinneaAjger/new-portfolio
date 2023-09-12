import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { client } from 'lib/contentful/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { TypeProject, TypeProjectSkeleton } from 'src/types/generated/contentful';

// We need to specify the props of our component, we do this here
// by using the `InferGetStaticPropsType` helper from Next, which
// takes in the return type of `getStaticProps` and returns the
// correct type for our component props
export default function ProjectsPage({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(projects)
  return (
    <h1>
      {projects.map((p) => (
        <>
        {p.fields.description && ( 
        <p key={p.sys.id} dangerouslySetInnerHTML={{__html:documentToHtmlString(p.fields.description)}}></p>)}
        </>
      ))}
    </h1>
  );
}


// We need to type the props we are returning from `getStaticProps`
// using the `GetStaticProps` from Next, that takes in a generic
// type describing the props to our component
export const getStaticProps: GetStaticProps<{
  projects: TypeProject<undefined, "en-US">[];
}> = async () => {
  // We pass in our skeleton type to the contentful method
  const res = await client.getEntries<TypeProjectSkeleton>({
    content_type: 'project'
  });
  const projects = await res.items;

  return {
    props: {
      projects
    }
  };
};
