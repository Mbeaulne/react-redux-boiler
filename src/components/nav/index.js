import React from 'react'
import styled from 'styled-components'

import styles from './style'

export default ({
    children,
    onSignOutClick,
    company,
    url,
    username,
    state
}) => (
    <div className={styles.wrapper}>
        <span>
            {children}
        </span>
        <span>
        </span>
        <span className={styles.userWrapper}>
            <span
                className={styles.signout}
                onClick={onSignOutClick}>
                Sign out
            </span>
            <a
                href={`http://${url}`}
                target="_blank"
                className={styles.signout} >
                {username}
            </a>
            ({company})
        </span>
    </div>
)