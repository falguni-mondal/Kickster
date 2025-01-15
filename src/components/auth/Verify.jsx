import React from 'react'
import { auth, db } from '../../utils/firebaseConfigures';
import { deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Verify = () => {
    const reloader = () => {
        window.location.assign("/login");
    }

    const signCancellation = async () => {
        const user = auth.currentUser;
        if (user) {
            try {
                await deleteDoc(doc(db, "users", user.uid));
                await user.delete();
                toast("Please provide an authentic email!");
                window.location.assign("/signup");
            }
            catch (error) {
                toast.error(`${error.code} please try again`)
            }
        }
        window.location.assign("/signup");
    }


    return (
        <div className='h-[80vh] w-full flex justify-center items-center px-5'>
            <p className='w-[45ch]'>
                <h1 className='text-[2.3rem] leading-none mb-3'>Please verify your <span className='underline'>email</span> to continue</h1>
                <span className='text-zinc-800'>Verify your email address to continue. <span className='underline txt-medium'>Check your inbox</span> for the verification link. If you haven't received it, please check your spam folder.</span>
                <br />
                <br />
                <span className='text-zinc-950'>
                    <span className='txt-medium'>If verified</span> please continue <span onClick={reloader} className='text-blue-600 underline txt-medium'>here</span> and wait for few seconds for verification on our end.
                </span>

                <br />
                <br />
                <span className='text-zinc-950 txt-medium'>
                    Entered wrong email? <span onClick={signCancellation} className='text-blue-600 underline'>Click here</span>
                </span>
            </p>
        </div>
    )
}

export default Verify