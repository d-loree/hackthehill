import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext/authContext';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import './home.css';

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <div className="dashboard-container">
            <h2>Welcome, {currentUser && currentUser.displayName ? currentUser.displayName : currentUser.email }!</h2>
            <div className="card-container">
                <div className="card">
                    <h3>Inbox</h3>
                    <p>You have X pending feedback forms to fill out.</p>
                    <button onClick={() => window.location.href = '/inbox'}>View Inbox</button>
                </div>
                <div className="card">
                    <h3>Request Feedback</h3>
                    <button>Request Feedback</button>
                </div>
                <div className="card">
                    <h3>Your Team</h3>
                    <button onClick={() => window.location.href = '/team'}>View Team</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
