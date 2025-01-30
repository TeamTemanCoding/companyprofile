import React, { forwardRef } from "react";
import { ISectionContainerProps } from "@/types/types";

const SectionContainer = forwardRef<HTMLDivElement, ISectionContainerProps>(
    ({ children, className, id }, ref) => {
        return (
            <div className="relative">
                <section
                    ref={ref}
                    className={`container w-screen mx-auto overflow-x-hidden ${className}`}
                    id={id}
                >
                    {children}
                </section>
            </div>
        );
    }
);

SectionContainer.displayName = "SectionContainer"

export default SectionContainer;