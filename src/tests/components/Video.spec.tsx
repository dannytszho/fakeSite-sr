import { render } from '@testing-library/react'
import VideosCard from '../../components/VideosCard'
import '@testing-library/jest-dom'

describe('Videos', () => {
    let expectedProps: { title: string }

    beforeEach(() => {
        expectedProps = {
            title: 'Manila is Full of Men Named Boy',
        }
    })

    it('should render', () => {
        const { getByText } = render(<VideosCard />)

        const title = getByText(expectedProps.title)

        expect(title).toBeVisible()
    })
})
