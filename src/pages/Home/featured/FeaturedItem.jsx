import SectionTitle from "../../../components/SectionTitle";

import featuredImg from "../../../assets/home/featured.jpg"

export default function FeaturedItem() {
  return (
    <div>

        <SectionTitle

        subHeading={"Check it out"}

        heading={"Featured Items"}
        
        ></SectionTitle>

        <div className="md:flex justify-center items-center py-8 px-16">
            <div>
                
                <img src= {featuredImg} alt="" />

            </div>
            <div className="md:ml-10">
                <p>Aug 20,2025</p>
                <p className="uppercase">where can i get some</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium quasi rem iusto iste! Eius expedita voluptatum sint in obcaecati error eligendi sequi provident ratione ipsum fugiat laudantium, quo labore vero corrupti nulla accusamus asperiores aliquam quisquam dolor molestias. Recusandae vero fugiat ab. Quae necessitatibus quo totam sequi consequuntur hic.</p>
                <button className="btn btn-outline">Order Now</button>
            </div>
        </div>


    </div>
  )
}
