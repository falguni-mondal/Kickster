import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
import Product from "../components/product/Product";
import ProductList from "../components/productList/ProductList";
import AdminPanel from "../components/admin/AdminPanel";
import Dashboard from "../components/admin/Dashboard";
import AdminContent from "../components/admin/adminContents/AdminContent";
import AddUpdateProduct from "../components/admin/adminContents/products/AddUpdateProduct";
import UserAccount from "../components/user/UserAccount";
import User from "../components/user/User";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Verify from "../components/auth/Verify";
import { useSelector } from "react-redux";
import Cart from "../components/user/cart/Cart";
import Wishlist from "../components/user/wishlist/Wishlist";
import Search from "../components/mobileSearch/Search";

const Router = () => {
  const user = useSelector(state => state.loggedInUser.user);
  const adminId = useSelector(state => state.loggedInUser.admin);
  const userId = useSelector(state => state.loggedInUser.default);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shop" element={<ProductList />} />
      <Route path="/shop/:filter" element={<ProductList />} />
      <Route path="/login" element={user ? user.id === adminId ? <Navigate to="/admin" /> : user.id === userId ? <Navigate to="/user" /> : user.isVerifed ? <Navigate to="/user" /> : <Navigate to="/verify" /> : <Login />} />
      <Route path="/signup" element={user ? user.id === adminId ? <Navigate to="/admin" /> : user.id === userId ? <Navigate to="/user" /> : user.isVerifed ? <Navigate to="/user" /> : <Navigate to="/verify" /> : <SignUp />} />
      <Route path="/verify" element={user ? user.id === adminId ? <Navigate to="/admin" /> : user.id === userId ? <Navigate to="/user" /> : user.isVerified ? <Navigate to="/user" /> : <Verify /> : <Navigate to="#" />} />
      <Route path="/user" element={<User />}>
        <Route index element={<UserAccount />} />
      </Route>
      <Route path="/user/bag" element={<Cart />} />
      <Route path="/user/wishlist" element={<Wishlist />} />
      <Route path="/admin" element={<AdminPanel />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/:section" element={<AdminContent />} />
        <Route path="/admin/products/add" element={<AddUpdateProduct />} />
        <Route path="/admin/products/update/:id" element={<AddUpdateProduct />} />
      </Route>
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default Router;
