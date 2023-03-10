import Image from "next/image";
import Head from "next/head";
import {useState} from "react";
import {baseUrl, checkAuthLogin} from "@/pages/helper";

function login(){
    
    checkAuthLogin()
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [form, setForm] = useState({
        'mobile': "09228417016",
        'password': "9092301030"
    });

    const SetData = (event: { target: { name: any; value: any; }; }) => {
        // console.log(event.target.name, event.target.value)
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const submitHandler = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // let url = baseUrl('login');
        //send req and Done
        // let res = await fetch(baseUrl('login'), {
        //     method: "POST",
        //     body: JSON.stringify(form),
        //     redirect: 'follow',
        //     headers: {'Accept':'application/json','Content-Type':'application/json'},
        // });
        // res = await res.json();
        // if(res.statusCode === 200){
        // console.log(res)
        //     localStorage.setItem('_ut', '1')
        // }else{
        //     localStorage.removeItem('_ut');
        // }
        localStorage.setItem('mobile',form.mobile);
        localStorage.setItem('password',form.password);
    }
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />

            </Head>
            <div className="container">
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <form onSubmit={submitHandler}>
                        <input id="mobile"
                               name="mobile"
                               type="email"
                               autoComplete="mobile"
                               value={form.mobile}
                               onChange={SetData}
                               required
                               className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                               placeholder="Enter your mobile number" />

                        <input id="password"
                               name="password"
                               type="password"
                               autoComplete="password"
                               value={form.password}
                               onChange={SetData}
                               required
                               className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                               placeholder="Enter your password" />

                        <button type='button' onClick={submitHandler}>
                            login
                        </button>
                    </form>
                </div>
            </div>

        </>
);
}

export default login;