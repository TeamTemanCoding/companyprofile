import React, { forwardRef } from "react";
import Nav from "./navbar";
import Footer from "./footer";
import { IPageContainerProps } from "@/types/types";


const PageContainer = forwardRef<HTMLElement, IPageContainerProps>(
    (
        { className, children, withNavbar = true, withFooter = true, ...props },
        ref
    ) => {
        return (
            <React.Fragment>
                {withNavbar && <Nav />}
                <main {...props} ref={ref} className={`overflow-x-hidden ${className}`}>
                    {children}
                </main>
                {withFooter && <Footer />}
            </React.Fragment>
        );
    }
);

PageContainer.displayName = "PageContainer"

export default PageContainer;
