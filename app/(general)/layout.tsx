import React from 'react'
import {Navbar} from '@/components';

export default function GeneralLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        <span className="text-5xl">{children}</span>
      </main>
    </>

  )
}