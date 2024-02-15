import * as React from "react";
import {
  json,
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { styled } from "styled-components";
import { getAuthToken } from "../utils/auth";

interface IProps {
  method: any;
  event?: any;
}

const ProductForm: React.FC<IProps> = ({ method, event }) => {
  let data = useActionData() as { errors: []; message: "" };
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const cancelHandler = (): void => {
    navigate("..");
  };

  return (
    <Wrapper>
      <div>
        <Form method={method}>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => {
                return <li key={err}>{err}</li>;
              })}
            </ul>
          )}
          <p>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              defaultValue={event ? event.title : ""}
            />
          </p>
          <p>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              name="price"
              required
              defaultValue={event ? event.price : ""}
            />
          </p>
          <p>
            <label htmlFor="image">Image</label>
            <input
              id="image"
              type="text"
              name="image"
              required
              defaultValue={event ? event.image : ""}
            />
          </p>
          <p>
            <label htmlFor="colors">Colors</label>
            <input
              id="colors"
              type="text"
              name="colors"
              required
              defaultValue={event ? event.colors : ""}
            />
          </p>
          <p>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              name="company"
              required
              defaultValue={event ? event.company : ""}
            />
          </p>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              defaultValue={event ? event.description : ""}
            />
          </p>
          <p>
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              name="category"
              required
              defaultValue={event ? event.category : ""}
            />
          </p>
          <p>
            <label htmlFor="shipping">Free Shipping</label>
            <input type="checkbox" id="shipping" name="shipping" />
          </p>
          <div className="form__actions">
            <button
              type="button"
              onClick={cancelHandler}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Save"}
            </button>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ProductForm;

export async function action({ request, params }: any) {
  const method = request.method;
  const data = await request.formData();

  const productData = {
    name: data.get("name"),
    price: data.get("price"),
    image: data.get("image"),
    colors: data.get("colors").split(" "),
    company: data.get("company"),
    description: data.get("description"),
    category: data.get("category"),
    shipping: false,
  };

  let url = "http://localhost:3000/products/createProduct";

  if (method === "PATCH") {
    const productId = params._id.toString();
    // TODO: Add PATCH method to back-end
    url = "http://localhost:3000/products/" + productId;
  }

  const token = getAuthToken();
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify(productData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save product." }, { status: 500 });
  }

  return redirect("/profile");
}
