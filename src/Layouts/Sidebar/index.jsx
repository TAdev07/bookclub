import React from 'react';

// styles
import styles from './styles.module.styl';

const Sidebar = () => {
    return (
        <div className={styles['sidebar']}>
            <div className={`${styles['side-block']}`}>
                <button type="button" name="" id="" className="btn btn-danger">Thêm sách</button>
            </div>
            <hr className='hr-sidebar' />
            <ul className={`list-group ${styles['list-group']}`}>
                <li className={`list-group-item d-flex align-items-center active ${styles['list-item']}`}>
                    <i className="fas fa-book" />
                    <a href="#" className='pl-2'>Kho sách</a>
                </li>
                <li className={`list-group-item d-flex align-items-center ${styles['list-item']}`}>
                    <i className="fas fa-book" />
                    <a href="#" className='pl-2'>Sách của tôi</a>
                </li>
                <li className={`list-group-item d-flex align-items-center ${styles['list-item']}`}>
                    <i className="fas fa-users" />
                    <a href="#" className='pl-2'>Danh sách thành viên</a>

                </li>
            </ul>
        </div>
    );
};

export default Sidebar;