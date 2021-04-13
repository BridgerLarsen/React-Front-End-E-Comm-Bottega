import React from 'react';

const PageTitle = (props) => {
    return (
        <div className={`${props.className} page-title`}>
            {props.title}
        </div>
    )
}

export default PageTitle;