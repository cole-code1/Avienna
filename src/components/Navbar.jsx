import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation({ setPage, page }){
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-black/70 backdrop-blur z-50">
      <div className="flex justify-between items-center p-4 text-white">
        <h1 className="font-bold text-xl">Avienna</h1>

        <div className="hidden md:flex gap-6">
          {["home","about","products","contact"].map(p => (
            <button key={p} onClick={()=>setPage(p)} className={page===p?"text-orange-400":""}>{p}</button>
          ))}
        </div>

        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col p-4 text-white gap-4">
          {["home","about","products","contact"].map(p => (
            <button key={p} onClick={()=>{setPage(p);setOpen(false)}}>{p}</button>
          ))}
        </div>
      )}
    </div>
  );
}