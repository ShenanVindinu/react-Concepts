import './App.css'
import Item from "./component/Item.tsx";

function App() {



  return (
    <div>
        <Item title={itemList[0].title} desc={itemList[0].desc} />
        <Item title={itemList[1].title} desc={itemList[1].desc} />
        <Item title={itemList[2].title} desc={itemList[2].desc} />
    </div>
  )
}

const itemList = [
    {
        title: 'RAD',
        desc: 'Lorem ipsum dolor'
    },
    {
        title: 'RAD',
        desc: 'Lorem ipsum dolor sit amet'
    },
    {
        title: 'RAD',
        desc: 'Lorem dolor sit amet'
    }
]

export default App
