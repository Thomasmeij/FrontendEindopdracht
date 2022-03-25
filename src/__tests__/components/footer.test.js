import React from "react";
import { render } from "@testing-library/react"
import {Box, Column, Container, FooterLink, Heading, Row} from "../../components/common/footer/FooterStyles";

describe("<Footer />", () => {
        it('should render the <Footer /> with data', function () {
            const { getByText } = render(
                <Box>
                    <Container>
                        <Row>
                            <Column>
                                <Heading>My Account</Heading>
                                <FooterLink href="/login">Sign in</FooterLink>
                                <FooterLink href="/signup">Register</FooterLink>
                            </Column>
                            <Column>
                                <Heading>Help</Heading>
                                <FooterLink href="#">Contact info</FooterLink>
                                <FooterLink href="#">FAQ</FooterLink>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Heading>About Us</Heading>
                                <FooterLink href="#">Media</FooterLink>
                                <FooterLink href="#">Our Story</FooterLink>
                            </Column>
                            <Column>
                                <Heading>Legal Stuff</Heading>
                                <FooterLink href="#">Terms of Use</FooterLink>
                                <FooterLink href="#">Terms of Service</FooterLink>
                            </Column>
                        </Row>
                        <Heading>
                            © 2021 Netflix Inc . All Rights reserved
                        </Heading>
                    </Container>
                </Box>
            );

            expect(getByText("My Account")).toBeTruthy()
            expect(getByText("Help")).toBeTruthy()
            expect(getByText("About Us")).toBeTruthy()
            expect(getByText("My Account")).toBeTruthy()
            expect(getByText("Legal Stuff")).toBeTruthy()
            expect(getByText("My Account")).toBeTruthy()
            expect(getByText("© 2021 Netflix Inc . All Rights reserved")).toBeTruthy()
        });
})