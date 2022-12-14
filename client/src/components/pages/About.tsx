import React from "react";
import { List } from "semantic-ui-react";
import Nav from "../../layout/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <List>
        <List.Item as="a">What is a FAQ?</List.Item>
        <List.Item as="a">Who is our user?</List.Item>
        <List.Item as="a">Where is our office located?</List.Item>
      </List>
    </>
  );
};

export default About;
