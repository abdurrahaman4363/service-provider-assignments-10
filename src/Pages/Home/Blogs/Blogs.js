import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center'>Difference between authorization and authentication???</h2>
            <p>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.</p>
            <h3 className='text-center'>Why are you using firebase??? What other options do you have to implement authentication ???</h3>
            <p>We use firebase to build our authentication system and hosting our website. Parse.Open Source Firebase alternatives, Parse is a complete open-source application stack and backend framework that offers a collection of tools and features to help us develop our apps.And other is Back4App ,AWS Amplify,Kuzzle,Couchbase,NativeScript,RxDB,Flutter.</p>
            <h2 className='text-center'>What other services does firebase provide other than authentication???</h2>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Some of the standout features you will find in Firebase include file storage, hosting, notifications, real-time databases, push messages, authentication, and analytics.</p>
        </div>
    );
};

export default Blogs;