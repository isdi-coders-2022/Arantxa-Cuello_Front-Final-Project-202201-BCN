import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/thunks/userThunk";
import styled from "styled-components";
import { primary } from "../../styles/globalStyles";

const Login = (): JSX.Element => {
  const blankForm = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankForm);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [(event as React.ChangeEvent<HTMLInputElement>).target.id]:
        event.target.value,
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetForm = () => {
    setFormData(blankForm);
  };

  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();
    await dispatch(loginUserThunk(formData));
    resetForm();
    navigate(`/my-sessions`);
  };

  return (
    <>
      <Log className="container-form">
        <form noValidate autoComplete="off" onSubmit={submitForm}>
          <div className="form-data">
            <label htmlFor="user"></label>{" "}
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={changeData}
              value={formData.username}
            />
          </div>
          <div className="form-data">
            <label htmlFor="password"></label>{" "}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={changeData}
              value={formData.password}
            />
          </div>

          <div className="logInButton">
            <button type="submit">Log in</button>
          </div>

          <div className="registerButton">
            <Link to={`users/register`}>
              <p>Are you not registered yet? Create an account HERE.</p>
            </Link>
          </div>
        </form>
      </Log>
    </>
  );
};

const Log = styled.main`
  * {
    box-sizing: border-box;
  }
  .container-form {
    background: #f6f5f7;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    background-color: #e4dada;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    text-align: center;
  }
  .form-data {
    text-align: center;
  }
  button {
    border-radius: 20px;
    border: 1px solid #57a9ec;
    background-color: ${primary};
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .logInButton {
    text-align: center;
    margin-top: 10px;
  }
  p {
    padding: 20px;
  }
`;
export default Login;
