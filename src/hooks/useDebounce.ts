import React from 'react'
import { debounce } from 'lodash'

type TDebounceArgs = {
    value: string;
    setFn: (val: string) => void
}

export const useDebounce = () => {

    // const performDebounce: TDebounceFn = ({ setFn, value }) => {

    const debouncedSave = React.useRef(
        debounce(async ({ setFn, value }: TDebounceArgs) => {
            setFn(value);
        }, 300)
    ).current;

    return {debouncedSave}

}

