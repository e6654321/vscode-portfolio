import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Elram Espra is an avid full stack web and mobile developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="elram espra, elram, espra, web developer portfolio, elram web developer, elram developer, mern stack, elram espra portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Elram Espra's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://i.imgur.com/kmQQ690.png" />
      <meta property="og:url" content="https://elram.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Elram Espra',
};
