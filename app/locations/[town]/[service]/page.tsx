import { getAllCitySlugs } from '@/data/locations';
import { getAllServiceSlugs } from '@/data/services';
import LocationServicePageClient from './PageClient';

export function generateStaticParams() {
  const towns = getAllCitySlugs();
  const services = getAllServiceSlugs();
  return towns.flatMap(town =>
    services.map(service => ({ town, service }))
  );
}

export default function LocationServicePage({ params }: { params: { town: string; service: string } }) {
  return <LocationServicePageClient params={params} />;
}
