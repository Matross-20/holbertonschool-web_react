import { render } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

//BodySectionWithMarginBottom component tests
describe("BodySectionWithMarginBottom Component", () => {

    // test if it contains div with class name bodySectionWithMargin
    it("div with class name bodySectionWithMargin exists", () => {
        render(<BodySectionWithMarginBottom/>)

        // Get div
        const divWithClass = document.getElementsByClassName("bodySectionWithMargin")[0];

        // Assert existence of div
        expect(divWithClass).toBeInTheDocument();
    })

    // Test if it renders BodySection component
    it("Renders BodySection component", () => {
        render(<BodySectionWithMarginBottom/>)

        // Get BodySection class
        const bodySectionClass = document.getElementsByClassName("bodySection")[0];

        // Assert existance of div
        expect(bodySectionClass).toBeInTheDocument();
    })
})