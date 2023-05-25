import Link from "next/link";

const NavBarAdmin = () =>{
    return (
    <div className="bg-blue-950 w-56 h-screen ">
        <div className=" bg-neutral-200 w-48 mt-10 fixed">
            <Link href="/HomeAdmin"><h1 className="pl-5 pt-1 h-9 hover:bg-blue-500">🏠 Home</h1></Link>
            <Link href="/HomeAdmin/Users"><h1 className="pl-5 pt-1 h-9 hover:bg-blue-500">👥 Usuarios</h1></Link>
            <Link href="/HomeAdmin/Comments"><h1 className="pl-5 pt-1 h-9 hover:bg-blue-500">💬 Comentarios</h1></Link>
        </div>
    </div>)
}

export default NavBarAdmin;