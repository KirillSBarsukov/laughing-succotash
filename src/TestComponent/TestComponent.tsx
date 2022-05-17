import React from "react";
import { TestComponentProps } from "./TestComponent.types";


const TestComponent: React.FC<TestComponentProps> = () => (
    <div
        data-testid="test-component"
    >
        <h1 className="heading">I'm the test component</h1>
        <h2>Made with love by Harvey</h2>
    </div>
);

export default TestComponent;