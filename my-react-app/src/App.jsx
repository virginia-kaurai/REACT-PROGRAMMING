
import Header from './Header'
import Food from './Food'
import Footer from './Footer'
import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import Lists from './Lists'
import Car from './carslist'
import Clickme from './Clickme'
import Usestate from './Usestate'
import Useeffect from './useeffects'
function App() {
  return (
    <>
      <Header />
      <Food />
      <Footer />
      <Card />
      <Button/>
      <Student name="alice" age={20} school="harvard"/>
      <Student/>
      <Student/>
      <UserGreeting   name="John Doe" isatschool={true} />
      <Lists />
      <Car/>
      <Clickme/>
      <Usestate/>
      <Useeffect/>
    </>
  )
}

export default App