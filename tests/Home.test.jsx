import {render, screen} from '@testing-library/react'
import Home from "../src/Home";

describe('Home', () => {
    it('renders Home component', () => {
        render(<Home />)

        screen.debug()
    })
})