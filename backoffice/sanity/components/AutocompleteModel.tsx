import { Autocomplete } from "@sanity/ui";
import React, { useCallback } from "react";
import { FormSetPatch, set, unset } from "sanity";

import { allModels } from "../../company/modelsAutos";

const AutocompleteModel = (props: { value: string; onChange: (callback: unknown) => void }) => {
    const { value, onChange } = props;
    const options = allModels.map((model) => {
        return {
            value: `${model.make}/${model.key}`,
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
            id="autocomplete-models"
            options={options}
            onChange={handleChange}
            placeholder={`${value ?? "Selecciona una marca"}`}
        />
    );
};

export default AutocompleteModel;
