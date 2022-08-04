import './collage.scss';

const Collage = () => {
  const images = [
    'https://images.pexels.com/photos/1619692/pexels-photo-1619692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4869691/pexels-photo-4869691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1579562243430-4732bcb09d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  ];
  return (
    <div id="collage">
      <div className="container">
        {images.map((image) => (
          <img src={image} key={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Collage;