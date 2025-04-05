import {Autocomplete} from '@sanity/ui'
import React, {useCallback} from 'react'
import {set, unset} from 'sanity'

import {manufacturers} from '../../company/manufacturers'

const AutocompleteManufacturer = (props: {value: string; onChange: (callback: unknown) => void}) => {
    const {value = '', onChange} = props
    const options = manufacturers.map((make) => {
        return {
            value: `${make.key}`,
        }
    })

    const handleChange = useCallback(
        (currentValue: string) => {
            onChange(currentValue ? set(currentValue) : unset())
        },
        [onChange],
    )

    return (
        <Autocomplete
            id="autocomplete-manufacturer"
            options={options}
            onChange={handleChange}
            placeholder={`${value ?? 'Selecciona una marca'}`}
        />
    )
}

export default AutocompleteManufacturer
