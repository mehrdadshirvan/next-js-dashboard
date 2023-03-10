import Link from "next/link";

function Header(){
    return (
        <>
            <div className={`w-100 px-2 py-2 bg-gray-100 shadow`}>
                <div className="container mx-auto">
                    <div className={`flex flex-wrap`}>
                        <div className="columns-8">
                            <ul className={`text-center `}>
                                <li className={`hover:bg-gray-200 hover:rounded`}>
                                    <Link href={`/`} key={'homeRoute'} className={`py-2 px-2 inline-block `}>
                                        Home
                                    </Link>
                                </li>
                                <li className={`hover:bg-gray-200`}>
                                    <Link href={`/auth/login`} key={'loginRoute'} className={`py-2  px-2 inline-block`}>
                                        Login
                                    </Link>
                                </li>
                                <li className={`hover:bg-gray-200`}>
                                    <Link href={`/auth/register`} key={'registerRoute'} className={`py-2 px-2 inline-block`}>
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header;