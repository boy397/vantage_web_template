import ProjectAreaThreeColumn from "@/components/project/ProjectAreaThreeColumn";
import ProjectBreadcrumb from "@/components/breadcrumb/ProjectBreadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Three Column - Digital Agency & Creative Portfolio",
};

const page = () => {
    return (
        <main>
            <ProjectBreadcrumb />
            <ProjectAreaThreeColumn />
        </main>
    );
};

export default page;