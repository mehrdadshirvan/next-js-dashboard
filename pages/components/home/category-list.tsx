import { BsFillHeartPulseFill } from "react-icons/bs";

function CategoryList() {


    return (
        <>
            <div className="flex  flex-nowrap">
                {
                    [1,2,3,4,5,6,7,8,9].map((item) => 
                        <>
                             <div className='group/item mx-1'>
                                <div className=' group-hover/item:visible px-8 py-4 border rounded-xl hover:.img hover:border-blue-400 hover:shadow-lg hover/item:scale-110 cursor-pointer transition-all ease-in-out'>
                                    <span className='img'>
                                        <BsFillHeartPulseFill className='block text-center text-5xl group-hover/item:text-5xl relative  group-hover/item:text-blue-900   transition-all text-gray-800 m-auto ' />
                                    </span>
                                    <span className='block text-center font-bold	'>PickTalk</span>
                                    <span className='block text-center '>برای اعضای ویژه</span>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            
        </>
    )
}

export default CategoryList;