import React, { Fragment } from 'react';
import AppBar from '../appBar';


 function Page(props) {
    const {
        goTo,
        currentItem,
    } = props;
     return (
         <Fragment>
               <AppBar />
               <div className="">
                    {currentItem ?
                    <Fragment>
                        <div>
                            {currentItem.name}
                        </div>
                       
                    </Fragment>
                    :
                    <p>buscando...</p>
                    }
                     {/* <Button
                        color="primary"
                        onClick={() => goTo('/results')}
                    >
                       
                    </Button> */}
                    <div >
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
             </div>
               </div>
         </Fragment>
     );
 }
export default Page;