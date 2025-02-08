import Nav from './Nav';
import MainCard from './MainCard';
import "../assets/styles/home.scss";

const Home = () => {
  const projects = [
    {
      title: 'MNHS LMS',
      description: 'A Learning Management System (LMS) proposal for a local high school in Manila, Philippines.',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Caution Coffee',
      description: 'A website created to showcase Caution Coffee, a cafe and premium supply store located in Angeles City, Philippines',
      image: '/api/placeholder/400/300'
    }
  ];

  return(
    <>
    <Nav />
    <MainCard />
    </>
  );
}

export default Home;