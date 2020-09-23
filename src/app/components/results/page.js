import React, { Fragment } from 'react';
import AppBar from '../appBar';

 function Page(props) {
     const {
        tasks,
         results,
         goTo,
     } = props;

  const idEmpty = results.length === 0;
  const nn = ' ' ;

     return (
         <Fragment>
             <AppBar />
             <div className="row-lg ml-auto"  >
             <button  type="button" className="btn btn-outline-secondary ml-auto"  style={{ width: '100%' }} >
             Resultado
                 {
                     idEmpty 
                     ? nn
                    : results.map(item =>
                        //onclick={() => goto(`/details/${item.id}`)}
                        <div
                        key={item.id}
                        onClick={() => goTo(`/task/${item.id}`)}>
                          {/* tasks.name={item.name}  */}
                          <div> {item.name} </div>
                        </div>

                        )
                 }
             </button>
             </div>
         </Fragment>
     );
 }
export default Page;
//

//<button type="button" class="btn btn-outline-secondary">Secondary</button>