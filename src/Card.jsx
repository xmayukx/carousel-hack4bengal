
export default function Card(props) {

    return (
        <div>
            <div className="relative mx-auto h-[25rem] w-screen p-7 rounded-lg bg-slate-800 border border-solid border-l-zinc-500 hover:bg-slate-900" style={{ backgroundImage: 'url('+props.img+')',}}>
            <div className="flex flex-col justify-center relative text-black font-semibold gap-3">
                <div>{props.name}</div>
                <div>{props.description.location}</div>
            </div>
            <button className="absolute bottom-7 p-2 bg-violet-700 rounded-lg w-[5rem] hover:bg-violet-800 text-slate-300 ">
                Visit
            </button>
        </div>
        </div>
    )
}