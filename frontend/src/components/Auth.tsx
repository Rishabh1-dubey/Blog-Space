
import { Link } from "react-router-dom"

export const Auth=()=>{

    // const [logIN, setLogin] =useState()
    return <div className=" w-screen grid  grid-cols-1 md:grid-cols-2">



<div className="mt-20 h-[500px] border bg-red-50 ">

<div className=" border border-red-400 m-14  h-[360px]">

<div className=" text-center   ">
    <h1 className="text-3xl font-semibold tracking-wide ">Create and account</h1>
    <p className="mt-1">Already have an account  <Link className="text-slate-600 underline leading-loose" to='/signin'>Login</Link></p>
</div>

</div>
</div>

    </div>
}