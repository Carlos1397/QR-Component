 
const ruta = import.meta.env.VITE_IMAGE_QR;
console.log(ruta)
const QRcomponent = () => {
    return (
        <div className="  
        flex  
        justify-center  
        items-center
        flex-col 
        mx-auto         
        xl:w-3/12
        lg:w-3/12
        sm:w-4/12
        md:w-4/12
        xs:w-6/12
        h-screen  
        p-5
         ">

            <div className='
                bg-white
                  p-5
                  rounded-md
                '>
                <img
                    className='
                    transition
                    duration-300
                    rounded-md'
                    src={ruta} alt="Imgagen QR"
                />
                <div
                    className='                 
                    text-center
                    bg-white  
                    p-5
                   
                    '
                    
                >
                    <h1 className="     
                        Outfitext
                        font-bold
                        transition
                        duration-300
                          text-DarkBlue 
                        text-6xl
                        sm:text-xl
                        xs:text-base
                        tracking-tight
                        ">
                        Improve your front-end skills by buildng projects
                    </h1>
                    <p className='
                     transition
                     duration-300
                    mt-2
                    xs:text-sm
                        tracking-tight text-DarkBlue'>
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                    </p>
                </div>
            </div>




        </div>


    )
}

export default QRcomponent

