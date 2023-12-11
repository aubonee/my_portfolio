
import React from 'react';

const SectionTitle2 = ({heading, subHeading}) => {
    return (
        <div>
        <section className="mx-auto text-center w-4/12 lg:w-1/2 my-8">
       
        <h3 className="text-5xl  font-bold">{heading}</h3>
        <p className="py-6 "> {subHeading} </p>
    </section>

       
    </div>
    );
};

export default SectionTitle2;