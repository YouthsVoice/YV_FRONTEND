"use client";

import ProgramMetricCard from "./ProgramMetricCard";

import { Program } from "@/types/programs/program";

interface Props{
program:Program;
}

export default function ProgramMetrics({
program,
}:Props){

return(

<section
className="
bg-[#FFFDF7]
py-24
"
>

<div
className="
mx-auto
max-w-7xl
px-4
"
>

<div
className="
mx-auto
max-w-3xl
text-center
"
>

<span
className="
rounded-full
bg-green-50
px-4
py-2
text-sm
font-medium
text-[#155E4B]
"
>

Impact Overview

</span>

<h2
className="
mt-6
text-4xl
font-bold
lg:text-5xl
"
>

Measuring
<span className="block text-[#155E4B]">

Our Impact

</span>

</h2>

<p
className="
mt-6
text-lg
text-gray-600
"
>

Every statistic represents real people,
real communities and meaningful
progress created through this program.

</p>

</div>

<div
className="
mt-16
grid
gap-8
md:grid-cols-2
xl:grid-cols-4
"
>

{program.metrics.map(metric=>(

<ProgramMetricCard

key={metric.label}

metric={metric}

/>

))}

</div>

</div>

</section>

)

}