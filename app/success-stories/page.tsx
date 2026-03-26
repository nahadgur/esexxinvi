// app/success-stories/page.tsx
// Success Stories index — /success-stories/
// Acts as an Experience hub page. Linked from footer and treatment pages.

import type { Metadata } from 'next';
import { getActiveStories } from '@/data/stories/patient-stories';
import { PatientStoryCard } from '@/components/trust/PatientStoryCard';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Success Stories | Real Invisalign Journeys in Essex',
  description: 'Real patient experiences from across Essex. Every story is verified, consented, and collected directly from patients who completed Invisalign treatment at a listed clinic.',
  alternates: { canonical: 'https://www.invisaligndentistsessex.uk/success-stories/' },
};

const treatmentLabels: Record<string, string> = {
  crowded:   'Crowded Teeth',
  gaps:      'Gaps',
  overbite:  'Overbite',
  underbite: 'Underbite',
  crossbite: 'Crossbite',
  adults:    'Adult Invisalign',
};

export default function SuccessStoriesPage() {
  const stories = getActiveStories();

  // Group by treatment for filtered display
  const byTreatment: Record<string, typeof stories> = {};
  stories.forEach(s => {
    if (!byTreatment[s.treatmentSlug]) byTreatment[s.treatmentSlug] = [];
    byTreatment[s.treatmentSlug].push(s);
  });

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-width max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
            <ShieldCheck className="w-4 h-4" /> Verified Patient Experiences
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 tracking-tight">
            Real Invisalign Journeys Across Essex
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every story on this page comes from a real Essex patient who completed Invisalign treatment at one of our listed clinics. We collect, verify, and publish these accounts to help people considering treatment understand what the experience actually involves — not just the outcome.
          </p>
        </div>
      </section>

      {/* Verification explainer */}
      <section className="py-8 bg-brand-50 border-b border-brand-100">
        <div className="container-width max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Treatment verified</p>
                <p>We confirm with the clinic that each patient completed treatment there before publishing their story.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Written consent</p>
                <p>Every story is published with the explicit written consent of the patient. No incentive is offered for submission.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Treatment complete</p>
                <p>We only publish stories from patients who have completed treatment — not in-progress accounts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories — grouped by treatment */}
      <section className="py-16">
        <div className="container-width max-w-4xl">
          {Object.entries(byTreatment).map(([slug, group]) => (
            <div key={slug} className="mb-14">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {treatmentLabels[slug] ?? slug}
              </h2>
              <div className="space-y-8">
                {group.map(story => (
                  <PatientStoryCard key={story.slug} story={story} variant="full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share your story CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-width max-w-2xl text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
            Completed your Invisalign treatment?
          </h2>
          <p className="text-gray-600 mb-6">
            If you were treated at a clinic found through this directory, we would like to hear about your experience. Sharing your story helps other Essex residents make an informed decision.
          </p>
          <a
            href="/share-your-story/"
            className="inline-block bg-brand-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-700 transition-colors"
          >
            Share Your Story
          </a>
          <p className="text-xs text-gray-500 mt-4">
            No incentives are offered for story submissions. All stories are reviewed, verified with your clinic, and published only with your explicit written consent.
          </p>
        </div>
      </section>

    </main>
  );
}
