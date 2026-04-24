import DesignStudioTestimonial from "@/components/testimonial/DesignStudioTestimonial";
import DesignStudioTextSlider from "@/components/text-slider/DesignStudioTextSlider";
import BusinessConsultingBrand from "@/components/brand/BusinessConsultingBrand";
import DesignStudioPortfolio from "@/components/portfolio/DesignStudioPortfolio";
import DesignStudioService from "@/components/service/DesignStudioService";
import DesignStudioPrice from "@/components/price/DesignStudioPrice";
import DesignStudioAbout from "@/components/about/DesignStudioAbout";
import DesignStudioBlog from "@/components/blog/DesignStudioBlog";
import DesignStudioHero from "@/components/hero/DesignStudioHero";
import DesignStudioTeam from "@/components/team/DesignStudioTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Design Studio - Digital Agency & Creative Portfolio",
};
const page = () => {
    return (
        <main>
            <DesignStudioHero />
            <DesignStudioTextSlider />
            <DesignStudioService />
            <DesignStudioPortfolio />
            <DesignStudioAbout />
            <DesignStudioTeam />
            <DesignStudioPrice />
            <DesignStudioTestimonial />
            <BusinessConsultingBrand />
            <DesignStudioBlog />
        </main>
    );
};

export default page;