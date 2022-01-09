import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { AuthProvider} from "../../contexts/AuthContext";
import {Signup} from "../../pages/index";

//mock react-router and give useHistory an empty object
jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

//mock firebase and give the signUp function a resolved promise
const firebase = {
    auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() =>
            Promise.resolve({user: ""})
        ),
    })),
};

//Conditionals
describe("<SignUp />", () => {
    it("renders the Signup page with a submit", async () => {

        const {getByTestId, getByPlaceholderText} = render(
            <Router>
                {/*<AuthProvider value={firebase}>*/}
                <Signup />
                {/*</AuthProvider>*/}
            </Router>
        )

        fireEvent.change(getByPlaceholderText("Email Address"), {
            target: {value: "example@development.com"},
        });
        fireEvent.change(getByPlaceholderText("Password"), {
            target: {value: "password"},
        });
        fireEvent.click(getByTestId("sign-up"));

        expect(getByPlaceholderText("Email Address").value).toBe("example@development.com")
        expect(getByPlaceholderText("Password").value).toBe("password")

    });
});


