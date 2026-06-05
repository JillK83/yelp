import React from 'react'

const SOLUTIONS = [
  {
    id: 'vibe-gallery',
    icon: '🎨',
    title: 'Visual Vibe Gallery',
    value: 'Photo clusters organized by experiential Moments',
    summary: 'Transforms a flat photo dump into a social-proof-driven visual walkthrough. Photos organized by context ("Saturday Night Vibe," "The Patio at Sunset") with reaction counts, reviewer credibility signals, and optional short-form video.',
    pros: 'Immersive discovery, social proof at a glance',
    cons: 'Requires video moderation',
  },
  {
    id: 'dietary-intel',
    icon: '🍽️',
    title: 'Dietary Intelligence',
    value: 'Personalized recommendations based on your diet',
    summary: 'Automatically infers your dietary profile and shows relevant dishes with photos, review-extracted safety signals, and a "people like you ordered" carousel. Answers "can I eat here and what should I get?" without reading a single review.',
    pros: 'Instant confidence, zero friction',
    cons: 'Privacy considerations with profiling',
  },
  {
    id: 'persona-reviews',
    icon: '⭐',
    title: 'Persona-Based Review Highlights',
    value: 'Reviews auto-sorted by what matters to you',
    summary: 'Reorders review excerpts and insights based on implicit behavioral signals (search history, past reviews, bookmarks). A parent sees kid-friendliness first; a foodie sees ingredient sourcing — same page, personalized for each user, no setup.',
    pros: 'Truly personalized, transparent signals',
    cons: 'Complex algorithm, interpretation risks',
  },
]

export default function LandingPage({ onTryPrototype }) {
  return (
    <div className="lp-wrap">
      <div className="lp-container">
        <div className="lp-header">
          <h1>AI Solutions for Yelp</h1>
          <p>Three concepts to reduce review-scanning friction and help users make confident decisions faster.</p>
        </div>
        <div className="lp-grid">
          {SOLUTIONS.map(solution => (
            <div key={solution.id} className="lp-card">
              <div className="lp-card-icon">{solution.icon}</div>
              <div className="lp-card-title">{solution.title}</div>
              <div className="lp-card-value">{solution.value}</div>
              <div className="lp-card-summary">{solution.summary}</div>
              <div className="lp-card-pros-cons">
                <div className="lp-card-pros">
                  <div className="lp-card-pros-label">✓ Pros</div>
                  <div className="lp-card-pros-text">{solution.pros}</div>
                </div>
                <div className="lp-card-cons">
                  <div className="lp-card-cons-label">⚠ Cons</div>
                  <div className="lp-card-cons-text">{solution.cons}</div>
                </div>
              </div>
              <button className="lp-btn-primary" onClick={onTryPrototype}>
                Try This Prototype
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
