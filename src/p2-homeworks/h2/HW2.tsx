import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "low" | "high" | "middle"
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'English', priority: 'high'},
    {_id: 3, name: 'German', priority: 'low'},
    {_id: 4, name: 'JS', priority: 'high'},
    {_id: 5, name: 'HTML&CSS', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs
    else if (filter === 'low') return affairs.filter(a => a.priority === "low")
    else if (filter === 'middle') return affairs.filter(a => a.priority === "middle")
    else return affairs.filter(a => a.priority === "high")
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id!==_id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            <h3>HomeWork 2</h3>
            <hr/>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default HW2
