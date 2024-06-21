import React from 'react';

const categories = [
'General',
'Business',
'Entertainment',
'Health',
'Science',
'Sports',
'Technology',
];

const CategoryFilter = ({ category, setCategory }) => {
return (
    <div>
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
        <option key={cat} value={cat}>
            {cat}
        </option>
        ))}
    </select>
    </div>
);
};

export default CategoryFilter;
