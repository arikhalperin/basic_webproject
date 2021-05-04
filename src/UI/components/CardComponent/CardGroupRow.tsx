import React from 'react';

interface IProps {
    children?: React.ReactNode;
}

const CardGroupRow = (props: IProps) => {
    const { children } = props;

    return (
        <div className="row">
            {children}
        </div>
    );
}

export default CardGroupRow;