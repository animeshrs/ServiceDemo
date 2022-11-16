import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import FormHeader, { FormHeaderProps } from "../../layout/FormHeader";
import agent from "../../apiAgent";
import { UserFormValues } from "../../models/User";
import { useNavigate } from "react-router-dom";

const Login = ({ headerText }: FormHeaderProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();

    const postData: UserFormValues = {
      email: email,
      password: password,
    };

    try {
      agent.Account.login(postData)
        .then((data) => {
          setToken(data.token);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      throw error;
    }
  };

  if (token.length > 0) {
    window.localStorage.setItem("jwtToken", token);
    navigate("/home");
    return <h1>Registration successful</h1>;
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormHeader headerText={headerText} />
        <Form.Group widths="equal">
          <Form.Field>
            <Input
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </Form.Field>
          <Form.Field>
            <Input
              className="input"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required={true}
              placeholder="Enter your password"
            />
          </Form.Field>
        </Form.Group>
        <Button primary type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
