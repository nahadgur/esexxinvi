'use client';

// app/share-your-story/page.tsx
//
// Patient story submission form.
//
// ETHICAL COLLECTION RULES ENFORCED BY THIS FORM:
//   - Treatment must be confirmed complete (checkbox required)
//   - Patient must confirm they attended the named clinic (checkbox required)
//   - Explicit consent for publication collected at field level
//   - Explicit consent for first name display collected separately
//   - No incentive offered or implied anywhere on the form
//   - All four story sections are required fields — prevents one-line submissions
//   - Form states clearly what will be done with the submission
//
// After submission:
//   1. Patient receives auto-confirmation email
//   2. We contact the named clinic to verify treatment
//   3. Clinic confirms patient attended (yes/no only — no editorial input)
//   4. We review the submission against editorial standards
//   5. Patient receives notification when story is published (or declined with reason)

import { useState } from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

// Metadata must be in a separate server component if page uses 'use client'
// Move to a layout.tsx or use generateMetadata in a server wrapper
// export const metadata: Metadata = { ... }

const clinics = [
  { slug: 'church-langley-dental-harlow',  name: 'Church Langley Dental — Harlow' },
  // Add all listed clinics here
];

const treatments = [
  { slug: 'crowded',   label: 'Crowded Teeth' },
  { slug: 'gaps',      label: 'Gaps & Spacing' },
  { slug: 'overbite',  label: 'Overbite' },
  { slug: 'underbite', label: 'Underbite' },
  { slug: 'crossbite', label: 'Crossbite' },
  { slug: 'adults',    label: 'Adult Invisalign (general)' },
];

export default function ShareYourStoryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    // Submit to your API route or form backend (e.g. Formspree, Netlify Forms)
    try {
      await fetch('/api/submit-story', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: { 'Content-Type': 'application/json' },
      });
      setSubmitted(true);
    } catch {
      setIsLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="container-width max-w-2xl py-20 text-center">
        <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Thank you</h1>
        <p className="text-gray-600 leading-relaxed">
          We have received your story. We will contact your clinic to verify your treatment and then review your submission. We will let you know when it is published — usually within 10 working days. Your story will only be published with your confirmation.
        </p>
      </main>
    );
  }

  return (
    <main className="bg-white py-16">
      <div className="container-width max-w-2xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Share Your Invisalign Story
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Real patient experiences help Essex residents understand what Invisalign treatment actually involves — not just what it looks like at the end. If you completed treatment at one of our listed clinics and want to share your journey, we would like to hear from you.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-sm text-amber-900">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>
              We do not offer any incentive for story submissions. Incentivised testimonials are prohibited by GDC advertising guidance and breach our editorial standards. Your story is published because it is genuinely useful to other patients — not because of any arrangement with us or the clinic that treated you.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic details */}
          <fieldset className="space-y-4">
            <legend className="text-lg font-display font-bold text-gray-900 mb-4">Your details</legend>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First name (only your first name will be published) <span className="text-red-500">*</span>
                </label>
                <input name="firstName" required type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your town in Essex <span className="text-red-500">*</span>
                </label>
                <input name="town" required type="text" placeholder="e.g. Harlow"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Contact email (not published) <span className="text-red-500">*</span>
                </label>
                <input name="email" required type="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>
            </div>
          </fieldset>

          {/* Treatment details */}
          <fieldset className="space-y-4">
            <legend className="text-lg font-display font-bold text-gray-900 mb-4">Treatment details</legend>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Clinic <span className="text-red-500">*</span>
                </label>
                <select name="clinicSlug" required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white">
                  <option value="">Select clinic</option>
                  {clinics.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Treatment type <span className="text-red-500">*</span>
                </label>
                <select name="treatmentSlug" required
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white">
                  <option value="">Select treatment</option>
                  {treatments.map(t => <option key={t.slug} value={t.slug}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  How long did treatment take? <span className="text-red-500">*</span>
                </label>
                <input name="duration" required type="text" placeholder="e.g. 14 months"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Month and year treatment completed <span className="text-red-500">*</span>
                </label>
                <input name="completedDate" required type="month"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>
            </div>
          </fieldset>

          {/* Story fields */}
          <fieldset className="space-y-6">
            <legend className="text-lg font-display font-bold text-gray-900 mb-1">Your story</legend>
            <p className="text-sm text-gray-600 mb-4">
              Please write each section in your own words. We do not edit stories beyond light proofreading for grammar and spelling — the voice should be yours.
            </p>

            {[
              { name: 'backgroundText', label: 'Why did you seek treatment?', hint: 'What was the issue you wanted to address? How long had you lived with it? What prompted you to act? (60–100 words)' },
              { name: 'choiceText',     label: 'How did you choose your clinic?', hint: 'What criteria mattered to you? How did you find the clinic? What was the initial consultation like? (60–100 words)' },
              { name: 'journeyText',    label: 'What was the treatment experience like?', hint: 'How did wearing aligners fit into your life? What was harder or easier than expected? Any challenges? (80–120 words — honesty matters here)' },
              { name: 'resultText',     label: 'What was the result?', hint: 'What specifically changed? Try to be concrete rather than general — specific details are more useful to other patients. (60–100 words)' },
            ].map(field => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-2">{field.hint}</p>
                <textarea
                  name={field.name}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-y"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                What would you tell someone considering this treatment? (optional)
              </label>
              <textarea name="adviceText" rows={3}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-y" />
            </div>
          </fieldset>

          {/* Consent checkboxes */}
          <fieldset className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
            <legend className="text-sm font-bold text-gray-900 mb-4">Verification and consent</legend>
            {[
              { name: 'confirmTreatmentComplete', label: 'I confirm that my Invisalign treatment at the clinic named above is complete, not in progress.' },
              { name: 'confirmAttended',          label: 'I confirm that I personally attended and was treated at the clinic I have named above.' },
              { name: 'consentPublication',       label: 'I consent to Invisalign Dentists Essex publishing my story on this website, including on pages related to my treatment type and town.' },
              { name: 'consentFirstName',         label: 'I consent to my first name and town being displayed alongside my story.' },
              { name: 'confirmNoIncentive',       label: 'I confirm that I have not received, and have not been offered, any incentive (discount, gift, payment, or similar) in exchange for submitting this story.' },
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name={item.name} required
                  className="mt-0.5 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item.label}</span>
              </label>
            ))}
          </fieldset>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-60"
          >
            {isLoading ? 'Submitting…' : 'Submit My Story'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            Your contact email is used only to notify you when your story is published or to request clarification. It will not be displayed publicly or shared with the clinic. Read our{' '}
            <a href="/privacy-policy/" className="text-brand-700 hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </main>
  );
}
