import { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';
import { client } from 'lib/contentful/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// We need to specify the props of our component, we do this here
// by using the `InferGetStaticPropsType` helper from Next, which
// takes in the return type of `getStaticProps` and returns the
// correct type for our component props
export default function ProjectsPage({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(projects);
  return (
    <h1>
      {projects.map((p) => (
        <p>{p.fields.name}</p>
      ))}
    </h1>
  );
}

/* These types should be in a types file somewhere else
 * or even better, automatically generated
 */

// First we declare a type matching our Contentful Model,
// `EntrySkeletonType` is a helper type that will create
// the correct type for the `fields` property.
// It takes in an object type of the fiels and the content
// type id as generic parameters.
type ProjectSkeleton = EntrySkeletonType<
  {
    name: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
  },
  'project'
>;

// To get the correct type for a specific entry we use
// the `Entry` type, which takes in the skeleton we created
// above and a modifier, in this case `undefined` since
// we don't have any localizations
type ProjectEntry = Entry<ProjectSkeleton, undefined>;

/***** End types */

// We need to type the props we are returning from `getStaticProps`
// using the `GetStaticProps` from Next, that takes in a generic
// type describing the props to our component
export const getStaticProps: GetStaticProps<{
  projects: ProjectEntry[];
}> = async () => {
  // We pass in our skeleton type to the contentful method
  const res = await client.getEntries<ProjectSkeleton>({
    content_type: 'project'
  });
  const projects = await res.items;

  return {
    props: {
      projects
    }
  };
};
