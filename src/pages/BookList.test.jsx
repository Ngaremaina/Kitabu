import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookList from "./BookList";

const books = [
    { id: 1, title: "Book One", price: 100, author: "Author A", sold: 2, cover: "cover1.png" },
    { id: 2, title: "Book Two", price: 200, author: "Author B", sold: 3, cover: "cover2.png" },
];

describe("BookList", () => {
    it("renders a BookItem for every book", () => {
        render(
            <MemoryRouter>
                <BookList books={books} />
            </MemoryRouter>
        );

        expect(screen.getByText("Book One")).toBeInTheDocument();
        expect(screen.getByText("Book Two")).toBeInTheDocument();
        expect(screen.getAllByText("Show details")).toHaveLength(2);
    });

    it("renders nothing when there are no books", () => {
        render(
            <MemoryRouter>
                <BookList books={[]} />
            </MemoryRouter>
        );

        expect(screen.queryAllByText("Show details")).toHaveLength(0);
    });
});
