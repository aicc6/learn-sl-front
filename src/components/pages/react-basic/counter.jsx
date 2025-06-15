import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)

  const increase = () => setNumber((prev) => prev + 1)
  const decrease = () => setNumber((prev) => prev - 1)

  return (
    <div className="flex flex-col items-center gap-2 border-1 p-2">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Counter
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">Number: {number}</p>

      <div className="flex gap-2">
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
      </div>
    </div>
  )
}

export { Counter }
