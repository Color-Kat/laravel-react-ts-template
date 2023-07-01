import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const StandardButton: React.FC<ButtonProps> = ({
                                                  children,
                                                  ...props
                                              }) => {
    return (
        <button
            {...props}
            className={classNames(
                `relative mx-auto uppercase cursor-pointer flex justify-center items-center`,
                'text-sm shadow-md rounded-lg px-5 py-2.5 w-36',
                'focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300',
                'disabled:bg-red-500 disabled:hover:bg-red-600',
                props.className
            )}
        >

            {children}

        </button>
    );
}