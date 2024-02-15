import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";

const AuthForm: React.FC = () => {
  let data = useActionData() as { errors: []; message: "" };
  let navigation = useNavigation();
  let [seachParams] = useSearchParams();

  let isLogin = seachParams?.get("mode") === "login";
  let isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="col">
        <Form method="POST" className="auth__form" autoComplete="off">
          <div className="form__header">
            <h3>{isLogin ? "Welcome back" : "Join now"}</h3>
            <p>
              {isLogin
                ? "Welcome back! Please enter your credentials."
                : "Join now! Complete the form below."}
            </p>
          </div>
          <div className="auth__inputs">
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err: any) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
            {data && data.message && <p className="error">{data.message}</p>}
            {!isLogin && (
              <p>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </p>
            )}
            <p>
              <label htmlFor="email">Username</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </p>
          </div>
          <div className="auth__actions">
            <button disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : isLogin ? "Sign In" : "Sign Up"}
            </button>
            <button disabled={true}>
              <FcGoogle /> Continue with Google
            </button>
            <p>
              Don't have an account?{" "}
              <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                {isLogin ? "Sign Up" : "Login"}
              </Link>
            </p>
          </div>
        </Form>
      </div>{" "}
      <div className="background col">
        <div className="shape"></div>
        <div className="blur"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;

  .col {
    flex-grow: 1;
    flex-basis: 50%;
    height: 100vh;

    display: grid;
    place-items: center;

    &:first-child {
      background-color: var(--light-gohan);
    }

    &:last-child {
      background-color: var(--light-goku);
      position: relative;
    }
  }

  .background .shape {
    height: 300px;
    width: 300px;
    position: absolute;
    border-radius: 50%;
    top: calc(50% - 150px);
    left: calc(50% - 150px);
    background: linear-gradient(to right, #8e2de2, #4a00e0);
  }

  .background .blur {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    background-color: rgba(245, 245, 245, 0.13);
    backdrop-filter: blur(10px);
  }

  .auth__form {
    width: 90%;
    max-width: 600px;
    min-height: 600px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .auth__form label,
  .auth__form input,
  .auth__form textarea {
    display: block;
    /* margin-top: 30px; */
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }

  .auth__form input,
  .auth__form textarea {
    display: block;
    height: 50px;
    width: 100%;
    background: transparent;
    color: var(--light-backdrop);
    border: 2px solid var(--light-beerus);
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 0.5rem;
    font-size: 14px;
    font-weight: 500;

    &::placeholder {
      color: var(--light-trunks);
    }

    &:focus {
      outline: none !important;
      box-shadow: var(--light-shadow);
      transition: var(--transition);
    }
  }

  .auth__actions {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .auth__actions button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
    border: transparent;
    padding: 15px 0;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);

    &:first-child {
      background-color: var(--light-piccolo);
      color: var(--light-gohan);

      &:hover {
        background-color: var(--light-piccolo-hover);
      }
    }

    svg {
      font-size: 1.5rem;
    }
  }

  .auth__actions a {
    flex-grow: 1;
    text-decoration: none;
    text-align: right;
    background-color: transparent;
    color: var(--light-piccolo);
  }

  .auth__actions button:hover {
    box-shadow: var(--light-shadow);
    transition: box-shadow;
  }

  .auth__actions a:hover {
    text-decoration: underline;
  }

  .error {
    font-size: 0.8em;
    color: var(--light-gohan);
    border-radius: var(--radius);
    background-color: hsla(360, 71%, 66%, 0.47);
    padding: 2rem 1rem;
    border-left: 5px solid hsla(360, 71%, 66%, 1);
    /* margin-top: 1rem; */
  }

  @media (max-width: 1024px) {
    .col {
      &:last-child {
        display: none;
      }
    }

    .form__header {
      text-align: center;
    }
  }
`;

export default AuthForm;
