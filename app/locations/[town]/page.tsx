import { getAllCitySlugs } from '@/data/locations';
import TownPageClient from './PageClient';

export function generateStaticParams() {
  return getAllCitySlugs().map(town => ({ town }));
}

export default function TownPage({ params }: { params: { town: string } }) {
  return <TownPageClient params={params} />;
}
