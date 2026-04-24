import AnimatedCounterTwo from '../shared/Counter/AnimatedCounterTwo';
import { ButtonArrowIcon } from '@/svg';
import Link from 'next/link';

const counterData = [
    {
        id: 1,
        duration: 1,
        end: 90,
        symbol: '%',
        label: 'Clients satisfied',
    },
    {
        id: 2,
        duration: 2,
        end: 125,
        symbol: '%',
        label: 'Projects completed',
    },
];

const DesignStudioHero = () => {
    return (
        <div className="ds-hero-ptb ds-hero-bg pt-200 pb-80 include-bg fix" style={{ backgroundImage: `url(/assets/img/design-studio/hero/hero-bg.png)` }}>
            <div className="container container-1510">
                <div className="ds-hero-top pb-145">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="ds-hero-heading-wrap">
                                <h4 className="ds-hero-title tp_fade_anim" data-delay=".3">
                                    dedication to quality over <br />
                                    quantity trust of clients value <br />
                                    precision authenticity.
                                </h4>
                                <div className="ds-hero-btn tp_fade_anim" data-delay=".4">
                                    <Link className="tp-btn-green btn-h-60 tp-btn-anim" href="/contact-us">
                                        <div className="tp-btn-text">lets talk </div>{""}
                                        <span>
                                            <ButtonArrowIcon />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ds-hero-counter-wrapper d-flex justify-content-between justify-content-lg-end tp_fade_anim" data-delay=".3">
                                {counterData.map(({ id, end, symbol, label }) => (
                                    <div key={id} className="ds-hero-counter-item">
                                        <h4 className="ds-hero-counter-title">
                                            <AnimatedCounterTwo min={0} max={end} />{" "}
                                            {symbol}
                                        </h4>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ds-hero-bottom">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ds-hero-text-wrap tp_fade_anim" data-delay=".6">
                                <h3 className="ds-hero-text-title">DigitaL <span></span></h3>
                                <h4 className="ds-hero-text-title-2">Design Studi <span></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignStudioHero;