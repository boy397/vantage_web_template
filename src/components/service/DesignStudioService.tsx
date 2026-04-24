import DesignStudioServiceItem from './subComponents/DesignStudioServiceItem';
import servicesData from '@/data/serviceData';
import { ButtonArrowIcon } from '@/svg';
import Link from 'next/link';

const DesignStudioService = () => {
    return (
        <div className="ds-service-ptb pt-150 pb-130">
            <div className="container container-1510">
                {/* Header Row */}
                <div className="row align-items-end">
                    <div className="col-xxl-6 col-lg-8">
                        <div className="ds-service-heading-wrap mb-80">
                            <h3 className="tp-section-title tl-unbounded tp-split-title">
                                The services we <br />
                                provide make
                            </h3>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-4">
                        <div
                            className="ds-service-btn mb-80 text-lg-end tp_fade_anim"
                            data-delay=".4"
                        >
                            <Link className="tp-btn-green btn-h-60 tp-btn-anim"
                                href="/service"
                            >
                                <div className="tp-btn-text">See All Services</div>
                                <span>
                                    <ButtonArrowIcon />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Services List */}
                <div className="row">
                    {servicesData.slice(39, 43).map((service, index) => (
                        <DesignStudioServiceItem {...service} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesignStudioService;
