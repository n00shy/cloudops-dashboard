export default function PodStatus(){

const pods=[
{
name:"backend",
status:"Running"
},
{
name:"frontend",
status:"Running"
},
{
name:"database",
status:"Pending"
}
]


return (

<div className="space-y-3">

{
pods.map((pod)=>(

<div 
key={pod.name}
className="flex justify-between border p-3 rounded-lg"
>

<span>
{pod.name}
</span>


<span
className={
pod.status==="Running"
?
"text-green-600"
:
"text-yellow-600"
}
>

● {pod.status}

</span>


</div>

))
}

</div>

)

}
