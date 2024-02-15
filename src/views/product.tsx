import * as React from "react";
import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
import { ProductView } from "../components";
import { IProduct } from "../components/product";

const Product: React.FC = () => {
  const product = useRouteLoaderData("product-detail") as IProduct;

  return (
    <React.Suspense
      fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
    >
      <Await resolve={product}>
        {(loadedProduct) => <ProductView {...loadedProduct} />}
      </Await>
    </React.Suspense>
  );
};

export default Product;

async function loadEvent(id: string) {
  const response = await fetch("http://localhost:3000/products/" + id);

  if (!response.ok) {
    throw json(
      {
        message: "Could not Fetch Event",
      },
      {
        status: 500,
      },
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({ request, params }: any) {
  const id = params.productId;

  return defer({
    product: await loadEvent(id),
  });
}
