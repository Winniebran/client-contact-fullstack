import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    color: var(--color-grey-3);
    font-weight: var(--font-weigth-bold);
    transition: 0.5s ease-in-out;

    &:hover {
        color: var(--color-secondary-1);
    }

`;
