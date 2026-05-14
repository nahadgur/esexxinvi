import type { BreadcrumbItem } from './schema';

export type { BreadcrumbItem };

export function locationCrumbs(name: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations/' },
    { label: name },
  ];
}

export function treatmentCrumbs(title: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Treatments', href: '/treatments/' },
    { label: title },
  ];
}

export function clinicCrumbs(name: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Clinics', href: '/clinics/' },
    { label: name },
  ];
}

export function guideCrumbs(category: string, title: string, categorySlug: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides/' },
    { label: category, href: `/guides/${categorySlug}/` },
    { label: title },
  ];
}

export function blogCrumbs(title: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: title },
  ];
}
