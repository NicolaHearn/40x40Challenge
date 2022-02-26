import React from 'react';
import FilterButton from './FilterButton';
import './FilterBar.css';
import FilterIcon from './FilterIcon';

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <FilterIcon />
            <FilterButton />
            <FilterButton />
            <FilterButton />
        </div>
    )
}

export default FilterBar;