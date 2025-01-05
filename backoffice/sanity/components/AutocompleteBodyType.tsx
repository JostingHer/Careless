import { Autocomplete } from "@sanity/ui";
import React, { useCallback } from "react";
import { set, unset } from "sanity";

import { bodyTypesAutos } from "../../company/bodyTypesAutos";

const AutocompleteBodyType = (props: { value: string; onChange: (callback: unknown) => void }) => {
    const { value, onChange } = props;
    const options = bodyTypesAutos.map((model) => {
        return {
            value: `${model.key}`,
        };
    });

    const handleChange = useCallback(
        (currentValue: string) => {
            onChange(currentValue ? set(currentValue) : unset());
        },
        [onChange],
    );
    return (
        <Autocomplete
            id="autocomplete-body-types"
            options={options}
            onChange={handleChange}
            placeholder={`${value ?? "Selecciona una tipo de carrocería"}`}
        />
    );
};

export default AutocompleteBodyType;
