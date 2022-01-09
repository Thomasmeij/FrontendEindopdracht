import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading
} from "./FooterStyles";

function Footer () {

    return(
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
    )
}

export default Footer;
