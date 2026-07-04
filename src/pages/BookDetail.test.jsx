import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BookDetail from "./BookDetail";

const book = {
    id: 1,
    title: "Harry Potter",
    subtitle: "The Philosopher's Stone",
    author: "J. K. Rowling",
    published: "1997-06-26",
    publisher: "Bloomsbury",
    pages: 223,
    price: 1000,
    quantity: 10,
    sold: 4,
    description: "A boy wizard.",
    cover: "cover.png",
};

function renderDetail(initialPath = "/1") {
    return render(
        <MemoryRouter initialEntries={[initialPath]}>
            <Routes>
                <Route path="/:id" element={<BookDetail />} />
                <Route path="/" element={<div>Home Page</div>} />
            </Routes>
        </MemoryRouter>
    );
}

describe("BookDetail", () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("fetches and displays the book by id", async () => {
        fetch.mockResolvedValueOnce({ json: async () => book });
        renderDetail();

        expect(await screen.findByText("Harry Potter")).toBeInTheDocument();
        expect(screen.getByText("by J. K. Rowling")).toBeInTheDocument();
        expect(screen.getByText("Kshs. 1000")).toBeInTheDocument();
        expect(screen.getByText("Available copies: 6")).toBeInTheDocument();
        expect(fetch).toHaveBeenCalledWith("https://book-data.onrender.com/books/1");
    });

    it("deletes the book and navigates home", async () => {
        fetch
            .mockResolvedValueOnce({ json: async () => book })
            .mockResolvedValueOnce({ json: async () => ({}) });
        const user = userEvent.setup();
        renderDetail();

        await screen.findByText("Harry Potter");
        await user.click(screen.getByRole("button", { name: "Delete Book" }));

        await waitFor(() => expect(screen.getByText("Home Page")).toBeInTheDocument());
        expect(fetch).toHaveBeenLastCalledWith(
            "https://book-data.onrender.com/books/1",
            expect.objectContaining({ method: "DELETE" })
        );
    });
});
