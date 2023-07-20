import {memo} from "react";

import {Header} from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import classNames from "classnames";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {
    return (
        <div
            className="scroll-container flex flex-col h-screen overflow-auto overflow-x-hidden font-inter app-bg"
        >

            <Header/>

            <Main>
                <div className={classNames(
                    "flex-1",
                    // "max-w-4xl",
                )}>
                    {children}
                </div>
            </Main>

            <Footer/>

        </div>
    );
});