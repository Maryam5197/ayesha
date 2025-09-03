import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
  <Image
    className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
    src="/img.jpg"
    alt=""
    width={384}
    height={512}
  />
  <Image
    className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
    src="/img.jpg"
    alt=""
    width={384}
    height={512}
  />
<figure className="pt-6 md:p-8 text-center md:text-left space-y-4">
  <blockquote>
    <p className="text-lg font-medium">
      “Tailwind CSS is the only framework that I&apos;ve seen scale
      on large teams. It’s easy to customize, adapts to any design,
      and the build size is tiny.”
    </p>
  </blockquote>
  <figcaption className="font-medium">
    <div className="text-sky-500 dark:text-sky-400">
      maryam
    </div>
    <div className="text-slate-700 dark:text-slate-500">
      PAIB students
    </div>
  </figcaption>
</figure>
    </div>
  )
}

export default page
