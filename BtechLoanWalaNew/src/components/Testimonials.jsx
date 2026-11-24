import { Star, MapPin } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import { reviewsData } from '../data/reviewsData.js'

function Stars({ rating }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(n => (
        <Star
          key={n}
          size={16}
          fill={n <= rating ? 'currentColor' : 'none'}
          className={n <= rating ? 'filled' : ''}
        />
      ))}
    </div>
  )
}

function Avatar({ review }) {
  if (review.avatar) {
    return (
      <img
        className="review-avatar-img"
        src={review.avatar}
        alt={`${review.name} avatar`}
        loading="lazy"
      />
    )
  }
  return (
    <div className="review-avatar" style={{ background: review.color }} aria-hidden="true">
      {review.initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section section-bg">
      <div className="container">
        <SectionTitle
          title="Our Satisfied"
          accent="Customers"
          subtitle="Trusted by customers who found the right loan with our expert guidance."
        />
        <div className="review-grid">
          {reviewsData.map(r => (
            <article className="review-card" key={r.id}>
              <div className="review-card-top">
                <Avatar review={r} />
                <div className="review-meta">
                  <h4>{r.name}</h4>
                  <span className="review-location"><MapPin size={13} /> {r.location}</span>
                </div>
              </div>
              <Stars rating={r.rating} />
              <p className="review-text">"{r.review}"</p>
              <span className="review-loan">{r.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}