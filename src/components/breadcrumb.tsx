import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaHome, FaAngleRight } from "react-icons/fa";

interface IProps {
  product?: string;
  title: string;
}

const Breadcrumb: React.FC<IProps> = ({ product, title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <p>
          <Link to="/">
            <FaHome />
            <span>Home</span>
          </Link>
          {product && (
            <Link to="/shop">
              <FaAngleRight />
              <span>{product}</span>
            </Link>
          )}
          <Link style={{ pointerEvents: "none" }} to="/">
            <FaAngleRight />
            <span>{title}</span>
          </Link>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--light-trunks);
  text-transform: capitalize;

  a,
  p {
    display: flex;
    align-items: center;
  }

  a,
  span {
    display: flex;
    gap: 0.5rem;
  }

  a {
    color: var(--light-trunks);
    padding: 0.5rem;
    transition: var(--transition);

    svg {
      font-size: 1rem;
    }
  }

  a:hover {
    color: var(--light-backdrop);
  }
`;

export default Breadcrumb;
