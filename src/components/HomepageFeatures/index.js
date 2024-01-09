import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Kom igång',
        ctaLink: '/docs/category/kom-igång',
        ctaText: 'Kom igång nu',
        description: (
            <>
                En snabbguide för dig som är helt ny till Gudstjänstwebben och vill komma igång med att använda den.
            </>
        ),
    },
    {
        title: 'Manualer',
        ctaLink: '/docs/intro',
        ctaText: 'Till manualerna',
        description: (
            <>
                Här hittar du manualer med instruktioner för hur du använder de olika delarna av Gudstjänstwebben.
            </>
        ),
    },
    {
        title: 'Kontakt',
        ctaLink: '/hjalp-support',
        ctaText: 'Kontakta oss',
        description: (
            <>
                Behöver du hjälp eller har du frågor? Här hittar du kontaktuppgifter till supporten för Gudstjänstwebben.
            </>
        ),
    },
];

function Feature({Svg, title, description, ctaLink, ctaText}) {
    return (

        <div className={clsx('col col--4')}>
            <a className="start-feature-item" href={ctaLink}>
                <div className="text--center padding-horiz--md">
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                    <div className="teaser-cta">
                        <span className="teaser-cta-link text-button">{ctaText}</span>
                    </div>
                </div>
            </a>
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
