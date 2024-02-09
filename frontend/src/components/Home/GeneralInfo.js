import backgroundImage from "../../assets/home/g1.png"
import pets from "../../assets/home/g2.png"
import info1 from "../../assets/home/g4.png"
import info2 from "../../assets/home/g5.png"
import info from "../../assets/home/g7.png"
import title from "../../assets/home/g3.png"

const GeneralInfo = () =>{
    return (

        <div
        className="bg-cover bg-center h-[600px] w-full flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
        }}
      >
        <div className="relative">
          <img
            src={info}
            alt="G7"
            className="absolute top-0 left-[-50px] mb-[-75px] max-w-full"
            style={{ height: '250px', objectFit: 'cover' }}
          />
          <img
            src={pets}
            alt="Imagen 1"
            className="max-w-full"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <img
            src={title}
            alt="G3"
            className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 mb-[-25px] mx-auto"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center ">
          <img
            src={info1}
            alt="Imagen 2"
            className="mb-4 mx-auto mt-[400px]"
            style={{ height: '75px', objectFit: 'cover' }}
          />
          <img
            src={info2}
            alt="Imagen 3"
            className="mx-auto"
            style={{ height: '75px', objectFit: 'cover' }}
          />
        </div>
      </div>
      
    )

}

export default GeneralInfo;