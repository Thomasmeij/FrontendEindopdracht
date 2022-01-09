import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { AuthProvider} from "../../contexts/AuthContext";
import {Login} from "../../pages/index";

//mock react-router and give useHistory an empty object
jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

//mock firebase and give the signIn function a resolved promise
const firebase = {
    auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() =>
            Promise.resolve("i am logged in")),
    })),
};

//Conditionals
describe("<Login />", () => {
    it("renders the Login page with a submit", async () => {

        const {getByTestId, getByPlaceholderText} = render(
                <Router>
                    {/*<AuthProvider value={firebase}>*/}
                        <Login />
                    {/*</AuthProvider>*/}
                </Router>
            )

        fireEvent.change(getByPlaceholderText("Email Address"), {
            target: {value: "example@development.com"},
        });
        fireEvent.change(getByPlaceholderText("Password"), {
            target: {value: "password"},
        });
        fireEvent.click(getByTestId("sign-in"));

        expect(getByPlaceholderText("Email Address").value).toBe("example@development.com")
        expect(getByPlaceholderText("Password").value).toBe("password")

    });
});


