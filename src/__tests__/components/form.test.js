import React from "react";
import { render } from "@testing-library/react"
import {Form} from "../../components/common";

jest.mock("react-router-dom")

describe("<Form />", () => {
    it('should render the <Form /> with data', function () {
        const {getByText,getByPlaceholderText, container } = render(
            <Form>
                <Form.Title>Register</Form.Title>

                <Form.Base>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            placeholder="Email Address"
                            type="email"
                            onChange={() => {}}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            placeholder="Password"
                            type="password"
                            onChange={() => {}}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            placeholder="Password"
                            type="password"
                            onChange={() => {}}
                        />
                    </Form.Group>

                    <Form.Submit type="submit" disabled>
                        Register
                    </Form.Submit>

                    <Form.Text>
                        Remember me? <Form.Link to="/login">Click here to Login</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>

                </Form.Base>
            </Form>
        );

        expect(getByText('Register')).toBeTruthy();
        expect(getByText('Register').disabled).toBeTruthy();
        expect(getByPlaceholderText('Email Address')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(
            getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")
        ).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Form /> with an error', () => {
        const {getByText, queryByText} = render(
            <Form>
                <Form.Error>Failed to create an account</Form.Error>
                <Form.Submit type="submit">Register</Form.Submit>
            </Form>
        );

        expect(getByText("Failed to create an account")).toBeTruthy();
        expect(queryByText("Register").disabled).toBeFalsy()
    });
});