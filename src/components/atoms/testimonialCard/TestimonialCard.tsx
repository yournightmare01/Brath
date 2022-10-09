type TestimonialProps = {
  description?: string;
  author?: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  description,
  author,
}) => {
  return (
    <div className='testimonial'>
      <div className='testimonial__icons'>
        <div className='testimonial__icons__barbecue'></div>
        <div className='testimonial__icons__stars'></div>
      </div>
      <div className='testimonial__description'>{description}</div>
      <div className='testimonial__author'>
        <h3>{author}</h3>
      </div>
    </div>
  );
};
export default TestimonialCard;
