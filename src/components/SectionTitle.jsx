

export default function SectionTitle({subHeading,heading}) {
  return (
    <div className=" mx-auto my-8 md:w-4/12">

        <p className="text-center text-xl text-yellow-500 mb-2">---{subHeading}---</p>
        <h3 className="text-center text-3xl font-bold  border-y-4 py-4 uppercase ">{heading}</h3>

    </div>
  )
}
