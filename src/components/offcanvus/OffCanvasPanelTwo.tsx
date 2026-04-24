"use client"
import { DribbbleIconThree, InstragramIconFive, TwitorIconFour } from '@/svg/SocialIcons';
import { getScrollSmoother } from '@/hooks/useScrollSmooth';
import MenuStyleTwo from './subComponents/MenuStyleTwo';
import { offcanvasIProps } from '@/types/custom-dt';
import { CroseIcon, CroseIconThree } from '@/svg';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OffCanvasPanelTwo: React.FC<offcanvasIProps> = ({ openOffcanvas, setOpenOffcanvas }) => {
    // Pauses ScrollSmoother when offcanvas opens to prevent background scroll, but can hide/flicker the scrollbar.
    useEffect(() => {
        const smoother = getScrollSmoother();

        if (smoother) {
            if (openOffcanvas) {
                smoother.paused(true);
                document.body.style.overflowY = "";
            } else {
                smoother.paused(false);
                document.body.style.overflowY = "";
            }
        }
    }, [openOffcanvas]);

    return (
        <div className={`tp-offcanvas-2-area p-relative offcanvas-2-black-bg ${openOffcanvas ? "opened" : ""}`}>
            <div className="tp-offcanvas-2-bg is-left left-box"></div>
            <div className="tp-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
            <div className="tp-offcanvas-2-wrapper">
                <div className="tp-offcanvas-2-left left-box">
                    <div className="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
                        <div className="tp-offcanvas-2-logo">
                            <Link href="/">
                                <Image className="logo-1" width={140} height={22} src="/assets/img/logo/logo-white.png" alt="logo" />
                                <Image className="logo-2" width={140} height={22} src="/assets/img/logo/logo-black.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-close d-md-none text-end">
                            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
                                <span className="text">
                                    <span>close</span>
                                </span>
                                <span className="d-inline-block">
                                    <span>
                                        <CroseIconThree />
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-menu counter-row">
                        <nav>
                            <MenuStyleTwo />
                        </nav>
                    </div>
                </div>
                <div className="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
                    <div className="tp-offcanvas-2-close text-end">
                        <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
                            <span className="text"><span>close</span></span>
                            <span className="d-inline-block">
                                <span><CroseIcon /></span>
                            </span>
                        </button>
                    </div>
                    <div className="tp-offcanvas-2-right-info-box mt-160">
                        <h4 className="tp-offcanvas-2-right-info-title">Get In Touch</h4>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Phone</label>
                            <Link className="tp-line-white" href="tel:42345678910">+4 (234) 567 8910</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Email</label>
                            <Link className="tp-line-white" href="mailto:hello@gmail.com">hello@gmail.com</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Address</label>
                            <Link className="tp-line-white" href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                602 Elgin St. Celina, Delaware <br /> 1009
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-15">Follow us</label>
                            <div className="tp-offcanvas-2-right-social">
                                <Link href="#">
                                    <DribbbleIconThree />
                                </Link>{" "}
                                <Link href="#">
                                    <TwitorIconFour />
                                </Link>{" "}
                                <Link href="#">
                                    <InstragramIconFive />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasPanelTwo;