import ProductDetailsMain from '@/components/product/ProductDetailsMain';
import { PageParamsProps } from '@/types/custom-dt';
import productData from '@/data/productData';

export async function generateStaticParams() {
    return productData.map((product) => ({
        id: product.id.toString(),
    }));
}

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const product = productData.find((item) => item.id == Number(id));
    return {
        title: product?.title ? product.title : "Product Details - Digital Agency & Creative Portfolio",
    };
}

export default async function ProductDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <ProductDetailsMain id={id} />
    );
}
