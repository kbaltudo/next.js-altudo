import TestimonialVariant1 from "./variants/TestimonialVariant1";
import TestimonialDefault from "./variants/TestimonialDefault";

const TestimonialCard = ({ content, provider, variant }: any) => {

  return (
    <>
      {"variant-1" == variant ?
        <TestimonialVariant1 content={content} provider={provider} />
        :
        <TestimonialDefault content={content} provider={provider} />
      }
    </>
  );
};

export default TestimonialCard;
