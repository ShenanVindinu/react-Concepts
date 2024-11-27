import './App.css'
import Item from "./component/Item.tsx";

function App() {



  return (
    <div>
        <Item {...itemList[0]}/>
        <Item {...itemList[1]}/>
        <Item {...itemList[2]}/>
    </div>
  )
}

const itemList = [
    {
        title: 'RAD',
        desc: 'Lorem ipsum dolor sit amet'
    },
    {
        title: 'RAD',
        desc: 'Lorem ipsum dolor sit amet'
    },
    {
        title: 'RAD',
        desc: 'Lorem ipsum dolor sit amet'
    }
]

export default App
