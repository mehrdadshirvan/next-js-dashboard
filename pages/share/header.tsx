import Link from "next/link";

function Header(){
    return (
        <>
            <ul>
                <li>
                    <Link href={`/`} key={'homeRoute'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={`/auth/login`} key={'loginRoute'}>
                        Login
                    </Link>
                </li>
                <li>
                    <Link href={`/auth/register`} key={'registerRoute'}>
                        Register
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Header;