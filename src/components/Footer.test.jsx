import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer", () => {
    const currentYear = new Date().getFullYear();
    it("renders navigation links and the copyright line", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
        expect(screen.getByRole("link", { name: "Add Book" })).toHaveAttribute("href", "/addbook");
        expect(screen.getByRole("link", { name: "Contact Us" })).toHaveAttribute("href", "/contact us");
        expect(screen.getByText(new RegExp(`©\\s*${currentYear}\\s*Kitabu`, "i"))).toBeInTheDocument();
    });
});
