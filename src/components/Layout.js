import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="App">
            <div className="header">
                <h1>Expense Tracker</h1>
            </div>
            {children}
            <div className="footer">&copy;2022 Learn with Sumit</div>
        </div>
    );
};

export default Layout;