import React from 'react'

function Footer() {
    return (
        <footer className="border-t border-[#ece7f7] py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="font-serif italic text-2xl text-violet-600">Naveen.</p>
                <p className="font-mono text-xs text-slate-400">
                    &copy; {new Date().getFullYear()} Naveen Chinnadurai
                </p>
            </div>
        </footer>
    )
}

export default Footer
