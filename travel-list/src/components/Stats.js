import React from 'react';

export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  if (!items.length)
    return (
      <p className="stats">
        <em>Start to your trip by adding items🚄</em>
      </p>
    );
  else
    return (
      <footer className="stats">
        <em>
          {numItems === packedItems
            ? 'You got everything, Ready to Go!✈'
            : ` You have ${numItems} items on your list, and you have packed${' '}
        ${packedItems} (${((packedItems / numItems) * 100).toFixed(2)}%)`}
        </em>
      </footer>
    );
}
