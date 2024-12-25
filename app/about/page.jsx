// pages/about.js

import React from 'react';
import styles from './about.module.css'; // Importing CSS module for styling

const About = () => {
    console.log("Hey where i am ? Server or Client Side ??");
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About AlStream</h1>
            <p className={styles.description}>
                Welcome to AlStream, your go-to source for the latest updates in AI innovations. 
                Our mission is to keep you informed about the rapid advancements in artificial intelligence 
                and how they impact our world.
            </p>
            <h2 className={styles.subtitle}>Latest Updates</h2>
            <ul className={styles.updatesList}>
                <li className={styles.updateItem}>
                    <strong>December 2024:</strong> New AI model achieves state-of-the-art results in natural language processing.
                </li>
                <li className={styles.updateItem}>
                    <strong>November 2024:</strong> Breakthrough in AI ethics leads to more transparent algorithms.
                </li>
                <li className={styles.updateItem}>
                    <strong>October 2024:</strong> AI technology now assists in climate change research, providing new insights.
                </li>
                {/* Add more updates as needed */}
            </ul>
            <h2 className={styles.subtitle}>Why Follow AI Innovations?</h2>
            <p className={styles.description}>
                Staying updated on AI innovations is crucial as they are transforming industries, 
                enhancing productivity, and shaping the future of technology. 
                Join us as we explore these exciting developments together!
            </p>
        </div>
    );
};

export default About;
