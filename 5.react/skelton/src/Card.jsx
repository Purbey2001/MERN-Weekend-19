import React from 'react'

const Card = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="h-44 w-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100" />
      <div className="p-5">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          Featured
        </span>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">Modern UI Card</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          A clean Tailwind card component with subtle depth, rounded corners, and a
          tidy content layout.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
            Read More
          </button>
          <span className="text-xs font-medium text-slate-500">5 min read</span>
        </div>
      </div>
    </div>
  )
}

export default Card
