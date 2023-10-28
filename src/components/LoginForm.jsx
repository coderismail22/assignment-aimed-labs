import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import PasswordInputWithIcon from "./PasswordInputWithIcon";

const FormWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Register =  styled.p`
font-weight: bold;
font-size: 12px;
text-align: center;
`;

const LoginText = styled.h1`
  text-align: center;
`;
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%; /* Adjust the width as per your design */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 14px;
`;

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

const Underline = styled.span`
  color: #bb792d;
  text-decoration: underline;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #1c7cca;
  color: white;
  padding: 10px 100px; /* Adjust padding to control the button's size */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  max-width: 100%; /* Set maximum width to prevent overflowing */

  &:hover {
    background-color: #1c4e99;
  }
`;


const LoginForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Enable onChange mode to validate form on change
    defaultValues: {
      rememberMe: false,
      termsAndConditions: false,
    },
  });

  const onSubmit = (data) => {
    // Check if both checkboxes are selected
    if (data.termsAndConditions) {
      // Alert after successful submission
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Display error message if checkboxes are not selected
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must agree to the 'Terms and Conditions' to proceed.",
      });
    }
  };

  return (
    <FormWrapper>
      <LoginText>Login</LoginText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Email</Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => <Input {...field} placeholder="Enter Login ID"/>}
          />
          <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            }}
            render={({ field }) => 
              <PasswordInputWithIcon
                onClick={() => {
                  field.onChange(); // This will trigger re-render and update the type

                }}
                {...field}

              />
            }
          />
          <ErrorMessage>
            {errors.password && errors.password.message}
          </ErrorMessage>
        </FormGroup>
        <StyledCheckboxLabel>
          <input
            type="checkbox"
            id="rememberMeCheckbox"
            {...register("rememberMe")}
          />

          <label htmlFor="rememberMeCheckbox"> Remember Me</label>
        </StyledCheckboxLabel>
        <StyledCheckboxLabel>
          <input
            type="checkbox"
            id="termsCheckbox"
            {...register("termsAndConditions")}
          />

          <label htmlFor="termsCheckbox">
            Agree to the <Underline as='a'>Terms and Conditions</Underline>
          </label>
        </StyledCheckboxLabel>
        <SubmitButton type="submit">Submit</SubmitButton>
        <Register>Don't Have An Account ? <Underline as='a'>Register Here.</Underline></Register>
      </form>
    </FormWrapper>
  );
};

export default LoginForm;
