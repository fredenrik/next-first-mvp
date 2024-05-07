import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'About SEO Title',
  description: 'About SEO Description',
  keywords: ['About Page', 'Fredenrik', 'informacion', '...'],
};

const AboutPage = () => {

  return (
    <>
      <span className="text-5xl">About Page</span>
    </>
  );
};

export default AboutPage;

