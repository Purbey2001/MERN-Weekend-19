import React from "react";

const Skelton = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-44 w-full animate-pulse bg-slate-200" />
      <div className="p-5">
        <div className="h-6 w-20 animate-pulse rounded-full bg-slate-200" />
        <div className="mt-4 h-5 w-40 animate-pulse rounded bg-slate-200" />
        <div className="mt-3 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-3 w-11/12 animate-pulse rounded bg-slate-200" />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="h-9 w-24 animate-pulse rounded-lg bg-slate-200" />
          <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default Skelton;
