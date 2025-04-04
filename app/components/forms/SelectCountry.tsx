'use client';

import Select from 'react-select';
import useCountries from '@/app/hooks/useCountries';
import { SSG_GET_INITIAL_PROPS_CONFLICT } from 'next/dist/lib/constants';

export type SelectCountryValue = {
    label: string;
    value: string;
}

interface SelectCountryProps{
    value?: SelectCountryValue;
    onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> =({
    value,
    onChange
}) => {
    const {getAll} = useCountries();

    return(
        <>
            <Select
                isClearable
                placeholder="Anywhere"
                options={getAll()}
                value={value}
                onChange={(value) => onChange (value as SelectCountryValue)}
            />
        
        
        </>
    )
}

export default SelectCountry;