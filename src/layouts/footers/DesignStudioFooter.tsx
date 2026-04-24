import { FacebookIconThree, InstragramIconThree, LinkdinIcon, TwitorIconThree } from '@/svg/SocialIcons';
import DesignSFooterCopyright from './subComponents/DesignSFooterCopyright';
import { TextArrowIcon } from '@/svg/ArrowIcon';
import Image from 'next/image';
import Link from 'next/link';

const DesignStudioFooter = () => {
    return (
        <footer className="ds-footer-area pt-150" style={{ backgroundColor: "#010103" }}>
            <div className="ds-footer-top-wrap">
                <div className="container container-1510">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ds-footer-heading tp_fade_anim" data-delay=".3">
                                <h3 className="tp-section-title tl-unbounded">
                                    have any
                                    project in mind
                                </h3>
                                <p>Whether you’re envisioning a bold brand identity, a sleek website, or a <br />
                                    complete digital transformation,</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ds-footer-btn z-index-1 text-lg-end tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <Link className="tp-btn-circle shadow-circle" href="/contact-us">
                                    <span>
                                        <TextArrowIcon />
                                    </span>
                                    let’s talk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ds-footer-bottom-warp pt-70 pb-45">
                <div className="container container-1510">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="ds-footer-widget tp_fade_anim" data-delay=".3">
                                <div className="tp-footer-logo mb-40">
                                    <Link href="/"><Image width={125} height={20} src="/assets/img/logo/logo-white.png" alt="logo white" /></Link>
                                </div>
                                <div className="ds-footer-social mb-40">
                                    <Link href="#">
                                        <span>
                                            <FacebookIconThree />
                                        </span>
                                    </Link>
                                    <Link href="#">
                                        <span>
                                            <TwitorIconThree />
                                        </span>
                                    </Link>
                                    <Link href="#">
                                        <span>
                                            <InstragramIconThree />
                                        </span>
                                    </Link>
                                    <Link href="#">
                                        <span>
                                            <LinkdinIcon />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ds-footer-widget tp_fade_anim" data-delay=".4">
                                <div className="tp-footer-widget-info mb-30">
                                    <h4 className="tp-footer-widget-title ff-unbounded fs-18 fw-500 mb-25">Location</h4>
                                    <span>
                                        <Link href="#">
                                            4517 Washington Ave. Manchester, <br />
                                            Kentucky 39495
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ds-footer-widget tp_fade_anim" data-delay=".5">
                                <div className="tp-footer-widget-info mb-30">
                                    <h4 className="tp-footer-widget-title ff-unbounded fs-18 fw-500 mb-25">Get in touch</h4>
                                    <span>
                                        <Link href="mailto:support@gmail.com">support@gmail.com</Link>
                                    </span>
                                    <span className="tel">
                                        <Link href="tel:452(239)555">+452-(239) 555</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ds-footer-widget tp_fade_anim" data-delay=".6">
                                <h4 className="tp-footer-widget-title ff-unbounded fs-18 fw-500 mb-25">our newsletter</h4>
                                <div className="ds-footer-widget-input p-relative">
                                    <input type="text" placeholder="Your Email Id" />
                                    <button className="tp-btn-green">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ds-copyright-area">
                <div className="container container-1510">
                    <DesignSFooterCopyright />
                </div>
            </div>
        </footer>
    );
};

export default DesignStudioFooter;