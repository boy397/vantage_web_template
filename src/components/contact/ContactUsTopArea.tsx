import Link from "next/link";
import { PhoneIconFive } from "@/svg/PhoneIcons";
import { ContactShapeIcon } from "@/svg/ShapeIcons";
import {
    ChatIcon,
    EmailIconTwo,
    FacebookIconThree,
    InstragramIconThree,
    LinkdinIcon,
    TwitorIconThree,
} from "@/svg/SocialIcons";

/* ------------------ data ------------------ */

const contactItems = [
    {
        id: 1,
        icon: <PhoneIconFive />,
        label: "Call Us Directly",
        value: "+(1) 224 676 7430",
        href: "tel:2246767430",
    },
    {
        id: 2,
        icon: <EmailIconTwo />,
        label: "Need Support?",
        value: "acjon@studio.com",
        href: "mailto:acjon@studio.com",
    },
    {
        id: 3,
        icon: <ChatIcon />,
        value: "Start Chat",
        href: "/contact-us",
    },
];

const socialLinks = [
    { id: 1, icon: <FacebookIconThree />, href: "#" },
    { id: 2, icon: <TwitorIconThree width="12" height="11" />, href: "#" },
    { id: 3, icon: <InstragramIconThree width="12" height="11" />, href: "#" },
    { id: 4, icon: <LinkdinIcon />, href: "#" },
];

/* ------------------ component ------------------ */

const ContactUsTopArea = () => {
    return (
        <section className="tp-contact-us-top-ptb pt-200 pb-80 fix">
            <div className="container container-1480">
                <div className="row">
                    {/* Left content */}
                    <div className="col-lg-4">
                        <div className="tp-contact-us-heading z-index-1">
                            <p className="tp-contact-us-subtitle">
                                Let&apos;s bring your vision to life—reach out to <br />
                                us with any questions or ideas.
                            </p>

                            <div className="tp-contact-us-shape pl-160">
                                <span>
                                    <ContactShapeIcon />
                                </span>
                            </div>

                            <h4 className="tp-contact-us-title tp-split-title">
                                Let&apos;s get in <br /> touch!
                            </h4>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="col-lg-8">
                        <div className="tp-contact-us-top-wrapper p-relative">
                            {/* Map */}
                            <div className="tp-contact-us-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002818075!2d-74.1443121872927!3d40.69728463485858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1745055504744!5m2!1sen!2sbd"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>

                            {/* Info card */}
                            <div className="tp-contact-us-info">
                                <div
                                    className="ar-about-funfact-wrap z-index-1 p-relative tp_fade_anim"
                                    data-delay=".5"
                                    style={{ backgroundColor: "#c9f31d" }}
                                >
                                    <div className="ar-about-funfact-content">
                                        <h4>
                                            Get <br /> In Touch!
                                        </h4>
                                    </div>

                                    {/* Contact items */}
                                    <div className="ar-about-funfact-item-box mb-35">
                                        {contactItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="ar-about-funfact-item d-flex align-items-center"
                                            >
                                                <div className="ar-about-funfact-item-icon">
                                                    <span>{item.icon}</span>
                                                </div>

                                                <div className="ar-about-funfact-item-content">
                                                    {item.label && <p>{item.label}</p>}
                                                    <Link className="tp-line-white" href={item.href}>
                                                        {item.value}
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom text */}
                                    <div className="ar-about-funfact-item-bottom">
                                        <p>
                                            See our <span>Refund Policies</span> or{" "}
                                            <Link href="/faq">FAQ</Link>
                                        </p>
                                    </div>

                                    {/* Social links */}
                                    <div className="ar-about-funfact-item-social">
                                        {socialLinks.map((item) => (
                                            <Link key={item.id} href={item.href}>
                                                <span>{item.icon}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* info end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsTopArea;
