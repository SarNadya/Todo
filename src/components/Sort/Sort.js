import React from "react";
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import styles from './Sort.module.css';

const Sort = ({value, id, sortItemsAlpha, sortItemsDate}) => {
    

    return (
    <div className={styles.wrap}>
            <p> Сортировать: </p>
            <button
                className={styles.button}
                value={value}
                onClick={() => sortItemsAlpha()}
                title='в алфавитном порядке'
            >
                <SortByAlphaOutlinedIcon/>
            </button>

            <button
                className={styles.button}
                id={id}
                onClick={() => sortItemsDate()}
                title='по дате добавления'
            >
                <ArrowDownwardSharpIcon/>
            </button>
        </div>
    );
};

export default Sort;
