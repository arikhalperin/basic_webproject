import React from 'react';

interface IProps {
    col?: number;
    children?: React.ReactNode;
    className?: string;
}

const CardGroupCol = (props: IProps) => {
    const { col, className, children } = props;
    const baseClass = className ? className : `col-xl-${col}`; // class name overrides lg!

    return (
        <div className={`${baseClass} col-12`}>
            {children}
        </div>
    );
}

export default CardGroupCol;