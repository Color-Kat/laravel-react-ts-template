import React, {memo} from 'react';
import {ITypographyElement} from "./types.tsx";
import {twJoin} from "tailwind-merge";

export const H3: React.FC<ITypographyElement> = memo(({
                                                          children,
                                                          className,
                                                          ...props
                                                      }) => {

    return (
        <h3
            className={twJoin(
                "text-indigo-600 font-semibold",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
});