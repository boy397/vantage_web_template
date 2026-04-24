import projectData from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

const DesignStudioPortfolio = () => {
    return (
        <div className="ds-portfolio-area">
            <div className="container-fluid gx-0">
                <div className="row gx-0">
                    {projectData.slice(40, 46).map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="ds-portfolio-item">
                                <div className="ds-portfolio-item-thumb">
                                    <Link className="tp-clip-anim" href="/project-details">
                                        <Image
                                            width={635}
                                            height={712}
                                            className="tp-anim-img "
                                            src={item.image}
                                            alt={item.title}
                                            data-animate="true"
                                        />
                                    </Link>
                                </div>
                                <div className="ds-portfolio-item-content tp_fade_anim" data-delay=".6">
                                    <div className="ds-portfolio-item-content-hide">
                                        <span>
                                            {item.year} · {item.category}
                                        </span>
                                        <h3 className="ds-portfolio-item-title">
                                            <Link className="tp-line-black" href="/project-details">
                                                {item.title}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesignStudioPortfolio;
