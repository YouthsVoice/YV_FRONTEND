"use client";

interface Props{
// eslint-disable-next-line @typescript-eslint/no-explicit-any
metric:any;
}

export default function ProgramMetricCard({
metric,
}:Props){

const Icon=metric.icon;

return(

<div
className="
group
rounded-[32px]
border
bg-white
p-8
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
"
>

<div
className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-[#155E4B]
text-white
"
>

<Icon size={28}/>

</div>

<h3
className="
mt-8
text-5xl
font-black
text-[#155E4B]
"
>

{metric.value}

</h3>

<h4
className="
mt-3
text-xl
font-bold
"
>

{metric.title}

</h4>

<p
className="
mt-4
leading-7
text-gray-600
"
>

{metric.description}

</p>

</div>

)

}