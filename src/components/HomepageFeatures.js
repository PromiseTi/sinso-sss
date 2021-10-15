import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    isTran: false,
    title: 'Sinso Getway',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>effective data collection interface, docking Filecoin plus plan.</>
    ),
    to: '/docs/content/getway',
  },
  {
    isTran: true,
    title: 'Sinso Medical Imaging DApp',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: <>application layer and Middleware.</>,
    to: '/docs/content/dapp',
  },
  {
    isTran: false,
    title: 'Sinso Donors Network',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: <>Data transaction, NFT casting, dynamic token Economics</>,
    to: '/docs/content/donorsNetwork',
  },
  {
    isTran: true,
    title: 'Sinso DAC',
    Svg: require('../../static/img/undraw_docusaurus_gg.svg').default,
    description: <>Community governance and incentives</>,
    to: '/docs/content/dac',
  },
]

function Feature({ Svg, title, description, isTran, to }) {
  return (
    // className={clsx('col col--5')} 'blockk' : 'trans'
    //
    <div
      className={['blockk', isTran ? 'trans' : false].filter(Boolean).join(' ')}
    >
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="bloTit">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={to}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
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
  )
}
