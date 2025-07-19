import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="joseph Castellano - Software Engineer specializing in modern web applications, e-commerce platforms, and enterprise solutions"
      />
      <meta
        name="keywords"
        content="joseph Castellano, software engineer, react, next.js, node.js, three.js, ruby on rails, shopify, wordpress, e-commerce development, enterprise solutions"
      />
      <meta property="og:title" content="joseph Castellano's Portfolio" />
      <meta
        property="og:description"
        content="Experienced software engineer specializing in e-commerce platforms, enterprise solutions, and modern web development with React, Next.js, Three.js, and more."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://josephCastellano.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "joseph Castellano",
};

# touched on 2025-08-14T19:55:52.956761Z
# touched on 2025-08-14T19:55:58.976174Z
# touched on 2025-08-14T19:56:16.171513Z
# touched on 2025-08-14T19:56:25.096695Z