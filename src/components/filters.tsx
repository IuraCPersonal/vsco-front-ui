import { styled } from "styled-components";
import { getUniqueValues, formatPrice } from "../helpers";
import { useFilterContext } from "../contexts/filter";
import { FaCheck } from "react-icons/fa";

const Filters = (props: {}) => {
  const {
    filters: {
      text,
      price,
      min_price,
      max_price,
      category,
      company,
      color,
      shipping,
    },
    all_products,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form>
          <div className="form__control">
            <input
              type="text"
              name="text"
              placeholder="Search product..."
              className="search__input"
              onChange={updateFilters}
              value={text}
            />
          </div>
          <div className="form__control">
            <h5>category</h5>
            <div>
              {categories.map((item: any, index: number) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={updateFilters}
                    className={`${category === item.toLowerCase() ? "active" : null
                      }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* ------------------- */}
          <div className="form__control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              className="company"
              onChange={updateFilters}
            >
              {companies.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* ------------------- */}
          <div className="form__control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((item, index) => {
                if (item === "all") {
                  return (
                    <button
                      type="button"
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${color === "all" ? "all__btn active" : "all__btn"
                        }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    type="button"
                    key={index}
                    name="color"
                    data-color={item}
                    style={{ background: item }}
                    onClick={updateFilters}
                    className={`${color === item ? "color__btn active" : "color__btn"
                      }`}
                  >
                    {color === item ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/*------------------------------*/}
          <div className="form__control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/*------------------------------*/}
          <div className="form__control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
        </form>
        <button type="button" className="clear__btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form__control {
    margin-bottom: 1.25rem;

    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search__input {
    padding: 0.5rem;
    background: var(--light-goku);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    max-width: 100%;
  }

  .search__input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--light-backdrop);
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid var(--light-backdrop);
    }
  }

  .active {
    border-color: var(--light-backdrop);
  }

  .company {
    background: var(--light-goku);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    width: 100%;
    text-transform: capitalize;
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .color__btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--light-bulma);
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 0.5rem;
      color: var(--light-gohan);
    }
  }

  .all__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }

  .all__btn .active {
    text-decoration: underline;
  }

  .price {
    margin-bottom: 0.25rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }

  .clear__btn {
    background: var(--light-hit);
    color: var(--light-gohan);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
