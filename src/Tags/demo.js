import React from 'react';

import Tags from './index';


const typeOfTags = 'Key Features';
const keyFeaturesList = [
  { name: 'Land' },
  { name: 'Rural' },
  { name: 'Balcony' },
  { name: 'Conservatory' },
  { name: 'Wood flooring' },
  { name: 'Bath tub' },
  { name: 'Porte/Security' },
  { name: 'En suite' },
  { name: 'Fireplace' },
];

function handleSelectedTags(selectedTags) {
  console.log('Selected tags: ', selectedTags);
}

function TagsDemo() {
  return (
    <div>
      <h5>{typeOfTags}</h5>
      <Tags
        suggestedTags={keyFeaturesList}
        placeHolderText="Add new feature"
        handleSelectedTags={handleSelectedTags}
        minChar={3}
        maxChar={30}
        minTags={3}
        maxTags={10}
        typeOfTags={typeOfTags}
      />
    </div>
  );
}

export default TagsDemo;
