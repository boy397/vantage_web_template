import { getCurrentYear } from '@/utils/getCurrentYear';
import Link from 'next/link';

const DesignSFooterCopyright = () => {
    return (
        <div className="ds-copyright-wrap">
            <div className="row">
                <div className="col-lg-6">
                    <div className="tp-copyright-text">
                        <p>{getCurrentYear()} <Link className="tp-line-white" href="https://themeforest.net/user/aqlova/">Aqlova ©</Link> All rights reserved</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tp-copyright-menu text-lg-end">
                        <Link className="tp-hover-line-white" href="#">terms & Conditions</Link>
                        <Link className="tp-hover-line-white" href="#">Privacy Policy</Link>
                        <Link className="tp-hover-line-white" href="#">Legal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignSFooterCopyright;