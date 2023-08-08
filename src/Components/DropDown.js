import React, { useState } from 'react'
import "./DropDown.css"

const DropDown = () => {
    const [selected, setSelected] = useState();
    const [selected2, setSelected2] = useState();

    const handleOnChange = (event) => {
        setSelected(event.target.value);
    }
    const handleOnChange2 = (event) => {
        setSelected2(event.target.value);
    }
    const multipleArrays = [
        {
            type: 'Select...',
            array: []
        },
        {
            type: 'Books',
            array: [
                {
                    id: 'book1',
                    name: 'Harry Potter'
                },
                {
                    id: 'book2',
                    name: 'Dark Tower'
                },
                {
                    id: 'book3',
                    name: 'Habits',
                },
                {
                    id: 'book4',
                    name: 'Energy',
                },
                {
                    id: 'book5',
                    name: 'soul'
                }
            ]
        },
        {
            type: 'Education',
            array: [
                {
                    id: 'uni1',
                    name: 'University Of Managment & Technology'
                },
                {
                    id: 'uni2',
                    name: 'Lahore University Of Management & Science',
                },
                {
                    id: 'uni3',
                    name: 'University Of Central Punjab',
                },
                {
                    id: 'uni4',
                    name: 'Lahore Garrison University',
                },
                {
                    id: 'uni5',
                    name: 'University Of South Asia'
                },
                {
                    id: 'uni6',
                    name: 'Virtual University'
                }
            ]
        },
        {
            type: 'Resturant',
            array: [
                {
                    id: 'res1',
                    name: 'Haveli Resturant'
                },
                {
                    id: 'res2',
                    name: 'Accordian Cafe',
                },
                {
                    id: 'res3',
                    name: 'Salt & Papper',
                },
                {
                    id: 'res4',
                    name: 'Qabail Tribes',
                },
                {
                    id: 'res5',
                    name: 'Lahore Monal'
                }
            ]
        },
        {
            type: 'Clothing',
            array: [
                {
                    id: 'clo1',
                    name: 'Armani',
                },
                {
                    id: 'clo1',
                    name: 'Gucci'
                },
                {
                    id: 'clo1',
                    name: 'Prada'
                },
                {
                    id: 'clo1',
                    name: 'Hype'
                },
                {
                    id: 'clo1',
                    name: 'J.'
                },
            ]
        }
    ]
    let singleArr = []
    const renderedOptions = multipleArrays.map((obj, index) => {
        return <option key={index}>{obj.type}</option>
    })
    multipleArrays.filter((object) => {
        if (selected === object.type) {
            singleArr = object.array
        } return null
    })
    console.log(singleArr);

    const renderedNextOption = singleArr.map((item, index) => {
        return <option key={index}>{item.name}</option>
    })

    return (
        <>
            <div className='selection'>
                <div>
                    <select className='select-one' value={selected} onChange={handleOnChange}>
                        {renderedOptions}
                    </select>
                </div>
                <div className='margin'>
                    <select className='select-two' value={selected2} onChange={handleOnChange2}>
                        <option value="">Select...</option>
                        {renderedNextOption}
                    </select>
                </div>
            </div>

        </>
    )














    // multipleArrays.filter((obj, index) => {
    //     if (selected === obj.type) {
    //         singleArr = obj.array
    //     }
    //     return null
    // })
    // console.log(singleArr);

    // const renderNextOptions = singleArr.map((item, index) => {
    //     return <option value={item.name} key={index}>{item.name}</option>
    // })
    // return (
    //     <div>
    //         <select value={selected} onChange={handleOnChange}>
    //             {renderedOptions}
    //         </select>
    //         <select value={selected2} onChange={handleOnChange2}>
    //             <option value=''>Select...</option>
    //             {renderNextOptions}
    //         </select>
    //     </div>
    // )
}

export default DropDown
