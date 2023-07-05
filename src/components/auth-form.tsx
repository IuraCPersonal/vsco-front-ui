import { Form, Link, useNavigation, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const AuthForm: React.FC = () => {
  let navigation = useNavigation();
  let [seachParams] = useSearchParams();

  let isLogin = seachParams?.get("mode") === "login";
  let isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="POST" className="auth__form">
        <h1>{isLogin ? "Log In" : "Create New Account"}</h1>
        <p>
          <label htmlFor="emai">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className="auth__actions">
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create New User" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  min-height: 60vh;
  min-width: 50rem;

  .auth__form {
    flex-grow: 1;
    max-width: 40rem;
    margin: 2rem auto;
  }

  .auth__form label,
  .auth__form input,
  .auth__form textarea {
    display: block;
    width: 100%;
  }

  .auth__form input,
  .auth__form textarea {
    font: inherit;
    padding: 0.25rem;
  }

  .auth__actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
  }

  .auth__actions button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    background-color: var(--clr-grey-4);
    color: var(--clr-white);
    border: none;
  }

  .auth__actions a {
    text-decoration: none;
    background-color: transparent;
    color: var(--clr-grey-3);
  }

  .auth__actions button:hover {
    background-color: var(--clr-grey-5);
  }

  .auth__actions a:hover {
    text-decoration: underline;
  }
`;

export default AuthForm;
