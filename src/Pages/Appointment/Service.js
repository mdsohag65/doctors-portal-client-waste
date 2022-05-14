import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <section className=''>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='text-center'>
                        <h2 className="text-xl font-bold text-primary">{name}</h2>
                        <p>
                            {
                                slots.length > 0
                                    ? <span>{slots[0]}</span>
                                    : <span className='text-red-500 font-semibold'>No Service Available</span>
                            }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    </div>
                    <div className="card-actions justify-center">

                        <label
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-sm btn-secondary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;