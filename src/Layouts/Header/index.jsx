import React from 'react';
import styles from './styles.module.styl';

const Header = () => {
    return (
        <div className={styles['header']}>
            <h1 className={styles['title']}>
                <i className="fas fa-book" />  BookClub
            </h1>
        </div>
    );
};

export default Header;