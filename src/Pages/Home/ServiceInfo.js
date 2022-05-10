import React from 'react';
import treatment from '../../assets/images/treatment.png';
import CommonBtn from '../Shared/CommonBtn';

const ServiceInfo = () => {
    return (
        <div class="hero min-h-screen py-15">
            <div class="hero-content flex-col lg:flex-row gap-10">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care,<br></br> on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <CommonBtn>Get Started</CommonBtn>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;