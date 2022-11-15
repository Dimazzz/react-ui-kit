import React, { FC, useId } from 'react';
import { CheckboxProps } from './models';
import {
    StyledCheckboxContainer,
    StyledCheckboxTitle,
    StyledCheckbox,
    StyledCheckboxLabel,
    StyledCheckboxInput,
} from './styled';

const Checkbox: FC<CheckboxProps> = (props) => {
    const { label, error } = props;
    const id = props.id || useId();

    return (
        <StyledCheckboxLabel htmlFor={id}>
            <StyledCheckboxContainer>
                <StyledCheckboxInput {...props} id={id} type='checkbox' />
                <StyledCheckbox error={error} />
                {label && <StyledCheckboxTitle>{label}</StyledCheckboxTitle>}
            </StyledCheckboxContainer>
        </StyledCheckboxLabel>
    );
};

export default Checkbox;
