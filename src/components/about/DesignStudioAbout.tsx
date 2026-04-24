"use client";
import AnimatedCounter from '../shared/Counter/AnimatedCounter';
import { useVideoModal } from '@/provider/VideoProvider';
import { VideoPlayIconFive } from '@/svg/VideoPlayIcons';
import { TextArrowIcon } from '@/svg/ArrowIcon';
import Image from 'next/image';
import Link from 'next/link';

const aboutData = [
    { title: 'Awards', value: 158, suffix: '+' },
    { title: 'Clients', value: 25, suffix: 'm+' },
    { title: 'Members', value: 15, suffix: 'k+' },
];

const DesignStudioAbout = () => {
    const { playVideo } = useVideoModal();

    return (
        <div className="ds-about-ptb pt-150 pb-130" style={{ backgroundColor: "#010103" }}>
            <div className="container container-1510">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ds-about-heading-wrapper mb-80">
                            <h3 className="tp-section-title tl-unbounded tp-split-title">
                                We are the ones <br />
                                who create.
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ds-about-text-wrap mb-80 tp_fade_anim" data-delay=".5">
                            <p>
                                At our design studio, we blend creativity with strategy
                                cutting-edge digital solutions. From brand development to
                                interactive web experiences.
                            </p>
                            <div className="ds-about-btn-box">
                                <Link className="ds-about-btn" href="/about-us">
                                    About Us
                                    <span>
                                        <TextArrowIcon />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {aboutData.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div
                                className="ds-about-item p-relative mb-30 tp_fade_anim"
                                data-delay={`.${index + 3}`}
                            >
                                <span className="ds-about-item-sub">{item.title}</span>
                                <h3 className="ds-about-item-title">
                                    <AnimatedCounter min={0} max={item.value} />
                                    {item.suffix}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ds-about-text-video pt-130">
                            <div className="ds-about-text-thumb p-relative">
                                <Image width={1478} height={221} className="img-fluid w-100 h-100 tp_fade_anim" data-delay=".3" data-fade-from="bottom" data-ease="bounce" src="/assets/img/design-studio/about/about-text.svg" alt="about text" />
                                <div className="ds-about-video-wrap text-center">
                                    <a onClick={() => { playVideo("go7QYaQR494") }} className="popup-video">
                                        <span>
                                            <VideoPlayIconFive />
                                        </span>
                                    </a>
                                    <p>how It Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignStudioAbout;