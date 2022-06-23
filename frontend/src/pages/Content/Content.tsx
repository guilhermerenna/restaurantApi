import React, { useState } from 'react';
import Menu from '../Menu/Menu'
import Page from '../Content/Page/Page'

import './Content.css'

const Content = () => {
    return (
        <body>
            <div className="content">
                <Menu />
                <Page />
            </div>
        </body>
    )
}

export default Content;