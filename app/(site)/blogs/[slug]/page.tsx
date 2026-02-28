import { redirect } from "next/navigation";

type Props = { params: { slug: string } };

export default function BlogSlugRedirectPage({ params }: Props) {
  redirect(`/${params.slug}`);
}
