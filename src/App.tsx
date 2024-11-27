import './App.css'
import Item from "./component/Item.tsx";

function App() {

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

    //for loop with data passing
    const itemsArray = [];

    for (const itemsArrayElement of itemList) {
        itemsArray.push(
            <Item title={itemsArrayElement.title} desc={itemsArrayElement.desc} />
        );
    }

    return (
        //same for loop function with arrow function. less complicated
        <div>
            {itemList.map(item =>(
                <Item title={item.title} desc={item.desc} />
            ))}
        </div>
    )
}

export default App
