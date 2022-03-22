import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUserThunk } from "../redux/thunks/userThunk";
import { primary } from "../styles/globalStyles";

const RegisterPage = (): JSX.Element => {
  const blankForm = {
    name: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();
    await dispatch(registerUserThunk(formData));
    navigate("/users/login");
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [(event as React.ChangeEvent<HTMLInputElement>).target.id]:
        event.target.value,
    });
  };
  return (
    <Log className="container-register">
      <h3>Register HERE.</h3>
      <form noValidate autoComplete="off" onSubmit={submitForm}>
        <div className="form-data">
          <label htmlFor="name"></label>{" "}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={changeData}
            value={formData.name}
          />
        </div>
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
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            onChange={changeData}
            value={formData.password}
          />
        </div>
        <div className="registerButton">
          <button type="submit">Register</button>
        </div>
      </form>
    </Log>
  );
};
const Log = styled.main`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  .registerButton {
    text-align: center;
    margin-top: 10px;
  }
  p {
    padding: 20px;
    font-size: 14px;
  }
  h3 {
    padding: 20px;
    color: ${primary};
  }
`;
export default RegisterPage;
