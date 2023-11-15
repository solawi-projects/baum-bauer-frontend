import Apple from '../assets/Trees/Apples.jpg'



import '../components/Tress.css'
const Sponsor = () => {


  const data=[
    {
      "id": 1,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
      
    },
    {
      "id": 2,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
    },
    {
      "id": 3,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
    },
    {
      "id": 4,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
    },
    {
      "id": 5,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
    },
    {
      "id": 6,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
      
    },
    {
      "id": 7,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image":Apple,
    },
    {
      "id": 8,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
    },
    {
      "id": 9,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
    },
    {
      "id": 10,
      "name": "Apple Tree",
      "price": 19.99,
      "currency": "€",
      "image": Apple,
    }
  ]
  return (<div><div  className=' flex  justify-center items-center flex-wrap gap-10 pt-40'>{data.map((item, index) => (
    <div key={index} className="flex  items-center ">
      <div className="w-60 p-10 h-65 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img className="w-40 h-40 object-cover rounded-t-md" src={item.image} alt={item.name} />
        <div className="mt-2">
        <h2 className="text-2xl font-bold text-gray-700">{item.name}</h2>

        
          <div className="mt-2 mb-1 flex justify-between pl-1 pr-1">
            <button className="block text-xl font-semibold text-gray-700 cursor-auto">{`$${item.price}`}</button>
            <button className=" Sponsorbutton text-lg block font-semibold py-2 px-4 text-green-100 hover:text-white rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
          </div>
        </div>
      </div>
    </div>
  ))}</div>
</div>);
};
export default Sponsor;
