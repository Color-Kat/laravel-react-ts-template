import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { FavouritesPage } from "@pages/FavouritesPage/FavouritesPage";
import { Layout } from "@modules/Layout";
import {Login} from "@pages/Auth/Login.tsx";
import {Register} from "@pages/Auth/Register.tsx";
import {ForgotPassword} from "@pages/Auth/ForgotPassword.tsx";
import {PasswordReset} from "@pages/Auth/PasswordReset.tsx";

import {AdminRoute, AuthRoute, NotAuthRoute} from "@/utils/router";
import {AdminIndexPage} from "@pages/Admin/AdminIndexPage.tsx";
import {TestPage} from "@pages/TestPage/TestPage.tsx";
import {Page404} from "@pages/Errors/Page404/Page404.tsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/test" element={<TestPage/>}/>

                {/*  Auth  */}
                <Route element={<NotAuthRoute />}>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Route>

                <Route path="/forgot-password" element={<ForgotPassword />}/>
                <Route path="/password-reset" element={<PasswordReset />}/>

                {/*  Admin Page  */}
                <Route element={<AdminRoute />}>
                    <Route path="/admin" element={<AdminIndexPage />}/>
                </Route>

                <Route path="*" element={<Page404 />}/>

            </Routes>
        </Layout>
    );
}

export default App;
