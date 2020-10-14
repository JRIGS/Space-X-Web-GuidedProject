import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import MissionForm from './MissionForm'

describe('MissionForm Tests', ()=>{
    test('render without error', () =>{
        render(<MissionForm/>)
    });
});

test('renders message when isFetching Data is true,', () =>{
    render(<MissionForm isFetchingData={true}/>)
    expect(screen.getByText(/we are fetching data/i)).not.toBeNull()
    expect(screen.queryByText(/get data/i)).toBeNull()
})

test('renders button when isFetching Data is false,', () =>{
    render(<MissionForm isFetchingData={false}/>)
    expect(screen.queryByRole('button', /get data/i)).not.toBeNull()
    expect(screen.queryByText(/we are fetching data/i)).toBeNull()
})

test('calls getData when button is pressed,', () =>{
    const mockGetData = jest.fn(() =>{
        return("jon")
    });

    render(<MissionForm getData={()=>mockGetData(122, "jon")}/>);

    const button = screen.queryByRole('button', /get data/i)
    fireEvent.click(button)

    // mockGetData.mockReturnValue("jon")
    
    console.log(mockGetData.mock);

    
})
// Arrange
// Act
// Assert