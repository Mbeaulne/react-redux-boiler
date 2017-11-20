import { css } from 'glamor'

export default {
    wrapper: css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        gridAutoRows: 'minmax(40px, auto)',
        fontSize: '15px',
        lineHeight: '15px',
        backgroundColor: '#efefef',
        padding: '0 15px',
        '& a': {
            padding: '10px',
            display: 'inline-block',
            textDecoration: 'none',
            color: '#f47142',
            cursor: 'pointer',
            ':hover': {
                color: '#0065b2'
            }
        }
    }),
    userWrapper: css({
        textAlign: 'right',
        gridColum: '3'
    }),
    signout: css({
        color: '#f47142',
        cursor: 'pointer',
        ':hover': {
            color: '#0065b2'
        }
    })
}