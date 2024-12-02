import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "@/components/page";
import { notFound } from "next/navigation";
// import defaultMdxComponents from "fumadocs-ui/mdx";
import { Pre, CodeBlock } from "@/components/codeblock";
import { Callout } from "@/components/callout";
import { Cards, Card } from "@/components/card";
import { Heading } from "@/components/heading";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="flex flex-col gap-3">
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
      </div>
      <DocsBody>
        <MDX
          components={{
            pre: (props) => (
              <CodeBlock {...props}>
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
            Callout,
            Cards,
            Card,
            h1: (props) => <Heading as="h1" {...props} />,
            h2: (props) => <Heading as="h2" {...props} />,
            h3: (props) => <Heading as="h3" {...props} />,
            h4: (props) => <Heading as="h4" {...props} />,
            h5: (props) => <Heading as="h5" {...props} />,
            h6: (props) => <Heading as="h6" {...props} />,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} - WFS Components`,
    description: page.data.description,
  };
}
