import React from 'react';
import { render} from "@testing-library/react";
import {Home} from "../../pages/index";

jest.mock("react-router");

describe("homepage", () => {
    test("renders the homepage", () => {
        const {getByText, getByPlaceholderText} = render(<Home/>);

        expect(getByText("Unlimited films, TV")).toBeTruthy();
        expect(getByText("Programmes and more.")).toBeTruthy();
        expect(getByText("Watch anywhere. Cancel anytime.")).toBeTruthy();
        expect(getByText("Ready to watch? Enter your email to create or restart your membership")).toBeTruthy();
        expect(getByPlaceholderText("Email address")).toBeTruthy();
    });
});
