import React from 'react'

const styles = {
    headline: {paddingLeft: 30, paddingRight: 30, textAlign: 'center'},
    big: {fontSize: '3rem', fontWeight: '300'},
    medium: {fontSize: '1.8rem', fontWeight: '300'},
    small: {fontSize: '1.5em', fontWeight: '300'}
}

export default ({type, size, style, content}) => {

    if (!style) {
        style = {
            color: 'black'
        };
    }

    let s = Object.assign({}, styles.headline, styles[size], style);

    //<Link href={`/account?id=${post.id}`}>{ post.realName }</Link>

    if (type.toLowerCase() == 'h1') {
        return <h1 style={s}>{content}</h1>
    } else if (type.toLowerCase() == 'h2') {
        return <h2 style={s}>{content}</h2>
    } else {
        return <h3 style={s}>{content}</h3>
    }
}
