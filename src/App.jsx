import Router from './utils/Router';
import Navbar from './components/navbar/Navbar';
import { useEffect, useCallback } from 'react';
import gsap from 'gsap';
import Footer from './components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './store/features/productsSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { setUser } from './store/features/loggedInSlice';
import { auth, db } from './utils/firebaseConfigures';
import { setCartItems } from './store/features/cartSlice';
import { setWishlist } from './store/features/wishlistSlice';
import SmoothScrolling from './utils/SmoothScrolling';
import ScrollTop from './utils/ScrollTop';

const App = () => {
  const dispatch = useDispatch();
  const adminId = useSelector(state => state.loggedInUser.admin);
  const userId = useSelector(state => state.loggedInUser.default);

  //Initializing the MOUSE FOLLOWER
  const mouseFollower = useCallback((e) => {
    gsap.to(".mouseFollower", {
      x: e.clientX - 5,
      y: e.clientY - 5,
      opacity: 1,
      duration: 0.3
    })
  }, [])

  // Adding event listener for MOUSE MOVE to follow the mouse cursor
  useEffect(() => {
    const handleMouseMove = (e) => mouseFollower(e)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseFollower])

  // Fetching products data using Redux
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // FETCHING USER CART & WISHLIST
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const localCart = localStorage.getItem("cart");
        const localWishlist = localStorage.getItem("wishlist");

        if (localCart) {
          dispatch(setCartItems(JSON.parse(localCart)));
        }
        if (localWishlist) {
          dispatch(setWishlist(JSON.parse(localWishlist)));
        }

        // GETTING CART
        try {
          const docSnap = await getDoc(doc(db, "carts", `${user.uid}`));
          if (docSnap.exists()) {
            const cartData = docSnap.data().cart;
            localStorage.setItem("cart", JSON.stringify(cartData));
            dispatch(setCartItems(cartData));
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }

        // GETTING WISHLIST
        try {
          const docSnap = await getDoc(doc(db, "wishlists", `${user.uid}`));
          if (docSnap.exists()) {
            const wishlistItems = docSnap.data().wishlist;
            localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
            dispatch(setWishlist(wishlistItems));
          }
        } catch (error) {
          console.error("Error fetching wishlist data:", error);
        }

      } else {
        localStorage.getItem("cart") && localStorage.removeItem("cart");
        localStorage.getItem("wishlist") && localStorage.removeItem("wishlist");
        dispatch(setCartItems([]));
        dispatch(setWishlist([]));
      }
    })
  }, [dispatch]);

  //FETCHING USER DATA
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const docRef = doc(db, "users", `${user.uid}`);
        onSnapshot(docRef, async (docSnap) => {
          if (docSnap.exists()) {
            if (docSnap.data().id !== adminId && user.emailVerified && docSnap.data().isVerified !== true) {
              await setDoc(docRef, {
                ...docSnap.data(),
                isVerified: true
              });
            }
            localStorage.setItem("user", JSON.stringify({ ...docSnap.data(), isVerified: user.id === userId ? true : user.emailVerified ? true : false }));
            dispatch(setUser({ ...docSnap.data(), isVerified: user.id === userId ? true : user.emailVerified ? true : false }));
          }
        })
      } else {
        localStorage.getItem("user") && localStorage.removeItem("user");
        localStorage.getItem("filters") && localStorage.removeItem("filters");
        localStorage.getItem("sorting") && localStorage.setItem("sorting", "all");
        dispatch(setUser(null));
      }
    })

    return () => unsubscribe();
  }, [dispatch, adminId])

  return (
    <>
      <div className="overlay-cusor h-screen fixed z-[999] transparent pointer-events-none">
        <span className="mouseFollower hidden absolute lg:block opacity-0 w-[12px] h-[12px] rounded-full bg-[#3d3d3d] top-0 left-0 z-[100] pointer-events-none"></span>
      </div>
      {/* <SmoothScrolling> */}
      <div className={`w-full pb-[5vh]`}>
        <Navbar />
        <main className='lg:px-5'>
          <Router />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </main>
        <Footer />
        <ScrollTop />
      </div>
      {/* </SmoothScrolling> */}
    </>
  )
}

export default App