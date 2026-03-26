// lib/seo/story-schema.ts
//
// Builds Review + ItemList schema for patient story pages.
//
// Review schema on individual story pages makes them eligible for
// Google's Review rich results — a significant SERP differentiator
// for a YMYL aggregator.
//
// The reviewed item is always the CLINIC (Dentist entity), never the
// directory. This is the correct schema pattern — the review is of
// the provider, not the matching service.
//
// AggregateRating on the clinic profile page (/clinics/[slug]/) is
// updated separately from this file. The Review schema here provides
// the individual review data that feeds into that aggregate.

import { siteConfig } from '@/data/site';
import type { PatientStory } from '@/data/stories/patient-stories';

export function buildStoryReviewSchema(story: PatientStory): object {
  const base = siteConfig.url;
  return {
    '@context': 'https://schema.org',
    '@type':    'Review',
    'name':     story.headline,
    'url':      `${base}/success-stories/${story.slug}/`,
    'datePublished': story.publishedDate,
    ...(story.lastUpdated ? { 'dateModified': story.lastUpdated } : {}),
    'reviewRating': {
      '@type':       'Rating',
      'ratingValue': String(story.ratingValue),
      'bestRating':  '5',
      'worstRating': '1',
    },
    'author': {
      '@type': 'Person',
      'name':  story.patientFirstName,
    },
    // Full story body — schema.org recommends the complete review text
    'reviewBody':
      [story.backgroundText, story.choiceText, story.journeyText, story.resultText]
        .filter(Boolean)
        .join(' '),
    // The item reviewed is the CLINIC, referenced by stable @id
    'itemReviewed': {
      '@type': 'Dentist',
      '@id':   `${base}/clinics/${story.clinicSlug}/#dentist`,
      'name':  story.clinicName,
    },
    // Publisher = the directory
    'publisher': {
      '@type': 'Organization',
      '@id':   `${base}/#organization`,
      'name':  'Invisalign Dentists Essex',
    },
  };
}

// Builds an ItemList schema for the /success-stories/ index page
// Enables rich result eligibility for the index as a collection page
export function buildStoriesIndexSchema(stories: PatientStory[]): object {
  const base = siteConfig.url;
  return {
    '@context': 'https://schema.org',
    '@type':    'ItemList',
    'name':     'Patient Invisalign Success Stories — Essex',
    'url':      `${base}/success-stories/`,
    'numberOfItems': stories.length,
    'itemListElement': stories.map((story, i) => ({
      '@type':    'ListItem',
      'position': i + 1,
      'url':      `${base}/success-stories/${story.slug}/`,
      'name':     story.headline,
    })),
  };
}

// Builds inline Review snippet schema for use on matrix pages
// (/locations/[town]/[service]/) and treatment hub pages
// when a matching story is displayed inline via PatientStoryCard
export function buildInlineReviewSchema(story: PatientStory): object {
  const base = siteConfig.url;
  return {
    '@context': 'https://schema.org',
    '@type':    'Review',
    'reviewRating': {
      '@type':       'Rating',
      'ratingValue': String(story.ratingValue),
      'bestRating':  '5',
    },
    'author':   { '@type': 'Person', 'name': story.patientFirstName },
    'reviewBody': story.resultText,
    'itemReviewed': {
      '@type': 'Dentist',
      '@id':   `${base}/clinics/${story.clinicSlug}/#dentist`,
      'name':  story.clinicName,
    },
  };
}
