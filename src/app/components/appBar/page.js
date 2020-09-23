import React from 'react';
//import Autocomplete from '..autocomplete';
import Autocomplete from '../autocomplete';

function Page(props) {
   const {
      text,
      suggestions,
      onChangeText,
      onChangeSelection,
  } = props;

return (
   <div>
        
       <nav>
        <Autocomplete 
        text={text}
        suggestions={suggestions}
        onChangeText={onChangeText}
        onChangeSelection={onChangeSelection}
        />
        
        </nav>
    </div>
 );
}

export default Page;