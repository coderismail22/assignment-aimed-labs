// Font Awesome Added

import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 10px; /* Added right padding for the icon */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative; /* Added position relative for positioning the icon */
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const PasswordInputWithIcon = forwardRef(({ type, value, onChange }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
      <PasswordInput
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        ref={ref}
        placeholder="Enter Password"

      />
      <EyeIcon onClick={handleTogglePassword}>
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
      </EyeIcon>
    </InputContainer>
  );
});

export default PasswordInputWithIcon;