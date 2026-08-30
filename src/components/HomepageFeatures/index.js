import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'My Portfolio',
    imgUrl: require('@site/static/img/folder-portfolio.png').default,
    to: '/docs/portfolio/intro',
    description: (
      <>
        <span className={styles.leftJustify}>
          You can take a look at my portfolio and experience. It includes documentation for products I've worked on, such as Flexera's Ocean, Forescout's Platform, and Tomia's Sparx. Each section provides insights into my contributions and the impact of these products in the industry.
        </span>
      </>
    ),
  },
  {
    title: 'FAQ',
    imgUrl: require('@site/static/img/faq_icon.png').default,
    to: '/docs/faq/faq-index',
    description: (
      <>
        <span className={styles.leftJustify}>
          Here are some frequently asked questions. If you want to ask me something, send me feedback to the email address at the bottom of this page.
        </span>
      </>
    ),
  },
  {
    title: 'Writing Methodology',
    imgUrl: require('@site/static/img/writing-methodology.png').default,
    to: `/docs/writing-methodology/methodology-intro`,
    description: (
      <>
        <span className={styles.leftJustify}>
          This is how I approach a problem and execute a project from start to finish.
        </span>
      </>
    ),
  },
];

function Feature({Svg, imgUrl, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {to ? (
          <Link to={to}>
            {imgUrl ? (
              <img src={imgUrl} className={styles.featureSvg} role="img" alt={title} />
            ) : (
              <Svg className={styles.featureSvg} role="img" />
            )}
          </Link>
        ) : (
          imgUrl ? (
            <img src={imgUrl} className={styles.featureSvg} role="img" alt={title} />
          ) : (
            <Svg className={styles.featureSvg} role="img" />
          )
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
