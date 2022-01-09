import React from "react";
import {
    Container,
    Base,
    Error,
    Title,
    Text,
    TextSmall,
    Control,
    Group,
    Label,
    Submit,
} from "./FormStyles";

export default function Form( {children, ...restProps}) {
    return <Container { ...restProps}>
        {children}
    </Container>;
}

Form.Base = function FormBase({ children, ...restProps}){
    return <Base {...restProps}> {children} </Base>;
};

Form.Error = function FormError({ children, ...restProps}){
    return <Error {...restProps}> {children} </Error>;
};

Form.Title = function FormTitle({ children, ...restProps}){
    return <Title {...restProps}> {children} </Title>;
};

Form.Text = function FormText({ children, ...restProps}){
    return <Text {...restProps}> {children} </Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps}){
    return <TextSmall {...restProps}> {children} </TextSmall>;
};

Form.Control = function FormControl({ children, ...restProps}){
    return <Control {...restProps}>{children}</Control>;
};

Form.Submit = function FormTextSmall({ children, ...restProps}){
    return <Submit {...restProps}> {children} </Submit>;
};

Form.Group = function FormTextSmall({ children, ...restProps}){
    return <Group {...restProps}> {children} </Group>;
};

Form.Label = function FormTextSmall({ children, ...restProps}){
    return <Label {...restProps}> {children} </Label>;
};




