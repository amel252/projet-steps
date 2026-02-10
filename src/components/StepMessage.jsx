import React from "react";

function StepMessage({ step, children }) {
    return (
        <div>
            <p className="message">
                <h3>Step {step}</h3>

                {children}
            </p>
        </div>
    );
}

export default StepMessage;
