import React, {useCallback} from 'react';
import {SimpleInputProps} from "@components/Inputs/Input/types.ts";
import classNames from "classnames";
import {useChangeHandler} from "@components/Inputs/hooks/useChangeHandler.ts";

interface TextareaProps{
    data: { [key: string]: any };
    setData: React.Dispatch<React.SetStateAction<any>>;
    name: string;

    onChange?: (e: any) => void;

    className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
                                                      data,
                                                      setData,
                                                      name,

                                                      onChange,

                                                      className,
                                                      ...props
                                                  }) => {

    const changeHandler = useChangeHandler(name, setData, onChange);

    return (
        <textarea
            {...props}

            id={name}
            name={name}
            value={data[name]}
            onChange={changeHandler}

            className={classNames(
                "w-full h-32 border border-gray-300 block p-2.5",
                "focus:outline-none focus:ring-2 focus:ring-app-accent/50",
                "bg-white/70 backdrop-blur-xl text-gray-900 text-sm rounded-lg",
                "placeholder-gray-400",
                className
            )}
        ></textarea>
    );
}