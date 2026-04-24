import ContactInfoItem from "@/components/contact/ContactInfoItem";
import ContactUsTopArea from "@/components/contact/ContactUsTopArea";
import ContactForm from "@/components/form/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Content Us - Digital Agency & Creative Portfolio",
};

const page = () => {
    return (
        <main>
            {/* -- contact top area start -- */}
            <ContactUsTopArea />
            {/* -- contact area start -- */}
            <div className="tp-contact-us-ptb pb-160">
                <div className="container container-1480">
                    <div className="row">
                        <div className="col-lg-12">
                            <ContactInfoItem />
                        </div>
                    </div>
                </div>
            </div>
            {/* -- contact us area start -- */}
            <div className="tp-contact-us-form-ptb pb-160">
                <div className="container container-1480">
                    <div className="tp-contact-us-form-border">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-contact-us-form-wrapper">
                                    <div className="tp-contact-us-form-heading text-center mb-50">
                                        <span className="tp-contact-us-form-subtitle">Get In touch</span>
                                        <h4 className="tp-contact-us-form-title">how we can help you?</h4>
                                    </div>
                                    <div className="tp-contact-us-form-wrap">
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;