import * as React from "react";
import { styled } from "styled-components";
import { useFilterContext } from "../contexts/filter";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

const Sort: React.FC = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn__container">
        <button
          onClick={setGridView}
          className={`${grid_view ? "active" : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? "active" : null}`}
        >
          <FaListUl />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form className="sort__form">
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="sort__input"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 1.5rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;

    .btn__container {
      width: 50px;
    }

    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  p {
    font-size: 0.8em;
    text-transform: capitalize;
    margin-bottom: 0;
    border-radius: 9999px;
    background: var(--light-goku);
    padding: 0.5rem 1.5rem;
  }

  .btn__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
  }

  button {
    background: transparent;
    border: transparent;
    color: var(--light-bulma);
    width: 1.5rem;
    border-radius: var(--radius);
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: var(--light-ghost);
      color: var(--light-piccolo);
    }
  }

  svg {
    font-size: 1rem;
  }

  .active {
    background: var(--light-piccolo);
    color: var(--light-gohan);
  }

  .sort__form {
    display: flex;
    gap: 1rem;
    align-items: center;

    label {
      color: var(--light-trunks);
    }
  }

  .sort__input {
    border-color: transparent;
    background: var(--light-gohan);
    color: var(--light-trunks);
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--light-beerus);
    border-radius: 8px;
    transition: var(--transition);

    &:hover {
      box-shadow: var(--light-shadow);
    }
  }

  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
