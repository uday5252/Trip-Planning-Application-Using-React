

import "./Header.css"

import { useState, useEffect } from "react"

import { database } from "../firebasedata.js"
import Navbar from "./Navbar"


export function Header() 
{
    console.log(window)
    // 2 details(variable name, function name)

   const [ itemName, setItemName ] = useState("")

   const [ itemCount, setItemCount ] = useState(0)

   const [ databaseData, setDatabaseData ] = useState([])
   
//    totalData = ["2 Bag", "4 Shoe"]

    // Connected to the database, read the data from the database (useEffect)

    // Reading the data from firestore(read operation and write operation is disabled)

    useEffect(function()
    {
      // Logic to actually read the data
      database.collection("tripcollection").onSnapshot(function(mySnapshot)
      {
        // mySnapshot = [ doc1, doc2 ] // snapshot --> array

       setDatabaseData(mySnapshot.docs.map(function(i)
       {
         return i.data().itemdata
       }))
      })
    }, [])

    function collectData(event)
    {
        setItemName(event.target.value)
    }

    function collectItemCount(event)
    {
        setItemCount(event.target.value)
    }

    function addItem()
    {
    
        // Logic to store the data in database

        database.collection("tripcollection").add({
          itemdata: itemCount + " " + itemName
         })
        
        // Logic to clear the data
        setItemCount(1)
        setItemName("")

        // itemCount = 0
        // itemName = "Bags"


    }

  return (
    <div id="container">

      <h3>Choose Your Travel Items For The Trip😍</h3>

      <select onChange={collectItemCount} value={itemCount}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    
      <input type="text" value={itemName} placeholder="Enter the item name...." onChange={collectData}/>

      <button onClick={addItem}>Add Item</button>

     { 
        databaseData.map(function(i)
        {
            return(
                     <h3>{i}</h3>
               )
        })
    }

    </div>
  )
}

// We know that data present in the input box will keep changing as we keep typing,
// so how to collect that data which keeps changing????
// event --> onChange event

// collect the data(DONE)

// If we want to store any data present with our react application
// we need to use useState() --> react library

