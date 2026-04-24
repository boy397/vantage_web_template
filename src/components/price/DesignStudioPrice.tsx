"use client";
import DesignStudioPricingCard from './subComponents/DesignStudioPricingCard';
import { pricingData } from '@/data/pricingData';
import { PricingPlan } from '@/types/custom-dt';
import React, { useState } from 'react';

const PricingToggle: React.FC<{
    isYearly: boolean;
    onToggle: (isYearly: boolean) => void;
}
> = ({ isYearly, onToggle }) => {
    return (
        <div className="tp-pricing-nav-wrapper cr-nav p-relative mb-70">
            <label
                className={`tp-toggler-pre ${!isYearly ? 'is-active' : ''}`}
                onClick={() => onToggle(false)}
            >
                Monthly
            </label>
            <div className="tp-toggle-input-wrap">
                <input
                    type="checkbox"
                    id="tp-switcher-input"
                    className="tp-input-check"
                    checked={isYearly}
                    onChange={(e) => onToggle(e.target.checked)}
                />
                <b className="tp-switch-toggle"></b>
            </div>
            <label
                className={`tp-toggler-post ${isYearly ? 'is-active' : ''}`}
                onClick={() => onToggle(true)}
            >
                Yearly
            </label>
        </div>
    );
};

const PricingSection: React.FC<{ plans: PricingPlan[] }> = ({ plans }) => {
    return (
        <div className="row">
            {plans.map((plan) => (
                <DesignStudioPricingCard key={plan.id} plan={plan} />
            ))}
        </div>
    );
};

// Main Component
const DesignStudioPrice: React.FC = () => {
    const [isYearly, setIsYearly] = useState<boolean>(true);

    return (
        <div className="ds-price-area pt-150 pb-90" style={{ backgroundColor: "#010103" }}>
            <div className="container container-1510">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ds-price-heading text-center mb-70">
                            <h3 className="tp-section-title tl-unbounded tp-split-title">
                                Special offer! choose <br />
                                your pack today
                            </h3>
                        </div>
                    </div>

                    <PricingToggle
                        isYearly={isYearly}
                        onToggle={setIsYearly}
                    />
                </div>

                <div className={`tp-tab-item ${!isYearly ? 'tp-tab-hide' : ''}`}>
                    <PricingSection plans={pricingData.yearly} />
                </div>

                <div className={`tp-tab-item ${isYearly ? 'tp-tab-hide' : ''}`}>
                    <PricingSection plans={pricingData.monthly} />
                </div>
            </div>
        </div>
    );
};

export default DesignStudioPrice;