import React from "react";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';

const Sort = ({value, id, sortItemsAlpha, sortItemsDate}) => {
    

    return (
        <div>
            <p> Сортировать </p>
            <button
                value={value}
                onClick={() => sortItemsAlpha()}
            >
                <SortByAlphaIcon/>
            </button>

            <button
                id={id}
                onClick={() => sortItemsDate()}>
                <ArrowDownwardSharpIcon/>
            </button>
        </div>
    );
};

export default Sort;
