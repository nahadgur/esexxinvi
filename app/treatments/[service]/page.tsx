import { getAllServiceSlugs } from '@/data/services';
import TreatmentPageClient from './PageClient';

export function generateStaticParams() {
  return getAllServiceSlugs().map(service => ({ service }));
}

export default function TreatmentPage({ params }: { params: { service: string } }) {
  return <TreatmentPageClient params={params} />;
}
