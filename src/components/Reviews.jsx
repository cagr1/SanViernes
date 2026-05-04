import TestimonialMarquee from './TestimonialMarquee'
import { reviewRows } from '../data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-root">
      <div className="container">
        <TestimonialMarquee rows={reviewRows} />
      </div>
    </section>
  )
}
