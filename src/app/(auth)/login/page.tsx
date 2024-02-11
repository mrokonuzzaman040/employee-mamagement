'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const page = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};

export default page;