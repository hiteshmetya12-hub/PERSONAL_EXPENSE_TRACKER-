import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Analytics from "./pages/Analytics";
import NotFoundPage from "./pages/NotFoundPage";
import ExpensesHistory from "./sections/ExpensesHistory";
import { ExpenseProvider } from "./context/Context";

function App() {
    // useEffect(() => {
    //     document.addEventListener("contextmenu", (e) => e.preventDefault());
    //     document.addEventListener("keydown", (e) => {
    //         if (
    //             e.key === "F12" ||
    //             (e.ctrlKey && e.shiftKey && e.key === "I") ||
    //             (e.ctrlKey && e.shiftKey && e.key === "C") ||
    //             (e.ctrlKey && e.shiftKey && e.key === "J") ||
    //             (e.ctrlKey && e.key == "U")
    //         ) {
    //             e.preventDefault();
    //         }
    //     });
    // }, []);

    return (
        <BrowserRouter>
            <ExpenseProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Analytics />} />
                        <Route path="/history" element={<ExpensesHistory />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </ExpenseProvider>
        </BrowserRouter>
    );
}

export default App;
