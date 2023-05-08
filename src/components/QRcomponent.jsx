
const ruta = import.meta.env.VITE_IMAGE_QR;
console.log(ruta)
const QRcomponent = () => {
    return (
        <div className="              
                h-screen 
                flex                 
                flex-col 
                justify-center 
                items-center  ">
            <div className="
            bg-white 
            rounded-lg 
            p-5
            w-72
            text-center">
                <img className="            
                transition 
                duration-300 
                rounded-md 
                 object-cover" src={ruta} alt="Imagen QR" />
                <h1 className="
                Outfit
                text-DarkBlue
                 font-bold 
                 mt-4
                ">Improve your front-end skills by building projects</h1>
                <p className="Outfit  text-GrayishBlue mt-2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
            </div>
        </div>


    )
}

export default QRcomponent

