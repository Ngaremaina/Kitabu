import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookItem from "./BookItem";

describe("BookItem", () => {
    it("renders the book details and links to its detail page", () => {
        render(
            <MemoryRouter>
                <BookItem
                    id="42"
                    title="Harry Potter and the Philosopher's Stone"
                    price={1000}
                    author="J. K. Rowling"
                    cover="https://example.com/cover.png"
                />
            </MemoryRouter>
        );

        expect(screen.getByText("Harry Potter and the...")).toBeInTheDocument();
        expect(screen.getByText("by J. K. Rowling")).toBeInTheDocument();
        expect(screen.getByText("Kshs. 1000")).toBeInTheDocument();
        expect(screen.getByRole("img", { name: "Book Cover" })).toHaveAttribute("src", "https://example.com/cover.png");
        expect(screen.getByRole("link", { name: "Show details" })).toHaveAttribute("href", "/42");
    });
});
