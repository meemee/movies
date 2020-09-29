import React, { ReactElement } from "react";
import { Input } from "antd";
import { ISearchBox } from "./types";

const { Search } = Input;

const SearchBox = ({placeholder, onSearch}: ISearchBox): ReactElement => {

    return (
        <Search
            placeholder={placeholder}
            onSearch={onSearch}
        />
    )
}

export default SearchBox;