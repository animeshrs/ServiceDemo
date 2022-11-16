import React, { useState } from "react";
import { Form, Checkbox, Button, Input } from "semantic-ui-react";
import agent from "../../apiAgent";
import FormHeader, { FormHeaderProps } from "../../layout/FormHeader";
import { UserFormValues } from "../../models/User";
import { useNavigate } from "react-router-dom";

const Register = ({ headerText }: FormHeaderProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [token, setToken] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  let navigate = useNavigate();

  const checkboxClickHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAgreedToTerms((x) => !x);
  };

  const buttonSubmitHandler = (e: any) => {
    e.preventDefault();

    var postData: UserFormValues = {
      email: email,
      password: password,
      username: username,
      displayName: displayName,
    };

    try {
      agent.Account.register(postData)
        .then((data) => setToken(data.token))
        .catch((err) => console.log(err));
    } catch (error) {
      throw error;
    }
  };

  if (token.length > 0) {
    window.localStorage.setItem("jwtToken", token);
    navigate("/home");
    return <h1>Login successful</h1>;
  }

  return (
    <>
      <FormHeader headerText={headerText} />
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <Input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              placeholder="Enter your email "
            />
          </Form.Field>

          <Form.Field>
            <Input
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              placeholder="Enter your password"
              type="password"
            />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <Input
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required={true}
              placeholder="Enter your username"
            />
          </Form.Field>
          <Form.Field>
            <Input
              name="displayName"
              onChange={(e) => setDisplayName(e.target.value)}
              required={true}
              placeholder="Enter your display name"
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={checkboxClickHandler}
          />
        </Form.Field>
        <Button
          secondary
          type="submit"
          onClick={buttonSubmitHandler}
          disabled={!agreedToTerms}
        >
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
