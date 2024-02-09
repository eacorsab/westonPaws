import backgroundImage from "../../assets/home/gg11.png"
import car from "../../assets/home/gg2.png"
import letters from "../../assets/home/gg332.png"

const Info = () =>{
    return (

        <div
        className="bg-cover bg-center h-[600px] w-full flex  items-center  relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
      >
          <img
            src={car}
            alt="car"
            className="max-w-full mt-[50px]"
            style={{ height: '550px', objectFit: 'cover' }} 
          />
          <img
            src={letters}
            alt="Info"
            className="max-w-full ml-[-50px]"
            style={{ height: '650px', objectFit: 'cover' }}
          />
      </div> 
    )

}

export default Info;